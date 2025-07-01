import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const KuaiFeatures: React.FC = () => {
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

  const features = [
    {
      title: t('features.privateLive'),
      description: t('features.privateLive.desc'),
      longDescription: t('features.privateLive.desc'),
      icon: "📺",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea"
    },
    {
      title: t('features.scrm'),
      description: t('features.scrm.desc'),
      longDescription: t('features.scrm.desc'),
      icon: "👥",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f093fb"
    },
    {
      title: t('features.portal'),
      description: t('features.portal.desc'),
      longDescription: t('features.portal.desc'),
      icon: "🏪",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe"
    }
  ];



  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? 'auto' : '100vh',
    padding: isMobile ? '6rem 1rem 3rem' : '6rem 1rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isMobile ? 'flex-start' : 'center',
    position: 'relative',
    overflow: 'visible'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 0.5rem',
    width: '100%'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: isMobile ? '2rem 1rem' : 'clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem)',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    minHeight: isMobile ? '350px' : 'clamp(300px, 40vh, 450px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 5vw, 4rem)',
    marginBottom: isMobile ? '1rem' : '2rem',
    display: 'block'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.5rem' : 'clamp(1.3rem, 3.5vw, 2rem)',
    fontWeight: 'bold',
    marginBottom: isMobile ? '0.8rem' : 'clamp(0.8rem, 2vw, 1rem)',
    color: '#2d3748'
  };

  const descStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : 'clamp(0.9rem, 2.2vw, 1.1rem)',
    color: '#4a5568',
    marginBottom: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.5rem)',
    lineHeight: '1.5'
  };

  const longDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.9rem' : 'clamp(0.8rem, 1.8vw, 1rem)',
    color: '#718096',
    lineHeight: '1.6',
    marginBottom: isMobile ? '1.5rem' : 'clamp(1.5rem, 3vw, 2rem)',
    flex: isMobile ? 'none' : '1'
  };

  const learnMoreStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: isMobile ? '0.8rem 1.5rem' : 'clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)',
    borderRadius: '25px',
    fontWeight: '600',
    fontSize: isMobile ? '0.9rem' : 'clamp(0.8rem, 2vw, 0.95rem)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: 'auto'
  };



  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* AI营销模块 */}
        <div className={isMobile ? "mobile-features-grid" : "responsive-grid-3"}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {/* 顶部装饰条 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: feature.gradient
              }} />

              <span style={iconStyle}>{feature.icon}</span>
              <h3 style={{
                ...titleStyle,
                background: feature.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {feature.title}
              </h3>
              <p style={descStyle}>{feature.description}</p>
              <p style={longDescStyle}>{feature.longDescription}</p>
              
              <button
                style={{
                  ...learnMoreStyle,
                  borderColor: feature.color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = feature.color;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = feature.color;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {t('features.learnMore')}
              </button>
            </div>
          ))}
        </div>

        {/* 底部简化的描述 */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
          paddingTop: '1rem',
          paddingBottom: isMobile ? '2rem' : '0'
        }}>
          <p style={{
            fontSize: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}>
            {t('features.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default KuaiFeatures; 