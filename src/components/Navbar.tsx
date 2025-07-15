import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled
          ? 'rgba(30,30,40,0.92)'
          : 'linear-gradient(90deg, #030303 0%, #18181c 60%, #23233a 100%)',
        boxShadow: isScrolled ? '0 2px 12px rgba(0,0,0,0.10)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.23,0.86,0.39,0.96)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div style={{
              width: 32,
              height: 32,
              background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: '#030303', fontWeight: 700, fontSize: 20 }}>T</span>
            </div>
            <span style={{ fontSize: 22, fontWeight: 700, background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
              探客
            </span>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: 15,
                  background: 'none',
                  transition: 'color 0.2s',
                  padding: '2px 8px',
                  borderRadius: 6,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'white',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)';
                  e.currentTarget.style.webkitTextFillColor = 'transparent';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundImage = 'none';
                  e.currentTarget.style.webkitTextFillColor = 'white';
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg rounded-b-lg mt-2"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 