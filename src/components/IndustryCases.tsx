import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const IndustryCases: React.FC = () => {
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

  const industryCases = [
    {
      title: t('industry.manufacturing'),
      icon: "🏭",
      description: t('industry.manufacturing.desc'),
      color: "#e91e63"
    },
    {
      title: t('industry.localBusiness'), 
      icon: "👨‍🍳",
      description: t('industry.localBusiness.desc'),
      color: "#e91e63"
    },
    {
      title: t('industry.beauty'),
      icon: "💄", 
      description: t('industry.beauty.desc'),
      color: "#e91e63"
    },
    {
      title: t('industry.homeDecor'),
      icon: "🏠",
      description: t('industry.homeDecor.desc'),
      color: "#e91e63"
    },
    {
      title: t('industry.anyAccount'),
      icon: "📱",
      description: t('industry.anyAccount.desc'),
      color: "#e91e63"
    }
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    height: '100vh',
    background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    padding: isMobile ? '2rem 1rem' : '3rem 2rem',
    boxSizing: 'border-box',
    overflow: 'hidden'
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
    padding: isMobile ? '1.5rem 1rem' : 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 1.5vw, 1.5rem)',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(233, 30, 99, 0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    minHeight: isMobile ? '280px' : 'clamp(250px, 30vh, 320px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : 'clamp(2.5rem, 4vw, 3.5rem)',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    background: 'linear-gradient(135deg, #e91e63, #ad1457)',
    borderRadius: '50%',
    width: isMobile ? '60px' : '80px',
    height: isMobile ? '60px' : '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.2rem' : 'clamp(1.2rem, 2.8vw, 1.5rem)',
    fontWeight: 'bold',
    marginBottom: isMobile ? '0.8rem' : 'clamp(0.8rem, 1.5vw, 1rem)',
    color: '#2d3748'
  };

  const descStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.85rem' : 'clamp(0.85rem, 1.8vw, 0.95rem)',
    color: '#4a5568',
    lineHeight: '1.6',
    flex: '1'
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
            fontSize: isMobile ? '1.8rem' : 'clamp(2.2rem, 4.5vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#333',
            lineHeight: '1.3'
          }}>
            {t('industry.title')}
          </h1>
        </div>

        {/* 5个行业案例 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)',
          gap: isMobile ? '1.5rem' : '1rem',
          width: '100%'
        }}>
          {industryCases.map((industryCase, index) => (
            <div
              key={industryCase.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(233, 30, 99, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(233, 30, 99, 0.1)';
                }
              }}
            >
              {/* 顶部装饰条 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(135deg, ${industryCase.color}, #ad1457)`
              }} />

              <div style={iconStyle}>{industryCase.icon}</div>
              <h3 style={titleStyle}>{industryCase.title}</h3>
              <p style={descStyle}>{industryCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCases; 