import React from 'react';
import { motion } from 'framer-motion';

const KuaiFooter: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '4rem 0 2rem',
    backgroundColor: '#f8f9fa'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const footerContentStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#5f6368'
  };

  const brandStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: '1rem'
  };

  const sloganStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    color: '#202124',
    marginBottom: '2rem'
  };

  const contactInfoStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '2rem',
    fontSize: '0.875rem',
    flexWrap: 'wrap'
  };

  const copyrightStyle: React.CSSProperties = {
    paddingTop: '2rem',
    borderTop: '1px solid #e8eaed',
    color: '#9aa0a6',
    fontSize: '0.875rem'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={footerContentStyle}
        >
          {/* 品牌信息 */}
          <h3 style={brandStyle}>
            探客互动
          </h3>
          <p style={sloganStyle}>
            您的个人营销专家 | AI赋能未来
          </p>

          {/* 联系信息 */}
          <div style={contactInfoStyle}>
            <span>服务热线: 400-888-8888</span>
            <span>官方邮箱: info@tanke.com</span>
            <span>工作时间: 9:00-18:00</span>
          </div>

          {/* 版权信息 */}
          <div style={copyrightStyle}>
            © 2024 探客互动科技有限公司 版权所有 | 
            浙ICP备XXXXXXXX号 | 
            浙公网安备XXXXXXXXXXXXX号
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KuaiFooter; 