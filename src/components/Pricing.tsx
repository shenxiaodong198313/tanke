import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
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

  const industryApps = [
    {
      title: '房租租赁',
      color: '#f4f1e8',
      headerColor: '#8b7355',
      appName: '号房网'
    },
    {
      title: '服装箱包',
      color: '#ff6b47',
      headerColor: '#ff6b47',
      appName: '爱搭不将就'
    },
    {
      title: '3c电子',
      color: '#e8f2ff',
      headerColor: '#4a90e2',
      appName: '极地数码'
    },
    {
      title: '社区团购',
      color: '#f0f8ff',
      headerColor: '#52c41a',
      appName: '生鲜到家'
    },
    {
      title: '美食外卖',
      color: '#f6f8fa',
      headerColor: '#52c41a',
      appName: '麻辣送'
    }
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#030303', // 深色背景
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '3rem 1rem' : '4rem 2rem',
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center'
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: isMobile ? '3rem' : '4rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : '3.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
    lineHeight: '1.2',
    letterSpacing: '-2px',
    background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#666',
    lineHeight: '1.6'
  };

  const phonesContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: isMobile ? '1rem' : '2rem',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    maxWidth: '100%'
  };

  const phoneFrameStyle: React.CSSProperties = {
    width: isMobile ? '140px' : '200px',
    height: isMobile ? '280px' : '400px',
    backgroundColor: '#1a1a1a',
    borderRadius: isMobile ? '20px' : '30px',
    padding: isMobile ? '4px' : '6px',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    marginBottom: isMobile ? '1rem' : '0'
  };

  const phoneScreenStyle = (app: any): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
    borderRadius: isMobile ? '16px' : '24px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  });

  const phoneHeaderStyle = (app: any): React.CSSProperties => ({
    backgroundColor: app.headerColor,
    height: isMobile ? '60px' : '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: isMobile ? '0.7rem' : '0.9rem',
    fontWeight: '500',
    position: 'relative'
  });

  const phoneContentStyle: React.CSSProperties = {
    flex: 1,
    padding: isMobile ? '0.5rem' : '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '0.3rem' : '0.5rem'
  };

  const notchStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '4px' : '6px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: isMobile ? '60px' : '80px',
    height: isMobile ? '12px' : '18px',
    backgroundColor: '#1a1a1a',
    borderRadius: isMobile ? '0 0 8px 8px' : '0 0 12px 12px',
    zIndex: 10
  };

  const labelStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.9rem' : '1.1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginTop: isMobile ? '0.5rem' : '1rem'
  };

  const mockContentBoxStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: isMobile ? '4px' : '6px',
    height: isMobile ? '20px' : '30px',
    marginBottom: isMobile ? '0.2rem' : '0.3rem'
  };

  const mockImageStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: isMobile ? '4px' : '6px',
    height: isMobile ? '40px' : '60px',
    marginBottom: isMobile ? '0.3rem' : '0.5rem'
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
          <h2 style={titleStyle}>行业案例</h2>
          <p style={subtitleStyle}>便民式，自动化，一个人就能搞定</p>
        </motion.div>

        {/* 手机展示区域 */}
        <motion.div 
          style={phonesContainerStyle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {industryApps.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={phoneFrameStyle}>
                <div style={notchStyle} />
                <div style={phoneScreenStyle(app)}>
                  {/* 手机状态栏 */}
                <div style={{
                    height: isMobile ? '16px' : '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 0.5rem',
                    fontSize: isMobile ? '0.5rem' : '0.6rem',
                    color: '#666'
                  }}>
                    <span>10:44</span>
                    <span>●●●</span>
                  </div>

                  {/* 应用头部 */}
                  <div style={phoneHeaderStyle(app)}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: isMobile ? '16px' : '20px',
                        height: isMobile ? '16px' : '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '4px'
                      }} />
                      <span style={{ fontSize: isMobile ? '0.6rem' : '0.8rem' }}>
                        {app.appName}
                      </span>
                      <div style={{
                        backgroundColor: '#4ade80',
                        color: 'white',
                        padding: '1px 4px',
                        borderRadius: '2px',
                        fontSize: isMobile ? '0.4rem' : '0.5rem'
                      }}>
                        小程序
                      </div>
                    </div>
                  </div>

                  {/* 应用内容 */}
                  <div style={phoneContentStyle}>
                    {/* 模拟界面内容 */}
                    <div style={mockImageStyle} />
                    
                    {/* 功能按钮区域 */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)',
                      gap: isMobile ? '0.2rem' : '0.3rem',
                      marginBottom: isMobile ? '0.3rem' : '0.5rem'
                    }}>
                      {[...Array(isMobile ? 8 : 10)].map((_, i) => (
                        <div key={i} style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.6)',
                          borderRadius: isMobile ? '3px' : '4px',
                          height: isMobile ? '12px' : '16px'
                        }} />
                      ))}
                    </div>

                    {/* 列表内容 */}
                    {[...Array(isMobile ? 3 : 4)].map((_, i) => (
                      <div key={i} style={mockContentBoxStyle} />
                    ))}

                    {/* 底部导航栏 */}
                    <div style={{
                      marginTop: 'auto',
                      height: isMobile ? '40px' : '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: isMobile ? '4px' : '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around'
                    }}>
                      {[...Array(3)].map((_, i) => (
                        <div key={i} style={{
                          width: isMobile ? '20px' : '25px',
                          height: isMobile ? '20px' : '25px',
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          borderRadius: '50%'
                        }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 标签 */}
              <div style={labelStyle}>{app.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 