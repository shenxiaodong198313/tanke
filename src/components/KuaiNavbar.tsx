import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, useNavigate } from 'react-router-dom';

const KuaiNavbar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [dropdownCloseTimeout, setDropdownCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

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
    { name: t('nav.home'), key: 'home', path: '/' },
    { 
      name: t('nav.products'), 
      key: 'products',
      hasDropdown: true,
      subItems: [
        { name: t('nav.products.aiMarketing'), key: 'ai-marketing', path: '/ai-marketing' },
        { name: t('nav.products.aiLive'), key: 'ai-live', path: '/ai-live' },
        { name: t('nav.products.aiCall'), key: 'ai-call', path: '/ai-call' }
      ]
    },
    { name: t('nav.tutorials'), key: 'tutorials', path: '/tutorials' },
    { name: t('nav.partnership'), key: 'partnership', path: '/partnership' },
    { name: t('nav.about'), key: 'about', path: '/about' }
  ];

  // 新增：延迟关闭下拉菜单
  const handleProductsMouseEnter = () => {
    if (dropdownCloseTimeout) {
      clearTimeout(dropdownCloseTimeout);
      setDropdownCloseTimeout(null);
    }
    setIsProductsDropdownOpen(true);
  };
  const handleProductsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 200); // 200ms 延迟
    setDropdownCloseTimeout(timeout);
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <motion.div
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onClick={() => navigate('/')}
        >
          <div style={logoStyle}>
            <div style={logoIconStyle}>
              <span style={{ color: isScrolled ? 'white' : '#1677ff' }}>A</span>
            </div>
            <span>Ant Design Mobile</span>
          </div>
        </motion.div>

        {/* Right Section: Menu + Language Switcher */}
        <div style={rightSectionStyle}>
          {/* Desktop Menu */}
          {!isMobile && (
            <ul style={menuStyle}>
              {menuItems.map((item, index) => (
                <li key={item.key} style={{ position: 'relative' }}>
                  {item.hasDropdown ? (
                    // 修复：将主菜单和下拉菜单包裹在同一个容器
                    <div
                      style={{ position: 'relative', display: 'inline-block' }}
                      onMouseEnter={handleProductsMouseEnter}
                      onMouseLeave={handleProductsMouseLeave}
                    >
                      <motion.span
                        style={{
                          ...menuItemStyle,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                        whileHover={{ 
                          color: isScrolled ? '#1677ff' : 'white',
                          scale: 1.02 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                        <span style={{ fontSize: '12px', transition: 'transform 0.2s', transform: isProductsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          ▼
                        </span>
                      </motion.span>
                      {/* Dropdown Menu */}
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                            padding: '8px 0',
                            minWidth: '160px',
                            zIndex: 1000,
                            marginTop: '8px'
                          }}
                        >
                          {item.subItems?.map((subItem) => (
                            <motion.div
                              key={subItem.key}
                              whileHover={{ backgroundColor: '#f5f5f5', color: '#1677ff' }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                to={subItem.path}
                                style={{
                                  display: 'block',
                                  padding: '8px 16px',
                                  color: '#000000d9',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  transition: 'all 0.2s'
                                }}
                              >
                                {subItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <motion.div
                      whileHover={{ color: isScrolled ? '#1677ff' : 'white', scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.path!}
                        style={menuItemStyle}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
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
              <div key={item.key}>
                {item.hasDropdown ? (
                  <div>
                    <motion.div
                      style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#000000d9',
                        padding: '8px 0',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      whileHover={{ color: '#1677ff' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span>{item.name}</span>
                      <span style={{ 
                        fontSize: '12px', 
                        transition: 'transform 0.2s', 
                        transform: isMobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                      }}>
                        ▼
                      </span>
                    </motion.div>
                    {/* Mobile Submenu */}
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          marginLeft: '16px',
                          marginTop: '8px'
                        }}
                      >
                        {item.subItems?.map((subItem, subIndex) => (
                          <Link
                            key={subItem.key}
                            to={subItem.path}
                            style={{
                              display: 'block',
                              fontSize: '14px',
                              fontWeight: '400',
                              color: '#666666',
                              textDecoration: 'none',
                              padding: '6px 0',
                              borderLeft: '2px solid #e0e0e0',
                              paddingLeft: '12px'
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    style={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000d9',
                      textDecoration: 'none',
                      padding: '8px 0'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default KuaiNavbar; 