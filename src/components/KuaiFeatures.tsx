import React from 'react';
import { motion } from 'framer-motion';

const KuaiFeatures: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
    position: 'relative'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: isMobile ? '2rem' : '3rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '28px' : '42px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: isMobile ? '8px' : '12px',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '28px' : '42px',
    fontWeight: 'bold',
    color: '#6b7280',
    marginBottom: isMobile ? '40px' : '60px',
    lineHeight: '1.2'
  };

  const contentAreaStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0 2rem',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '2rem' : '3rem'
  };

  // 左侧微信交互区域
  const wechatSectionStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  };

  // 右侧AI智能体区域
  const aiSectionStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  };

  // 中间连接区域
  const connectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '1rem' : '2rem',
    position: 'relative'
  };

  // 微信对话框样式
  const chatBoxStyle: React.CSSProperties = {
    backgroundColor: '#f0fdf4',
    borderRadius: '12px',
    padding: '12px 16px',
    marginBottom: '12px',
    maxWidth: '280px',
    fontSize: '14px',
    lineHeight: '1.4',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    border: '1px solid #e5e7eb'
  };

  // AI智能体手机样式
  const aiPhoneStyle: React.CSSProperties = {
    width: isMobile ? '200px' : '240px',
    height: isMobile ? '400px' : '480px',
    backgroundColor: '#000',
    borderRadius: '25px',
    padding: '8px',
    position: 'relative',
    boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
  };

  const aiScreenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: '17px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  };

  // 功能标签样式
  const featureTagStyle: React.CSSProperties = {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    margin: '8px',
    display: 'inline-block',
    border: '1px solid #d1d5db'
  };

  // 个人手机图标样式
  const personalPhoneStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    backgroundColor: '#f9fafb',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '8px',
    border: '2px solid #e5e7eb'
  };

  // 微信对话样式
  const wechatChatStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '16px',
    width: '100%',
    maxWidth: '300px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 头部标题区域 */}
        <motion.div 
          style={headerStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={titleStyle}>微信交互</h2>
          <h2 style={subtitleStyle}>AI智能体</h2>
        </motion.div>

        {/* 主要内容区域 */}
        <div style={contentAreaStyle}>
          {/* 左侧微信交互区域 */}
          <motion.div 
            style={wechatSectionStyle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 大量AI智能体标题 */}
            <div style={{ marginBottom: '30px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '0' }}>大量AI智能体</h3>
            </div>

            {/* 微信对话框 */}
            <div style={{
              ...chatBoxStyle,
              marginBottom: '30px',
              position: 'relative'
            }}>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>AI智能体1：让我来帮你解决问题！</div>
              <div style={{ fontSize: '14px', color: '#333' }}>
                您好！我是您的专属AI助手，可以帮助您处理各种问题，包括文档编写、数据分析、代码优化等。请告诉我您需要什么帮助？
              </div>
              {/* 对话框尾巴 */}
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: '20px',
                width: '0',
                height: '0',
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #f0fdf4'
              }}></div>
            </div>

            {/* 个人手机图标 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'flex-start' }}>
              <div style={{
                ...personalPhoneStyle,
                marginRight: '16px'
              }}>📱</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>个人</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>手机</div>
              </div>
              <div style={{ marginLeft: '20px' }}>
                <div style={{
                  backgroundColor: '#f3f4f6',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  color: '#374151',
                  fontWeight: '500',
                  border: '1px solid #d1d5db'
                }}>微信对话</div>
              </div>
            </div>

            {/* 微信对话列表 */}
            <div style={{
              ...wechatChatStyle,
              marginBottom: '30px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#374151', borderRadius: '50%', marginRight: '8px' }}></div>
                <div style={{ fontSize: '14px', fontWeight: '500' }}>客服</div>
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>
                您好，22点后深度学习模型训练将开始，预计需要6小时完成。
                <br />1. 数据集：已准备完成（✓）
                <br />2. 模型：正在优化参数设置
                <br />3. 训练环境：GPU集群已就绪
                <br />4. 预计完成：明日凌晨4点（预计）
              </div>
            </div>

            {/* 左侧功能标签 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{
                ...featureTagStyle,
                backgroundColor: '#f9fafb',
                color: '#374151',
                margin: '0'
              }}>安排任务</div>
              <div style={{
                ...featureTagStyle,
                backgroundColor: '#f9fafb',
                color: '#374151',
                margin: '0'
              }}>定时工程</div>
            </div>
          </motion.div>

          {/* 中间连接区域 */}
          <motion.div 
            style={connectionStyle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* 微信互联图标 */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#6b7280',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              color: 'white',
              marginBottom: '12px',
              boxShadow: '0 8px 20px rgba(107, 114, 128, 0.2)'
            }}>
              💬
            </div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '20px' }}>微信互联</div>
            
            {/* 连接箭头 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px 0',
              gap: '8px'
            }}>
              <div style={{ fontSize: '24px', color: '#9ca3af' }}>←</div>
              <div style={{ fontSize: '24px', color: '#9ca3af' }}>→</div>
            </div>
            
            <div style={{ fontSize: '12px', color: '#6b7280' }}>发现易</div>
          </motion.div>

          {/* 右侧AI智能体区域 */}
          <motion.div 
            style={{
              ...aiSectionStyle,
              position: 'relative'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* 环绕的功能标签 - 上方 */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '20px',
              ...featureTagStyle,
              margin: '0'
            }}>自动加微信</div>
            
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-40px',
              ...featureTagStyle,
              margin: '0'
            }}>智能开启</div>

            {/* AI智能体手机 */}
            <div style={aiPhoneStyle}>
              <div style={aiScreenStyle}>
                {/* 手机状态栏 */}
                <div style={{
                  padding: '12px 16px',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  textAlign: 'center',
                  borderBottom: '1px solid #333'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>中国联通</span>
                    <span>12:27</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '12px', marginTop: '2px' }}>12/23</div>
                </div>

                {/* AI智能体界面 */}
                <div style={{ padding: '16px', flex: 1 }}>
                  <div style={{
                    backgroundColor: '#2d3748',
                    borderRadius: '12px',
                    padding: '12px',
                    marginBottom: '16px',
                    color: 'white'
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>🤖 大量AI智能体</div>
                    <div style={{ fontSize: '12px', lineHeight: '1.4' }}>
                      1. 问答助手：智能问答与知识检索
                      <br />2. 代码助手：自动生成与优化代码片段
                      <br />3. 文档助手：智能文档编写与格式化
                      <br />4. 数据分析：自动分析数据并生成报告
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 环绕的功能标签 - 下方 */}
            <div style={{
              position: 'absolute',
              bottom: '60px',
              right: '-40px',
              ...featureTagStyle,
              margin: '0'
            }}>自动关注</div>
            
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              ...featureTagStyle,
              margin: '0'
            }}>智能引导到微信</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KuaiFeatures;