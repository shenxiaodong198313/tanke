import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const sectionStyle: React.CSSProperties = {
    background: '#ffffff', // 白色背景
    color: '#333',
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
    marginBottom: '2rem',
    letterSpacing: '1px',
    color: '#333'
  };

  const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    maxWidth: '500px',
    width: '100%',
    border: '2px solid #ff4444',
    borderRadius: '50px',
    overflow: 'hidden',
    backgroundColor: 'white'
  };

  const countryCodeStyle: React.CSSProperties = {
    padding: '16px 20px',
    backgroundColor: 'white',
    border: 'none',
    fontSize: '16px',
    color: '#666',
    minWidth: '80px'
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: '16px 20px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: 'white'
  };

  const submitButtonStyle: React.CSSProperties = {
    padding: '16px 24px',
    backgroundColor: '#ff4444',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50px',
    minHeight: '50px',
    margin: '4px'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone number:', phoneNumber);
    // 这里可以添加提交逻辑
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
            <span style={{color: '#ff4444'}}>联系我们</span>，帮您轻松开单
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={formContainerStyle}
            onSubmit={handleSubmit}
          >
            <div style={countryCodeStyle}>+86</div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="请输入您的手机号"
              style={inputStyle}
            />
            <button type="submit" style={submitButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
            </button>
          </motion.form>
      </div>
    </section>
  );
};

export default CallToAction; 