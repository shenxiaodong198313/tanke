import React from 'react';

const FloatingToolbar: React.FC = () => {
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

  // 如果是移动设备，不显示悬浮工具条
  if (isMobile) {
    return null;
  }

  const toolbarStyle: React.CSSProperties = {
    position: 'fixed',
    right: '10px', // 更贴近浏览器边缘
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    background: 'white',
    borderRadius: '50px',
    padding: '20px 0',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.8)'
  };

  const avatarContainerStyle: React.CSSProperties = {
    width: '42px', // 相应缩小头像
    height: '42px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '15px',
    border: '2px solid #e3f2fd', // 缩小边框
    position: 'relative'
  };

  const avatarStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem', // 缩小头像emoji
    color: 'white'
  };

  const dotsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '4px',
    marginBottom: '20px'
  };

  const dotStyle: React.CSSProperties = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#2196f3'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    width: '100%'
  };

  const buttonStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    padding: '12px 6px', // 缩小padding以适应窄宽度
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px', // 减少间距
    fontSize: '0.85rem', // 相当于12px的rem大小
    color: '#666',
    fontWeight: '500',
    position: 'relative',
    lineHeight: 1
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    marginBottom: '2px'
  };

  const separatorStyle: React.CSSProperties = {
    width: '60px',
    height: '1px',
    backgroundColor: '#f0f0f0',
    margin: '0 auto'
  };

  // 防止中文在窄容器内自动换行
  const labelStyle: React.CSSProperties = {
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    textAlign: 'center',
    display: 'block'
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEnter: boolean) => {
    if (isEnter) {
      e.currentTarget.style.backgroundColor = '#f8f9ff';
      e.currentTarget.style.color = '#2196f3';
    } else {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = '#666';
    }
  };

  return (
    <div style={toolbarStyle}>
      {/* 头像 */}
      <div style={avatarContainerStyle}>
        <div style={avatarStyle}>
          👩‍💼
        </div>
      </div>

      {/* 装饰点 */}
      <div style={dotsStyle}>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
      </div>

      {/* 功能按钮 */}
      <div style={buttonContainerStyle}>
        {/* 微信咨询 */}
        <button
          style={buttonStyle}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => {
            // 这里可以添加微信咨询的逻辑
            console.log('微信咨询');
          }}
        >
          <div style={iconStyle}>💬</div>
          <span style={labelStyle}>微信咨询</span>
        </button>
        
        <div style={separatorStyle}></div>

        {/* 电话咨询 */}
        <button
          style={buttonStyle}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => {
            // 这里可以添加电话咨询的逻辑
            console.log('电话咨询');
          }}
        >
          <div style={iconStyle}>🎧</div>
          <span style={labelStyle}>电话咨询</span>
        </button>

        <div style={separatorStyle}></div>

        {/* 预约演示 */}
        <button
          style={buttonStyle}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => {
            // 这里可以添加预约演示的逻辑
            console.log('预约演示');
          }}
        >
          <div style={iconStyle}>📊</div>
          <span style={labelStyle}>预约演示</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingToolbar; 