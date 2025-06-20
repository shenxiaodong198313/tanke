import React from 'react';
import { motion } from 'framer-motion';

const SimpleFooter: React.FC = () => {
  const footerSections = [
    {
      title: "解决方案",
      links: [
        "智能客服系统",
        "数据分析平台", 
        "客户关系管理",
        "移动办公",
        "企业级安全"
      ]
    },
    {
      title: "价格",
      links: [
        "基础版",
        "专业版",
        "企业版",
        "定制方案",
        "免费试用"
      ]
    },
    {
      title: "探客学院",
      links: [
        "产品教程",
        "最佳实践",
        "案例分析",
        "技术文档",
        "视频教学"
      ]
    },
    {
      title: "关于我们",
      links: [
        "公司简介",
        "团队介绍",
        "发展历程",
        "招聘信息",
        "联系我们"
      ]
    }
  ];

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#1F2937',
    color: 'white',
    padding: '4rem 0 2rem'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const topSectionStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem'
  };

  const companyInfoStyle: React.CSSProperties = {
    gridColumn: 'span 2'
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const logoIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px'
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold'
  };

  const companyDescStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#D1D5DB',
    lineHeight: '1.6',
    marginBottom: '2rem'
  };

  const contactInfoStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#D1D5DB',
    lineHeight: '1.6'
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem'
  };

  const linkListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const linkItemStyle: React.CSSProperties = {
    marginBottom: '0.5rem'
  };

  const linkStyle: React.CSSProperties = {
    color: '#D1D5DB',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.3s ease'
  };

  const bottomSectionStyle: React.CSSProperties = {
    borderTop: '1px solid #374151',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  };

  const copyrightStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#9CA3AF'
  };

  const socialLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem'
  };

  const socialLinkStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    backgroundColor: '#374151',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D1D5DB',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Main Footer Content */}
        <div style={topSectionStyle}>
          {/* Company Info */}
          <div style={companyInfoStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={logoStyle}>
                <div style={logoIconStyle}>
                  <span>T</span>
                </div>
                <span style={logoTextStyle}>探客</span>
              </div>

              <p style={companyDescStyle}>
                专注于为企业提供全方位的数字化转型解决方案，让科技真正成为商业发展的普惠性工具。
              </p>

              <div style={contactInfoStyle}>
                <p>📞 电话：400-888-8888</p>
                <p>📧 邮箱：contact@tanke.com</p>
                <p>📍 地址：深圳市南山区科技园南区(总部)</p>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 style={sectionTitleStyle}>{section.title}</h3>
              <ul style={linkListStyle}>
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    style={linkItemStyle}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (index * 0.1) + (linkIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      style={linkStyle}
                      whileHover={{ 
                        color: '#3B82F6',
                        x: 5
                      }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          style={bottomSectionStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div style={copyrightStyle}>
            © 2024 探客科技. 保留所有权利. | 粤ICP备12345678号
          </div>

          <div style={socialLinksStyle}>
            {['💬', '🐦', '💼', '🐙'].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                style={socialLinkStyle}
                whileHover={{ 
                  backgroundColor: '#3B82F6',
                  y: -2,
                  scale: 1.1
                }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SimpleFooter; 