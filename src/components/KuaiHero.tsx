import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const KuaiHero: React.FC = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.1)'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    color: 'white'
  };

  const mainTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : '4rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '1rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.2rem' : '1.8rem',
    fontWeight: '300',
    marginBottom: '2rem',
    color: 'rgba(255, 255, 255, 0.9)'
  };

  const sloganStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.3rem',
    lineHeight: '1.6',
    marginBottom: '3rem',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '800px',
    margin: '0 auto 3rem'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '4rem'
  };

  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: '#4285f4',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(66, 133, 244, 0.3)',
    transition: 'all 0.3s ease'
  };

  const secondaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '1rem',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const featuresStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: isMobile ? '1rem' : '2rem',
    maxWidth: isMobile ? '320px' : '600px',
    margin: '0 auto'
  };

  const featureItemStyle: React.CSSProperties = {
    textAlign: 'center'
  };

  const featureIconStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.8rem' : '2.5rem',
    display: 'block',
    marginBottom: '0.5rem'
  };

  const featureLabelStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.7rem' : '0.875rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.2'
  };

  return (
    <section style={heroStyle}>
      <div style={overlayStyle}></div>
      
      <div style={containerStyle}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={mainTitleStyle}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={subtitleStyle}
          >
            {t('hero.subtitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={sloganStyle}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={buttonContainerStyle}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 6px 20px rgba(66, 133, 244, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              style={primaryButtonStyle}
            >
              {t('hero.getStarted')}
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
              style={secondaryButtonStyle}
            >
              {t('hero.learnMore')}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={featuresStyle}
          >
            <div style={featureItemStyle}>
              <span style={featureIconStyle}>📱</span>
              <span style={featureLabelStyle}>智能手机</span>
            </div>
            <div style={featureItemStyle}>
              <span style={featureIconStyle}>🎯</span>
              <span style={featureLabelStyle}>精准营销</span>
            </div>
            <div style={featureItemStyle}>
              <span style={featureIconStyle}>📺</span>
              <span style={featureLabelStyle}>自动直播</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.1 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default KuaiHero; 