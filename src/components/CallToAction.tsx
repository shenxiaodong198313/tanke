import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#0a0a23',
    color: 'white',
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const logoContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '1.5rem'
  };

  const logoIcon: React.CSSProperties = {
    fontSize: '2rem',
  };

  const logoText: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    letterSpacing: '1px',
    background: 'linear-gradient(135deg, #ffffff 0%, #a0aec0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={logoContainer}
          >
            <span style={logoIcon} role="img" aria-label="logo">🤖</span>
            <span style={logoText}>探客 AI</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={titleStyle}
          >
            用 AI 提升营销效率
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={subtitleStyle}
          >
            让 AI 自动化成为人人开箱即用的产品
          </motion.p>
      </div>
    </section>
  );
};

export default CallToAction; 