import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';

const FloatingToolbar: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const navigate = useNavigate();
  const { openContactModal } = useModal();

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

  // 容器：按照图2的排版，去掉头像与装饰点，保留白底、圆角、阴影与分隔线
  const toolbarStyle: React.CSSProperties = {
    position: 'fixed',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    background: '#ffffff',
    borderRadius: '16px',
    padding: '8px 0',
    boxShadow: '0 8px 28px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '92px',
    backdropFilter: 'saturate(150%) blur(8px)',
    border: '1px solid rgba(0, 0, 0, 0.06)'
  };

  const buttonStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    padding: '12px 8px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    color: '#4b5563',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: 1.1
  };

  const iconWrapperStyle: React.CSSProperties = {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    background: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s ease'
  };

  const labelStyle: React.CSSProperties = {
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    textAlign: 'center'
  };

  const separatorStyle: React.CSSProperties = {
    height: '1px',
    width: '62%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.06)'
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEnter: boolean) => {
    const iconBox = e.currentTarget.querySelector('.icon-box') as HTMLDivElement | null;
    if (isEnter) {
      e.currentTarget.style.backgroundColor = 'rgba(17, 24, 39, 0.03)';
      e.currentTarget.style.color = '#1f2937';
      if (iconBox) iconBox.style.backgroundColor = '#eef2ff';
    } else {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = '#4b5563';
      if (iconBox) iconBox.style.backgroundColor = '#f3f4f6';
    }
  };

  // 单色SVG图标（与图2风格一致，但保持白色面板）
  const IconChat = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
    </svg>
  );
  const IconCalendar = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
  const IconWeChat = () => (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 40c-8 0-14-5.8-14-13s6-13 14-13c7.7 0 14 5.8 14 13 0 2.1-.6 4-1.6 5.7L38 36l-6.7-.9C28.7 38.3 24.7 40 20 40Z" stroke="#1f2937" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="24" r="2" fill="#1f2937"/>
      <circle cx="24" cy="24" r="2" fill="#1f2937"/>
    </svg>
  );
  const IconPhone = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h4.09a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 6 6l2.46-1.08a2 2 0 0 1 2.11.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
  const IconDownload = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );

  const items = [
    { key: 'online', label: '在线咨询', icon: <IconChat/>, onClick: () => openContactModal() },
    { key: 'demo', label: '预约演示', icon: <IconCalendar/>, onClick: () => openContactModal() },
    { key: 'wechat', label: '微信咨询', icon: <IconWeChat/>, onClick: () => openContactModal() },
    { key: 'phone', label: '电话咨询', icon: <IconPhone/>, onClick: () => navigate('/contact') }
  ];

  return (
    <div style={toolbarStyle}>
      {items.map((item, idx) => (
        <React.Fragment key={item.key}>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={item.onClick}
          >
            <div className="icon-box" style={iconWrapperStyle}>
              {item.icon}
            </div>
            <span style={labelStyle}>{item.label}</span>
          </button>
          {idx !== items.length - 1 && <div style={separatorStyle}></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FloatingToolbar;