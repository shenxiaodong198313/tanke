import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const KuaiNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
    transition: 'all 0.3s ease',
    padding: '0.75rem 0'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: isScrolled ? '#1a73e8' : 'white',
    textDecoration: 'none'
  };

  const logoIconStyle: React.CSSProperties = {
    fontSize: '2rem'
  };

  const menuStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const menuItemStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: isScrolled ? '#5f6368' : 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    padding: '0.5rem 0'
  };

  const actionButtonsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  };

  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: '#1a73e8',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.9rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)',
    transition: 'all 0.3s ease'
  };

  const secondaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: isScrolled ? '#5f6368' : 'rgba(255, 255, 255, 0.9)',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.9rem',
    border: isScrolled ? '1px solid #e8eaed' : '1px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    color: isScrolled ? '#5f6368' : 'white',
    fontSize: '1.5rem',
    cursor: 'pointer'
  };

  const menuItems = [
    { name: 'AI技术', hasDropdown: true },
    { name: '个人用户', hasDropdown: true },
    { name: '中小企业用户', hasDropdown: false },
    { name: '行业客户', hasDropdown: true },
    { name: '生态合作伙伴', hasDropdown: false }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={navStyle}
    >
      <div style={containerStyle}>
        {/* Logo */}
        <motion.a
          href="#"
          style={logoStyle}
          whileHover={{ scale: 1.05 }}
        >
          <span style={logoIconStyle}>🧠</span>
          <span>360智脑</span>
        </motion.a>

        {/* Desktop Menu */}
        {!isMobile && (
        <ul style={menuStyle}>
          {menuItems.map((item, index) => (
            <motion.li key={item.name}>
              <motion.a
                href="#"
                style={menuItemStyle}
                whileHover={{ 
                  color: '#1a73e8',
                  scale: 1.05 
                }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                {item.hasDropdown && (
                  <span style={{ marginLeft: '0.25rem', fontSize: '0.75rem' }}>▼</span>
                )}
              </motion.a>
            </motion.li>
          ))}
        </ul>
        )}

        {/* Action Buttons */}
        <div style={actionButtonsStyle}>
          <motion.button
            style={secondaryButtonStyle}
            whileHover={{ 
              backgroundColor: isScrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.1)',
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
          >
            登录
          </motion.button>

          <motion.button
            style={primaryButtonStyle}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 15px rgba(26, 115, 232, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            立即定制
          </motion.button>

          {/* Mobile Menu Button */}
          {isMobile && (
          <button
            style={mobileMenuButtonStyle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '2rem'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href="#"
                style={{
                  ...menuItemStyle,
                  color: '#5f6368',
                  padding: '1rem 0',
                  borderBottom: '1px solid #e8eaed',
                  fontSize: '1rem'
                }}
                whileHover={{ color: '#1a73e8' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                {item.hasDropdown && (
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem' }}>▼</span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default KuaiNavbar; 