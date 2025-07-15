import React from 'react';
import { motion } from 'framer-motion';

const SimpleHero: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: '#030303', // 深色背景
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.18)'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 10
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    zIndex: 10
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    color: 'white',
    letterSpacing: '-2px',
  };

  const gradientTextStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, #a5b4fc, #fca5a5 80%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
    fontWeight: 700,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '2rem',
    lineHeight: '1.6',
    textShadow: '0 2px 8px rgba(0,0,0,0.18)'
  };

  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
    color: '#030303',
    padding: '1rem 2.5rem',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '1.25rem',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    transition: 'all 0.3s cubic-bezier(0.23,0.86,0.39,0.96)',
    marginBottom: '4rem',
    letterSpacing: '1px',
  };

  const statsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const statStyle: React.CSSProperties = {
    textAlign: 'center'
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.8)'
  };

  const stats = [
    { value: '10,000+', label: '服务企业' },
    { value: 'TOP 20', label: 'App Store排名' },
    { value: '50+专利', label: '国家高新技术企业' },
    { value: '10年', label: '专注行业' }
  ];

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      
      <div style={containerStyle}>
        <div style={contentStyle}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={titleStyle}
          >
            让你的商业智能
            <br />
            <span style={gradientTextStyle}>
              快人一步
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={subtitleStyle}
          >
            数字化转型10年沉淀，一个平台解决所有业务场景
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyle}

            >
              <span>立即体验</span>
              <span>→</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={statsContainerStyle}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={statStyle}
              >
                <div style={statValueStyle}>{stat.value}</div>
                <div style={statLabelStyle}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero; 