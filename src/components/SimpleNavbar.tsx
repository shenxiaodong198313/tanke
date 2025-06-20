import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SimpleNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const navItems = [
    { name: '首页', href: '#home' },
    { name: '解决方案', href: '#solutions' },
    { name: '价格', href: '#pricing' },
    { name: '探客学院', href: '#academy' },
    { name: '生态与合作', href: '#ecosystem' },
    { name: '关于我们', href: '#about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

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
    zIndex: 50,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px'
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const logoIconStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: isScrolled ? '#1F2937' : 'white'
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none'
  };

  const linkStyle: React.CSSProperties = {
    color: isScrolled ? '#374151' : 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={navStyle}
    >
      <div style={containerStyle}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={logoStyle}
        >
          <div style={logoIconStyle}>
            <span>T</span>
          </div>
          <span style={logoTextStyle}>探客</span>
        </motion.div>

        {/* Desktop Navigation */}
        {isDesktop && (
          <div>
            <ul style={navLinksStyle}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <a href={item.href} style={linkStyle}>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Mobile Menu Button */}
        {!isDesktop && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: isScrolled ? '#374151' : 'white',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            ☰
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default SimpleNavbar; 