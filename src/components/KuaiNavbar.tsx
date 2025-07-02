import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const KuaiNavbar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useLanguage();
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
    zIndex: 9999,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'linear-gradient(135deg, #1677ff 0%, #69b1ff 100%)',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: 'none',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    padding: '0 0',
    height: '64px'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px'
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: isScrolled ? '#1677ff' : 'white',
    textDecoration: 'none'
  };

  const logoIconStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    backgroundColor: isScrolled ? '#1677ff' : 'white',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px'
  };

  const rightSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px'
  };

  const menuStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const menuItemStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '400',
    color: isScrolled ? '#000000d9' : 'rgba(255, 255, 255, 0.85)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    padding: '4px 0',
    position: 'relative'
  };

  const languageSwitcherStyle: React.CSSProperties = {
    marginLeft: '16px'
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    color: isScrolled ? '#000000d9' : 'white',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '4px'
  };

  const menuItems = [
    { name: t('nav.home'), key: 'home' },
    { name: t('nav.products'), key: 'products' },
    { name: t('nav.tutorials'), key: 'tutorials' },
    { name: t('nav.partnership'), key: 'partnership' },
    { name: t('nav.about'), key: 'about' }
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <motion.a
          href="#"
          style={logoStyle}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div style={logoIconStyle}>
            <span style={{ color: isScrolled ? 'white' : '#1677ff' }}>A</span>
          </div>
          <span>Ant Design Mobile</span>
        </motion.a>

        {/* Right Section: Menu + Language Switcher */}
        <div style={rightSectionStyle}>
          {/* Desktop Menu */}
          {!isMobile && (
            <ul style={menuStyle}>
              {menuItems.map((item, index) => (
                <li key={item.key}>
                  <motion.a
                    href="#"
                    style={menuItemStyle}
                    whileHover={{ 
                      color: isScrolled ? '#1677ff' : 'white',
                      scale: 1.02 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          )}

          {/* Language Switcher */}
          <div style={languageSwitcherStyle}>
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>

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
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '24px'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {menuItems.map((item, index) => (
              <motion.a
                key={item.key}
                href="#"
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#000000d9',
                  textDecoration: 'none',
                  padding: '8px 0'
                }}
                whileHover={{ color: '#1677ff' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default KuaiNavbar; 