import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IndustryCases: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const originalReviews = [
    {
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
      name: '小众消息',
      review: '用探客手机很多年了账号有N个，探客是zui懂礼域人性需求的没有之一'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
      name: '天地悠悠',
      review: '基本上我的客户，实体店客户，都在用探客AI手机，被我带起来的'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      name: '麦克阿瑟',
      review: '无论三岁小孩，还是七十岁老人，只要会用微信，就能快速上手探客'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      name: '张教授',
      review: '探客AI手机的智能分析功能，让我们的营销策略更加精准，转化率提升了60%'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      name: '李总',
      review: '自从使用探客AI手机后，我们的客户画像更清晰，营销ROI翻了两倍'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      name: '设计-小雅',
      review: '探客手机的功能非常适合我们这种创意型公司，特别是内容生成和矩阵发布，效率神器！'
    },
  ];

  const visibleCards = isMobile ? 1 : 3;
  const cardGapPercent = 2; // 2% gap
  const cardWidthPercent = (100 - (visibleCards - 1) * cardGapPercent) / visibleCards;
  const slideOffsetPercent = cardWidthPercent + cardGapPercent;

  const nextSlide = () => {
    if (currentIndex < originalReviews.length - visibleCards) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#f8f9fa', // 统一浅灰色背景
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '4rem 1rem' : '6rem 2rem',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: isMobile ? '3rem' : '4rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : '3.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#4b5563',
    lineHeight: 1.6,
  };

  const carouselWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
    justifyContent: 'center'
  };

  const carouselViewportStyle: React.CSSProperties = {
    width: '100%',
    overflow: 'hidden',
  };

  const trackStyle: React.CSSProperties = {
    display: 'flex',
    gap: `${cardGapPercent}%`,
    paddingTop: '30px', // For avatar overflow
    paddingBottom: '20px', // For shadow overflow
  };

  const reviewCardStyle: React.CSSProperties = {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '2rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f3f4f6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    minHeight: '250px',
    width: `${cardWidthPercent}%`,
    flexShrink: 0,
  };

  const quoteIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1.5rem',
    left: '2rem',
    fontSize: '5rem',
    color: '#f3f4f6',
    zIndex: 1,
    lineHeight: 1,
  };

  const reviewTextStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: '#374151',
    lineHeight: 1.7,
    position: 'relative',
    zIndex: 2,
    marginTop: '2rem',
  };
  
  const authorInfoStyle: React.CSSProperties = {
    textAlign: 'right',
    marginTop: '1.5rem',
  };

  const authorNameStyle: React.CSSProperties = {
    fontWeight: 600,
    color: '#1f2937',
    fontSize: '1rem',
  };

  const avatarStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-25px',
    right: '25px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: '3px solid white',
  };
  
  const navButtonStyle: React.CSSProperties = {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s ease',
    flexShrink: 0,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>听听客户怎么说</h2>
          <p style={subtitleStyle}>我们致力于提供最好的产品和服务，客户的满意是我们最大的动力。</p>
        </div>
        <div style={carouselWrapperStyle}>
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            style={{...navButtonStyle, transform: 'rotate(180deg)', opacity: currentIndex === 0 ? 0.5 : 1}}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div style={carouselViewportStyle}>
            <motion.div
              style={trackStyle}
              animate={{ x: `-${currentIndex * slideOffsetPercent}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {originalReviews.map((review, index) => (
                <div key={index} style={reviewCardStyle}>
                  <div style={quoteIconStyle}>“</div>
                  <img src={review.avatar} alt={review.name} loading="lazy" style={avatarStyle} />
                  <div><p style={reviewTextStyle}>{review.review}</p></div>
                  <div style={authorInfoStyle}><p style={authorNameStyle}>— {review.name}</p></div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={nextSlide} 
            disabled={currentIndex >= originalReviews.length - visibleCards}
            style={{...navButtonStyle, opacity: currentIndex >= originalReviews.length - visibleCards ? 0.5 : 1}}
          >
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryCases; 