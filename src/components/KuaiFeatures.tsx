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
    background: 'linear-gradient(135deg, #f8faff 0%, #e8f4fd 100%)',
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
    marginBottom: isMobile ? '3rem' : '4rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : '3.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#666',
    marginBottom: '2rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const contentAreaStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '500px' : '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  // 手机容器 - 缩小尺寸
  const phoneContainerStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 10
  };

  const phoneFrameStyle: React.CSSProperties = {
    width: isMobile ? '180px' : '220px',
    height: isMobile ? '360px' : '440px',
    backgroundColor: '#1a1a1a',
    borderRadius: '25px',
    padding: '6px',
    position: 'relative',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
  };

  const phoneScreenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '19px',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const phoneContentStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    padding: isMobile ? '1rem' : '1.5rem',
    fontSize: isMobile ? '0.7rem' : '0.8rem'
  };

  const notchStyle: React.CSSProperties = {
    position: 'absolute',
    top: '6px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '18px',
    backgroundColor: '#1a1a1a',
    borderRadius: '0 0 12px 12px',
    zIndex: 10
  };

  // 手机背后的背景图
  const phoneBackgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '300px' : '400px',
    height: isMobile ? '300px' : '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(22, 119, 255, 0.1) 0%, rgba(105, 177, 255, 0.05) 50%, transparent 100%)',
    zIndex: 1
  };

  // 环绕手机的模块样式
  const moduleBaseStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: isMobile ? '12px' : '16px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    zIndex: 5,
    fontSize: isMobile ? '0.75rem' : '0.85rem'
  };

  // 左上角模块
  const topLeftModuleStyle: React.CSSProperties = {
    ...moduleBaseStyle,
    top: isMobile ? '20%' : '15%',
    left: isMobile ? '5%' : '8%',
    width: isMobile ? '140px' : '160px'
  };

  // 右上角模块  
  const topRightModuleStyle: React.CSSProperties = {
    ...moduleBaseStyle,
    top: isMobile ? '20%' : '15%',
    right: isMobile ? '5%' : '8%',
    width: isMobile ? '140px' : '160px'
  };

  // 左下角模块
  const bottomLeftModuleStyle: React.CSSProperties = {
    ...moduleBaseStyle,
    bottom: isMobile ? '20%' : '15%',
    left: isMobile ? '5%' : '8%',
    width: isMobile ? '140px' : '160px'
  };

  // 右下角模块
  const bottomRightModuleStyle: React.CSSProperties = {
    ...moduleBaseStyle,
    bottom: isMobile ? '20%' : '15%',
    right: isMobile ? '5%' : '8%',
    width: isMobile ? '140px' : '160px'
  };

  const moduleIconStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    fontSize: '1rem'
  };

  const moduleTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '4px'
  };

  const moduleDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.75rem' : '0.8rem',
    color: '#666',
    lineHeight: '1.4'
  };

  const moduleTagStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#f0f8ff',
    color: '#1677ff',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: isMobile ? '0.65rem' : '0.7rem',
    fontWeight: '500',
    marginTop: '8px'
  };

  const successTagStyle: React.CSSProperties = {
    backgroundColor: '#e8f5e8',
    color: '#52c41a',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: isMobile ? '0.7rem' : '0.75rem',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '8px'
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
          <h2 style={titleStyle}>定制主题，国际语言</h2>
          <p style={subtitleStyle}>
            Ant Design Mini 开放更多主题样式，国际语言随意切换组件文案
          </p>
        </motion.div>

        {/* 主要内容区域 */}
        <div style={contentAreaStyle}>
          {/* 手机背景圆形 */}
          <div style={phoneBackgroundStyle} />

          {/* 左上角模块 */}
          <motion.div 
            style={topLeftModuleStyle}
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={moduleIconStyle}>🎨</div>
            <h3 style={moduleTitleStyle}>组件定制化</h3>
            <p style={moduleDescStyle}>
              组件定制化，享受国际化的语言切换与编辑，明亮两种主题模式
            </p>
            <div style={moduleTagStyle}>3分钟即可</div>
          </motion.div>

          {/* 右上角模块 */}
          <motion.div 
            style={topRightModuleStyle}
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={moduleIconStyle}>🌐</div>
            <h3 style={moduleTitleStyle}>组件定制化</h3>
            <p style={moduleDescStyle}>
              组件定制化，享受国际化的语言切换与编辑，明亮两种主题模式
            </p>
            <div style={moduleTagStyle}>功能扩展</div>
          </motion.div>

          {/* 中间手机展示 */}
          <motion.div 
            style={phoneContainerStyle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div style={phoneFrameStyle}>
              <div style={notchStyle} />
              <div style={phoneScreenStyle}>
                <div style={phoneContentStyle}>
                  <div style={{
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.3rem'
                  }}>
                    ANTD MINI
                  </div>
                  <div style={{
                    fontSize: isMobile ? '1.1rem' : '1.2rem',
                    fontWeight: 'bold',
                    marginBottom: '0.8rem'
                  }}>
                    OPEN SOURCE
                  </div>
                  <div style={{
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    opacity: 0.8,
                    marginBottom: '1.5rem'
                  }}>
                    Make the mini program<br/>
                    development more efficient
                  </div>
                  
                  {/* 模拟界面元素 */}
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '0.8rem',
                    marginBottom: '0.8rem',
                    textAlign: 'left'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.4rem'}}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        marginRight: '6px'
                      }} />
                      <span style={{fontSize: isMobile ? '0.6rem' : '0.65rem'}}>不喜欢墙</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        marginRight: '6px'
                      }} />
                      <span style={{fontSize: isMobile ? '0.6rem' : '0.65rem'}}>功能扩展</span>
                      <span style={{
                        backgroundColor: 'red',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        marginLeft: '3px'
                      }} />
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '6px',
                    justifyContent: 'center'
                  }}>
                    <button style={{
                      backgroundColor: '#1677ff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '16px',
                      padding: '6px 12px',
                      fontSize: isMobile ? '0.6rem' : '0.65rem'
                    }}>
                      登陆
                    </button>
                    <button style={{
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '16px',
                      padding: '6px 12px',
                      fontSize: isMobile ? '0.6rem' : '0.65rem'
                    }}>
                      注册
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 左下角模块 */}
          <motion.div 
            style={bottomLeftModuleStyle}
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div style={moduleIconStyle}>⚙️</div>
            <h3 style={moduleTitleStyle}>确认</h3>
            <p style={moduleDescStyle}>
              享受国际化的语言切换与编辑，明亮两种主题模式
            </p>
            <div style={moduleTagStyle}>选择其他方式</div>
          </motion.div>

          {/* 右下角模块 */}
          <motion.div 
            style={bottomRightModuleStyle}
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div style={moduleIconStyle}>✅</div>
            <h3 style={moduleTitleStyle}>操作成功</h3>
            <p style={moduleDescStyle}>
              您已成功完成了详细定制化的深度学习
            </p>
            <div style={successTagStyle}>
              ✓ 操作成功
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KuaiFeatures; 