import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)', // 蓝色渐变背景
    color: 'white',
    position: 'relative',
    width: '100%',
    padding: '80px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    letterSpacing: '1px',
    color: 'white'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2.5rem',
    lineHeight: '1.6'
  };

  const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    maxWidth: '500px',
    width: '100%',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50px',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)'
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: '16px 24px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: 'white'
  };

  const submitButtonStyle: React.CSSProperties = {
    padding: '16px 32px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    margin: '4px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('立即咨询');
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={titleStyle}
          >
            请专业顾问为您解答或演示
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={subtitleStyle}
          >
            留下您的联系方式，会有专业工作人员为您服务
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={formContainerStyle}
            onSubmit={handleSubmit}
          >
            <input
              type="tel"
              placeholder="请输入11位手机号"
              style={inputStyle}
            />
            <button 
              type="submit" 
              style={submitButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              立即咨询
            </button>
          </motion.form>
      </div>
    </section>
  );
};

export default CallToAction;