import React from 'react';
import { motion } from 'framer-motion';

const IndustryShowcase: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const industries = [
    // 第一行
    [
      { icon: '👔', name: '服装' },
      { icon: '👟', name: '鞋子' },
      { icon: '👜', name: '箱包' },
      { icon: '💎', name: '珠宝' },
      { icon: '🧸', name: '玩具' },
      { icon: '🍃', name: '茶叶' },
      { icon: '🛏️', name: '家具' }
    ],
    // 第二行
    [
      { icon: '🐟', name: '生鲜' },
      { icon: '📷', name: '3C' },
      { icon: '📚', name: '书籍' },
      { icon: '💄', name: '美容' },
      { icon: '🍼', name: '母婴' },
      { icon: '🚗', name: '汽车' },
      { icon: '♻️', name: '二手' }
    ],
    // 第三行
    [
      { icon: '🛒', name: '超市' },
      { icon: '🏘️', name: '社区' },
      { icon: '🏠', name: '家政' },
      { icon: '📍', name: '同城' },
      { icon: '🏢', name: '房产' },
      { icon: '✈️', name: '旅游' },
      { icon: '🌸', name: '鲜花' }
    ]
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)', // 白色浅色渐变背景
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '2rem 1rem' : '3rem 2rem',
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center'
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: isMobile ? '2rem' : '3rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : '3.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem',
    lineHeight: '1.2',
    letterSpacing: '-2px',
    background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#6b7280',
    lineHeight: '1.6'
  };

  const gridContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1.5rem' : '2rem'
  };

  const rowStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(7, 1fr)',
    gap: isMobile ? '0.8rem' : '1.5rem',
    justifyContent: 'center'
  };

  const industryItemStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: '12px',
    padding: isMobile ? '0.8rem 0.6rem' : '1rem 0.8rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    minHeight: isMobile ? '60px' : '70px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '0.75rem'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.5rem' : '1.8rem',
    display: 'block',
    flexShrink: 0
  };

  const nameStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.85rem' : '0.95rem',
    fontWeight: '500',
    color: '#374151',
    lineHeight: '1.2'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 头部标题区域 */}
        <motion.div 
          style={headerStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={titleStyle}>各行各业都在用</h2>
          <p style={subtitleStyle}>生意人必备的生产力工具</p>
        </motion.div>

        {/* 行业网格 */}
        <motion.div 
          style={gridContainerStyle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {industries.map((row, rowIndex) => (
            <div key={rowIndex} style={rowStyle}>
              {row.map((industry, itemIndex) => (
                <motion.div
                  key={`${rowIndex}-${itemIndex}`}
                  style={industryItemStyle}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + (rowIndex * 0.1) + (itemIndex * 0.05) 
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)';
                    }
                  }}
                >
                  <span style={iconStyle}>{industry.icon}</span>
                  <span style={nameStyle}>{industry.name}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryShowcase;