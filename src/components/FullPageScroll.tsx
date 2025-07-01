import React, { useState, useEffect, useRef, ReactElement, useCallback } from 'react';

interface FullPageScrollProps {
  children: ReactElement[];
}

const FullPageScroll: React.FC<FullPageScrollProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // PC端滚动处理
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isMobile) return;
    e.preventDefault();
    
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (e.deltaY > 0 && currentSection < children.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  }, [currentSection, isScrolling, children.length, isMobile]);

  // 键盘事件处理
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isMobile || isScrolling) return;
    
    if (e.key === 'ArrowDown' && currentSection < children.length - 1) {
      setIsScrolling(true);
      setCurrentSection(prev => prev + 1);
      setTimeout(() => setIsScrolling(false), 800);
    } else if (e.key === 'ArrowUp' && currentSection > 0) {
      setIsScrolling(true);
      setCurrentSection(prev => prev - 1);
      setTimeout(() => setIsScrolling(false), 800);
    }
  }, [currentSection, isScrolling, children.length, isMobile]);

  // 事件监听器设置
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown, isMobile]);

  // 导航点击处理
  const handleDotClick = useCallback((index: number) => {
    if (isMobile || isScrolling || index === currentSection) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    setTimeout(() => setIsScrolling(false), 800);
  }, [isScrolling, currentSection, isMobile]);

  // 如果是移动设备，渲染正常滚动版本
  if (isMobile) {
    const mobileContainerStyle: React.CSSProperties = {
      width: '100%',
      minHeight: '100vh'
    };

    const mobileSectionStyle: React.CSSProperties = {
      width: '100%',
      minHeight: '100vh',
      position: 'relative'
    };

    return (
      <div style={mobileContainerStyle}>
        {children.map((child, index) => (
          <div key={index} style={mobileSectionStyle}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  // PC端样式
  const containerStyle: React.CSSProperties = {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative'
  };

  const sectionsStyle: React.CSSProperties = {
    height: '100%',
    transform: `translateY(-${currentSection * 100}vh)`,
    transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
    willChange: 'transform'
  };

  const sectionStyle: React.CSSProperties = {
    height: '100vh',
    width: '100%',
    position: 'relative'
  };

  const navigationStyle: React.CSSProperties = {
    position: 'fixed',
    right: '2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 0.5rem',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const navDotStyle = (index: number): React.CSSProperties => ({
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: index === currentSection ? '#1a73e8' : 'rgba(255, 255, 255, 0.6)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: index === currentSection 
      ? '0 0 20px rgba(26, 115, 232, 0.5)' 
      : '0 2px 8px rgba(0, 0, 0, 0.2)',
    transform: index === currentSection ? 'scale(1.2)' : 'scale(1)'
  });

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={sectionsStyle}>
        {children.map((child, index) => (
          <div key={index} style={sectionStyle}>
            {child}
          </div>
        ))}
      </div>
      
      {/* 导航点 - 只在PC端显示 */}
      <div style={navigationStyle}>
        {children.map((_, index) => (
          <div
            key={index}
            style={navDotStyle(index)}
            onClick={() => handleDotClick(index)}
            onMouseEnter={(e) => {
              if (index !== currentSection) {
                e.currentTarget.style.backgroundColor = 'rgba(26, 115, 232, 0.7)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSection) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPageScroll; 