import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
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

  const pricingPlans = [
    {
      name: t('pricing.personal'),
      price: '399',
      originalPrice: '699',
      currency: '¥',
      features: [
        t('pricing.personal.feature1'),
        t('pricing.personal.feature2'),
        t('pricing.personal.feature3'),
        t('pricing.personal.feature4')
      ],
      buttonText: t('pricing.personal.button'),
      buttonStyle: 'outline',
      popular: false
    },
    {
      name: t('pricing.professional'),
      price: '999',
      originalPrice: '1999',
      currency: '¥',
      features: [
        t('pricing.professional.feature1'),
        t('pricing.professional.feature2'),
        t('pricing.professional.feature3'),
        t('pricing.professional.feature4')
      ],
      buttonText: t('pricing.professional.button'),
      buttonStyle: 'filled',
      popular: true
    },
    {
      name: t('pricing.oem'),
      price: '??',
      originalPrice: '??',
      currency: '¥',
      features: [
        t('pricing.oem.feature1'),
        t('pricing.oem.feature2'),
        t('pricing.oem.feature3'),
        t('pricing.oem.feature4')
      ],
      buttonText: t('pricing.oem.button'),
      buttonStyle: 'outline',
      popular: false
    }
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    height: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(120, 200, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 120, 200, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 255, 200, 0.05) 0%, transparent 50%)
    `,
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

  const cardStyle = (plan: any): React.CSSProperties => ({
    backgroundColor: plan.popular 
      ? 'rgba(255, 255, 255, 0.98)' 
      : 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
    textAlign: 'center',
    backdropFilter: 'blur(20px)',
    border: plan.popular 
      ? '2px solid #4fc3f7' 
      : '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: plan.popular 
      ? '0 20px 60px rgba(79, 195, 247, 0.3), 0 8px 30px rgba(0, 0, 0, 0.2)' 
      : '0 8px 32px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    transform: plan.popular && !isMobile ? 'scale(1.05)' : 'scale(1)',
    zIndex: plan.popular ? 2 : 1
  });

  const priceStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : '3rem',
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: '0.5rem',
    background: 'linear-gradient(135deg, #1a73e8, #4fc3f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const originalPriceStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#999',
    textDecoration: 'line-through',
    marginLeft: '0.5rem'
  };

  const buttonStyle = (plan: any): React.CSSProperties => ({
    width: '100%',
    padding: isMobile ? '1rem' : '1.2rem 2rem',
    borderRadius: '50px',
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: plan.buttonStyle === 'filled' ? 'none' : '2px solid #1a73e8',
    backgroundColor: plan.buttonStyle === 'filled' ? 'linear-gradient(135deg, #1a73e8, #4fc3f7)' : 'transparent',
    color: plan.buttonStyle === 'filled' ? 'white' : '#1a73e8',
    background: plan.buttonStyle === 'filled' ? 'linear-gradient(135deg, #1a73e8, #4fc3f7)' : 'transparent'
  });

  return (
    <section style={sectionStyle}>
      {/* 动画背景点 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
      }} />
      
      <div style={containerStyle}>
        {/* 标题区域 */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '3rem' : '4rem',
          padding: '0 1rem'
        }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#ffffff',
            background: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t('pricing.title')}
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : 'clamp(1.2rem, 2.5vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* 定价卡片 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '2rem' : '1.5rem',
          width: '100%',
          alignItems: 'flex-start'
        }}>
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              style={cardStyle(plan)}
              onMouseEnter={(e) => {
                if (!isMobile && !plan.popular) {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.25)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !plan.popular) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
                }
              }}
            >
              {/* 推荐标签 */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0 0 15px 15px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  {t('pricing.recommended')}
                </div>
              )}

              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.8rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                marginTop: plan.popular ? '1rem' : '0',
                color: '#2d3748'
              }}>
                {plan.name}
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <span style={priceStyle}>
                  {plan.currency}{plan.price}
                </span>
                <span style={originalPriceStyle}>
                  {plan.currency}{plan.originalPrice}
                </span>
              </div>

              <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.8rem',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    color: '#4a5568'
                  }}>
                    <span style={{
                      color: '#4fc3f7',
                      marginRight: '0.8rem',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                style={buttonStyle(plan)}
                onMouseEnter={(e) => {
                  if (plan.buttonStyle === 'filled') {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 115, 232, 0.4)';
                  } else {
                    e.currentTarget.style.backgroundColor = '#1a73e8';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.buttonStyle === 'filled') {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a73e8';
                  }
                }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 