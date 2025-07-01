import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const KuaiDetails: React.FC = () => {
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

  const marketingModules = [
    {
      title: t('marketing.interaction'),
      subtitle: t('marketing.interaction.subtitle'),
      description: t('marketing.interaction.description'),
      icon: "👆",
      color: "#f59e0b"
    },
    {
      title: t('marketing.email'), 
      subtitle: t('marketing.email.subtitle'),
      description: t('marketing.email.description'),
      icon: "📧",
      color: "#f59e0b"
    },
    {
      title: t('marketing.wechat'),
      subtitle: t('marketing.wechat.subtitle'),
      description: t('marketing.wechat.description'),
      icon: "💬",
      color: "#f59e0b"
    },
    {
      title: t('marketing.sms'),
      subtitle: t('marketing.sms.subtitle'),
      description: t('marketing.sms.description'),
      icon: "📱",
      color: "#f59e0b"
    },
    {
      title: t('marketing.aiCall'),
      subtitle: t('marketing.aiCall.subtitle'),
      description: t('marketing.aiCall.description'),
      icon: "🎧",
      color: "#f59e0b"
    },
    {
      title: t('marketing.tiktok'),
      subtitle: t('marketing.tiktok.subtitle'),
      description: t('marketing.tiktok.description'),
      icon: "🎵",
      color: "#f59e0b"
    },
    {
      title: t('marketing.5g'),
      subtitle: t('marketing.5g.subtitle'),
      description: t('marketing.5g.description'),
      icon: "📨",
      color: "#f59e0b"
    },
    {
      title: t('marketing.whatsapp'),
      subtitle: t('marketing.whatsapp.subtitle'),
      description: t('marketing.whatsapp.description'),
      icon: "📞",
      color: "#f59e0b"
    }
  ];



  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? 'auto' : '100vh',
    padding: isMobile ? '6rem 1rem 3rem' : '6rem 1rem 2rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isMobile ? 'flex-start' : 'center',
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 0.5rem',
    width: '100%'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: isMobile ? '1.5rem 1rem' : 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
    textAlign: 'center',
    border: '1px solid #f0f0f0',
    transition: 'all 0.3s ease',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    minHeight: isMobile ? '200px' : 'auto'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 4vw, 3rem)',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    display: 'block',
    color: '#f59e0b'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.1rem' : 'clamp(1.2rem, 3vw, 1.4rem)',
    fontWeight: '600',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    color: '#333'
  };

  const cardSubtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.8rem' : 'clamp(0.85rem, 2vw, 0.95rem)',
    color: '#666',
    marginBottom: isMobile ? '0.6rem' : '0.8rem',
    lineHeight: '1.4'
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.75rem' : 'clamp(0.8rem, 1.8vw, 0.9rem)',
    lineHeight: '1.5',
    color: '#888'
  };



  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 标题区域 */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '2rem' : '3rem',
          padding: '0 1rem'
        }}>
          <h1 style={{
            fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#333',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t('marketing.title')}
          </h1>
          <p style={{
            fontSize: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t('marketing.subtitle')}
          </p>
        </div>

        {/* 8个营销模块 - 响应式网格 */}
        <div className={isMobile ? "mobile-8-grid" : "responsive-grid-8"}>
          {marketingModules.map((module, index) => (
            <div
              key={module.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              <span style={iconStyle}>{module.icon}</span>
              <h3 style={cardTitleStyle}>{module.title}</h3>
              <p style={cardSubtitleStyle}>{module.subtitle}</p>
              <p style={cardDescStyle}>{module.description}</p>
            </div>
          ))}
        </div>

        {/* 底部简化的CTA */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: isMobile ? '2rem' : '3rem',
          paddingBottom: isMobile ? '2rem' : '0'
        }}>
          <p style={{
            fontSize: isMobile ? '0.95rem' : 'clamp(1rem, 2.5vw, 1.1rem)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}>
            {t('marketing.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default KuaiDetails; 