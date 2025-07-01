import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactUs: React.FC = () => {
  const { t } = useLanguage();
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

  // 导航栏样式
  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#1a73e8',
    padding: '0.75rem 0'
  };

  const navContainerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const menuStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const menuItemStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    padding: '0.5rem 0'
  };

  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    color: '#1a73e8',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.9rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? 'auto' : '100vh',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isMobile ? 'flex-start' : 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    padding: isMobile ? '6rem 1rem 3rem' : '6rem 1rem 2rem'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    width: '100%'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    background: 'linear-gradient(45deg, #ffffff, #e0e7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : 'clamp(1rem, 3vw, 1.5rem)',
    marginBottom: isMobile ? '2rem' : '3rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: `0 auto ${isMobile ? '2rem' : '3rem'}`
  };

  const contactCardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    height: 'auto',
    minHeight: isMobile ? '150px' : '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const contactIconStyle: React.CSSProperties = {
    fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 4vw, 3rem)',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    display: 'block'
  };

  const contactTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : 'clamp(1.1rem, 2.5vw, 1.3rem)',
    fontWeight: '600',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    color: '#ffffff'
  };

  const contactInfoStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.85rem' : 'clamp(0.9rem, 2vw, 1rem)',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.6'
  };

  const footerTextStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.8rem' : 'clamp(0.8rem, 1.5vw, 0.9rem)',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: isMobile ? '2rem' : '3rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '2rem',
    paddingBottom: isMobile ? '2rem' : '0'
  };

  const menuItems = [
    { name: t('nav.home') },
    { name: t('nav.products') },
    { name: t('nav.tutorials') },
    { name: t('nav.partnership') },
    { name: t('nav.about') }
  ];

  return (
    <section style={sectionStyle}>
      {/* 顶部导航 - 固定定位 */}
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <div style={logoStyle}>
            <span style={{ fontSize: '2rem' }}>🚀</span>
            <span>{t('contact.brand')}</span>
          </div>

          {/* 桌面菜单 */}
          <ul style={{ 
            ...menuStyle, 
            display: isMobile ? 'none' : 'flex' 
          }}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <span
                  style={menuItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  }}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>

          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
{t('contact.customize')}
          </button>
        </div>
      </nav>

      <div style={containerStyle}>
        <h2 style={titleStyle}>{t('contact.title')}</h2>
        <p style={subtitleStyle}>
          {t('contact.subtitle')}
        </p>

        {/* 响应式联系卡片网格 */}
        <div className={isMobile ? "mobile-contact-grid" : "contact-grid"}>
          <div
            style={contactCardStyle}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <span style={contactIconStyle}>📞</span>
            <h3 style={contactTitleStyle}>{t('contact.phone')}</h3>
            <p style={contactInfoStyle}>
              {t('contact.phone.number')}<br/>
              {t('contact.phone.hours')}
            </p>
          </div>

          <div
            style={contactCardStyle}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <span style={contactIconStyle}>📧</span>
            <h3 style={contactTitleStyle}>{t('contact.email')}</h3>
            <p style={contactInfoStyle}>
              {t('contact.email.business')}<br/>
              {t('contact.email.sales')}
            </p>
          </div>

          <div
            style={contactCardStyle}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            <span style={contactIconStyle}>💬</span>
            <h3 style={contactTitleStyle}>{t('contact.wechat')}</h3>
            <p style={contactInfoStyle}>
              {t('contact.wechat.id')}<br/>
              {t('contact.wechat.qr')}
            </p>
          </div>
        </div>

        <div style={footerTextStyle}>
          <p>{t('contact.copyright')}</p>
          <p>{t('contact.slogan')}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 