# 合作伙伴申请API系统

## 概述

这是一个完整的合作伙伴申请管理系统，包含前端表单提交和后端API接口，以及管理员面板用于管理申请记录。

## 功能特性

### 前端功能
- ✅ 合作伙伴申请表单（姓名、公司、职位、手机号）
- ✅ 表单验证（必填字段、手机号格式验证）
- ✅ 实时提交状态反馈
- ✅ 成功/错误消息提示
- ✅ 管理员面板（查看、编辑、删除申请记录）

### 后端API功能
- ✅ 提交合作伙伴申请
- ✅ 获取所有申请记录
- ✅ 更新申请状态（待处理/已通过/已拒绝）
- ✅ 删除申请记录
- ✅ 数据持久化存储（JSON文件）
- ✅ 输入验证和错误处理

## 快速开始

### 1. 启动开发环境

同时启动前端和API服务器：
```bash
npm run dev
```

或者分别启动：

启动API服务器：
```bash
npm run server
```

启动前端开发服务器：
```bash
npm start
```

### 2. 访问地址

- **前端应用**: http://localhost:3000
- **API服务器**: http://localhost:3001
- **管理员面板**: http://localhost:3000/admin (需要手动添加路由)

## API接口文档

### 基础信息
- **基础URL**: `http://localhost:3001/api`
- **数据格式**: JSON
- **字符编码**: UTF-8

### 接口列表

#### 1. 健康检查
```
GET /api/health
```

**响应示例**:
```json
{
  "success": true,
  "message": "API服务器运行正常",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### 2. 提交合作伙伴申请
```
POST /api/partner-applications
```

**请求体**:
```json
{
  "name": "张三",
  "company": "示例公司",
  "position": "销售经理",
  "phone": "13800138000"
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "1704067200000",
    "name": "张三",
    "company": "示例公司",
    "position": "销售经理",
    "phone": "13800138000",
    "status": "pending",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  },
  "message": "申请提交成功！我们会尽快与您联系。"
}
```

#### 3. 获取所有申请记录
```
GET /api/partner-applications
```

**响应示例**:
```json
{
  "success": true,
  "data": [
    {
      "id": "1704067200000",
      "name": "张三",
      "company": "示例公司",
      "position": "销售经理",
      "phone": "13800138000",
      "status": "pending",
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:00:00.000Z",
      "notes": "备注信息"
    }
  ],
  "message": "获取申请记录成功"
}
```

#### 4. 更新申请状态
```
PUT /api/partner-applications/:id
```

**请求体**:
```json
{
  "status": "approved",
  "notes": "审核通过，请联系申请人"
}
```

**状态值**:
- `pending`: 待处理
- `approved`: 已通过
- `rejected`: 已拒绝

#### 5. 删除申请记录
```
DELETE /api/partner-applications/:id
```

#### 6. CTA手机号提交
```
POST /api/cta-phone
```

**功能说明**: 用于网站CTA（Call To Action）组件的手机号快速收集，适用于用户咨询或留资场景。

**请求体**:
```json
{
  "phone": "13800138000"
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "1704067200000",
    "type": "cta",
    "name": "",
    "company": "",
    "position": "",
    "phone": "13800138000",
    "status": "pending",
    "source": "CTA表单",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  },
  "message": "提交成功！我们会尽快与您联系。"
}
```

**特殊说明**:
- 该接口数据会统一存储到 `partner-applications.json` 文件中
- 记录类型标记为 `type: "cta"`，来源标记为 `source: "CTA表单"`
- name、company、position 字段为空字符串，便于后续完善信息
- 可通过现有的申请管理接口进行后续操作（查看、状态更新等）

## 数据存储

申请数据存储在项目根目录的 `partner-applications.json` 文件中，格式如下：

```json
[
  {
    "id": "1704067200000",
    "name": "张三",
    "company": "示例公司",
    "position": "销售经理",
    "phone": "13800138000",
    "status": "pending",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z",
    "notes": "备注信息"
  }
]
```

## 验证规则

### 前端验证
- 所有字段都是必填的
- 手机号格式：1[3-9]xxxxxxxxx（11位中国手机号）

### 后端验证
- 必填字段验证
- 手机号格式验证
- 状态值验证（pending/approved/rejected）

## 错误处理

API返回统一的错误格式：

```json
{
  "success": false,
  "message": "错误描述",
  "error": "详细错误信息"
}
```

常见错误码：
- `400`: 请求参数错误
- `404`: 资源不存在
- `500`: 服务器内部错误

## 使用示例

### 使用curl测试API

1. **提交申请**:
```bash
curl -X POST http://localhost:3001/api/partner-applications \
  -H "Content-Type: application/json" \
  -d '{
    "name": "张三",
    "company": "示例公司",
    "position": "销售经理",
    "phone": "13800138000"
  }'
```

2. **获取所有申请**:
```bash
curl http://localhost:3001/api/partner-applications
```

3. **更新状态**:
```bash
curl -X PUT http://localhost:3001/api/partner-applications/1704067200000 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "approved",
    "notes": "审核通过"
  }'
```

### 使用JavaScript调用API

```javascript
// 提交申请
const submitApplication = async (data) => {
  try {
    const response = await fetch('http://localhost:3001/api/partner-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('提交失败:', error);
  }
};

// 获取所有申请
const getApplications = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/partner-applications');
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('获取失败:', error);
  }
};
```

## 部署说明

### 开发环境
- Node.js 16+
- npm 或 yarn

### 生产环境部署
1. 构建前端应用：`npm run build`
2. 启动API服务器：`npm run server`
3. 配置反向代理（如Nginx）将API请求转发到后端
4. 配置环境变量（如需要）

## 安全考虑

当前版本为开发版本，生产环境部署时建议：

1. 添加身份验证和授权
2. 使用HTTPS
3. 添加请求频率限制
4. 使用数据库替代文件存储
5. 添加日志记录
6. 配置CORS策略

## 故障排除

### 常见问题

1. **端口冲突**
   - 前端默认端口：3000
   - API默认端口：3001
   - 可通过环境变量修改

2. **CORS错误**
   - 确保API服务器正确配置了CORS
   - 检查前端请求URL是否正确

3. **数据文件权限**
   - 确保 `partner-applications.json` 文件有读写权限

4. **依赖安装问题**
   - 使用 `npm install --legacy-peer-deps` 解决依赖冲突

## 更新日志

### v1.0.0 (2024-01-01)
- ✅ 初始版本发布
- ✅ 完整的CRUD操作
- ✅ 前端表单和管理员面板
- ✅ 数据持久化存储
- ✅ 输入验证和错误处理
