const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(helmet());

// CORS 仅允许配置的来源（逗号分隔），默认本地前端
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3002')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Admin-Token'],
  credentials: false,
  maxAge: 600
}));

// 参数污染防护 & 请求体大小限制
app.use(hpp());
app.use(bodyParser.json({ limit: '64kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '64kb' }));

// 速率限制（基础保护）
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', apiLimiter);

// 数据存储文件路径
const dataFilePath = path.join(__dirname, 'partner-applications.json');

// 确保数据文件存在
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2));
}

// 读取申请数据
const readApplications = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('读取数据文件失败:', error);
    return [];
  }
};

// 写入申请数据
const writeApplications = (applications) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(applications, null, 2));
    return true;
  } catch (error) {
    console.error('写入数据文件失败:', error);
    return false;
  }
};

// 获取所有申请记录
app.get('/api/partner-applications', (req, res) => {
  try {
    const applications = readApplications();
    res.json({
      success: true,
      data: applications,
      message: '获取申请记录成功'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取申请记录失败',
      error: error.message
    });
  }
});

// 提交合作伙伴申请
app.post('/api/partner-applications', (req, res) => {
  try {
    const { name, company, position, phone } = req.body;

    // 验证必填字段
    if (!name || !company || !position || !phone) {
      return res.status(400).json({
        success: false,
        message: '请填写所有必填字段'
      });
    }

    // 验证手机号格式（简单的中国手机号验证）
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: '请输入正确的手机号码'
      });
    }

    // 基础长度限制，防止异常大输入
    const isTooLong = (v, max) => typeof v === 'string' && v.trim().length > max;
    if (isTooLong(name, 50) || isTooLong(company, 100) || isTooLong(position, 60)) {
      return res.status(400).json({
        success: false,
        message: '字段长度超出限制'
      });
    }

    // 创建新的申请记录
    const newApplication = {
      id: Date.now().toString(),
      name,
      company,
      position,
      phone,
      status: 'pending', // pending, approved, rejected
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // 读取现有数据
    const applications = readApplications();
    
    // 添加新申请
    applications.push(newApplication);
    
    // 保存数据
    if (writeApplications(applications)) {
      res.json({
        success: true,
        data: newApplication,
        message: '申请提交成功！我们会尽快与您联系。'
      });
    } else {
      res.status(500).json({
        success: false,
        message: '申请提交失败，请稍后重试'
      });
    }
  } catch (error) {
    console.error('提交申请失败:', error);
    res.status(500).json({
      success: false,
      message: '服务器错误，请稍后重试'
    });
  }
});

// 管理员校验中间件（要求请求头 X-Admin-Token 与环境变量一致）
const requireAdmin = (req, res, next) => {
  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken) {
    return res.status(503).json({ success: false, message: '管理员令牌未配置' });
  }
  if (req.header('X-Admin-Token') !== adminToken) {
    return res.status(401).json({ success: false, message: '未授权' });
  }
  next();
};

// 更新申请状态（管理员功能）
app.put('/api/partner-applications/:id', requireAdmin, (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: '无效的状态值'
      });
    }

    if (notes && String(notes).length > 500) {
      return res.status(400).json({
        success: false,
        message: '备注长度超出限制'
      });
    }

    const applications = readApplications();
    const applicationIndex = applications.findIndex(app => app.id === id);

    if (applicationIndex === -1) {
      return res.status(404).json({
        success: false,
        message: '申请记录不存在'
      });
    }

    // 更新申请状态
    applications[applicationIndex] = {
      ...applications[applicationIndex],
      status,
      notes: notes || applications[applicationIndex].notes,
      updatedAt: new Date().toISOString()
    };

    if (writeApplications(applications)) {
      res.json({
        success: true,
        data: applications[applicationIndex],
        message: '申请状态更新成功'
      });
    } else {
      res.status(500).json({
        success: false,
        message: '更新失败，请稍后重试'
      });
    }
  } catch (error) {
    console.error('更新申请状态失败:', error);
    res.status(500).json({
      success: false,
      message: '服务器错误，请稍后重试'
    });
  }
});

// 删除申请记录（管理员功能）
app.delete('/api/partner-applications/:id', requireAdmin, (req, res) => {
  try {
    const { id } = req.params;
    const applications = readApplications();
    const applicationIndex = applications.findIndex(app => app.id === id);

    if (applicationIndex === -1) {
      return res.status(404).json({
        success: false,
        message: '申请记录不存在'
      });
    }

    // 删除申请记录
    applications.splice(applicationIndex, 1);

    if (writeApplications(applications)) {
      res.json({
        success: true,
        message: '申请记录删除成功'
      });
    } else {
      res.status(500).json({
        success: false,
        message: '删除失败，请稍后重试'
      });
    }
  } catch (error) {
    console.error('删除申请记录失败:', error);
    res.status(500).json({
      success: false,
      message: '服务器错误，请稍后重试'
    });
  }
});

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API服务器运行正常',
    timestamp: new Date().toISOString()
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 合作伙伴申请API服务器已启动`);
  console.log(`📍 服务器地址: http://localhost:${PORT}`);
  console.log(`📝 API文档:`);
  console.log(`   GET  /api/partner-applications - 获取所有申请记录`);
  console.log(`   POST /api/partner-applications - 提交新申请`);
  console.log(`   PUT  /api/partner-applications/:id - 更新申请状态`);
  console.log(`   DELETE /api/partner-applications/:id - 删除申请记录`);
  console.log(`   GET  /api/health - 健康检查`);
  console.log(`📁 数据文件: ${dataFilePath}`);
});

module.exports = app;
