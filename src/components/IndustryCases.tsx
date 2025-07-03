import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IndustryCases: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(3); // 从第4个开始（真实列表的第1个）
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // 拖拽相关状态
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragCurrentX, setDragCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

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

  const customerReviews = [
    {
      avatar: '👨‍💼',
      name: '小众消息',
      role: '某微信群管理员',
      review: '用相册很多年了账号有N个，微购相册是zui懂礼域人性需求的没有之一'
    },
    {
      avatar: '👨‍🍳',
      name: '天地悠悠',
      role: '餐饮店老板',
      review: '基本上我的客户，实体店客户，都在用微商相册，被我带起来的'
    },
    {
      avatar: '👩‍💻',
      name: '麦克阿瑟',
      role: 'IT从业者',
      review: '无论三岁小孩，还是七十岁老人，只要会用微信，就能快速上手'
    },
    {
      avatar: '👨‍🏫',
      name: '张教授',
      role: '某大学教授',
      review: '探客AI增长手机的智能分析功能，让我们的营销策略更加精准，转化率提升了60%'
    },
    {
      avatar: '👩‍🚀',
      name: '李总',
      role: '电商公司CEO',
      review: '自从使用探客AI增长手机后，我们的客户画像更清晰，营销ROI翻了两倍'
    },
    {
      avatar: '👨‍⚕️',
      name: '王医生',
      role: '民营医院院长',
      review: '探客的私域流量管理太强大了，现在我们70%的客户都来自老客户推荐'
    },
    {
      avatar: '👩‍🎨',
      name: '陈设计师',
      role: '设计工作室创始人',
      review: '界面设计简洁美观，功能强大但不复杂，团队成员很快就上手了'
    },
    {
      avatar: '👨‍🌾',
      name: '农场主老刘',
      role: '有机农场主',
      review: '通过探客AI分析客户喜好，我们的有机蔬菜销量增长了150%，太棒了！'
    },
    {
      avatar: '👩‍🍳',
      name: '美食博主小雨',
      role: '美食KOL',
      review: '探客帮我分析粉丝画像，现在推荐的美食都很受欢迎，粉丝活跃度大幅提升'
    }
  ];



  // 创建扩展的评价列表用于无缝循环
  const extendedReviews = [
    ...customerReviews.slice(-3), // 最后3个
    ...customerReviews,           // 原始列表
    ...customerReviews.slice(0, 3) // 前3个
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // 处理无缝循环
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      // 如果滑动到了克隆区域，重置到对应的真实位置
      if (currentIndex >= customerReviews.length + 3) {
        setCurrentIndex(3); // 跳转到真实列表的开始
      } else if (currentIndex < 3) {
        setCurrentIndex(customerReviews.length + 2); // 跳转到真实列表的结束
      }
    }, 500); // 与CSS过渡时间一致

    return () => clearTimeout(timer);
  }, [currentIndex, customerReviews.length]);

  // 拖拽事件处理
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragCurrentX(e.clientX);
    setDragOffset(0);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const offset = currentX - dragStartX;
    setDragCurrentX(currentX);
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 80; // 拖拽阈值，超过这个距离才切换
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // 向右拖拽，显示上一个
        prevSlide();
      } else {
        // 向左拖拽，显示下一个
        nextSlide();
      }
    }
    
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8faff 0%, #e8f4fd 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '3rem 1rem' : '4rem 2rem',
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center'
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: isMobile ? '3rem' : '4rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : '3.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#666',
    lineHeight: '1.6'
  };

  const reviewsContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '1rem' : '2rem',
    maxWidth: isMobile ? '100%' : '1200px',
    margin: '0 auto'
  };

  const carouselContainerStyle: React.CSSProperties = {
    overflow: 'hidden',
    width: isMobile ? '300px' : '1080px',
    position: 'relative',
    userSelect: 'none', // 防止拖拽时选中文字
    WebkitUserSelect: 'none', // Safari支持
    MozUserSelect: 'none', // Firefox支持
    msUserSelect: 'none' // IE支持
  };

  const carouselTrackStyle: React.CSSProperties = {
    display: 'flex',
    transition: (isTransitioning && !isDragging) ? 'transform 0.5s ease-in-out' : 'none',
    transform: `translateX(-${currentIndex * (isMobile ? 300 : 360) - dragOffset}px)`,
    cursor: isDragging ? 'grabbing' : 'grab'
  };

  const reviewCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: isMobile ? '1rem' : '1.5rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    width: isMobile ? '280px' : '320px',
    minHeight: isMobile ? '140px' : '160px',
    marginRight: isMobile ? '20px' : '40px',
    position: 'relative',
    flexShrink: 0
  };

  const avatarStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '0.8rem' : '1rem',
    right: isMobile ? '0.8rem' : '1rem',
    fontSize: isMobile ? '2rem' : '2.5rem',
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    borderRadius: '50%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const reviewTextStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: '#333',
    lineHeight: '1.5',
    marginBottom: isMobile ? '1rem' : '1.2rem',
    paddingRight: isMobile ? '3rem' : '4rem'
  };

  const customerInfoStyle: React.CSSProperties = {
    borderTop: '1px solid #f0f0f0',
    paddingTop: isMobile ? '0.8rem' : '1rem',
    textAlign: 'left'
  };

  const customerNameStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: '0.2rem'
  };

  const customerRoleStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.75rem' : '0.8rem',
    color: '#666'
  };

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: isMobile ? '36px' : '44px',
    height: isMobile ? '36px' : '44px',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '1px solid #e0e0e0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '1.1rem' : '1.3rem',
    color: '#666',
    transition: 'all 0.3s ease',
    zIndex: 10
  };

  const leftArrowStyle: React.CSSProperties = {
    ...arrowStyle,
    left: isMobile ? '-50px' : '-70px'
  };

  const rightArrowStyle: React.CSSProperties = {
    ...arrowStyle,
    right: isMobile ? '-50px' : '-70px'
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
          <h2 style={titleStyle}>听听客户怎么说</h2>
          <p style={subtitleStyle}>
            90%的用户来自推荐，平均每1个客户会为我们推荐3-5个客户
          </p>
        </motion.div>

        {/* 客户评价轮播区域 */}
        <motion.div 
          style={reviewsContainerStyle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 左箭头 */}
          <div 
            style={leftArrowStyle}
            onClick={prevSlide}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.borderColor = '#1677ff';
              e.currentTarget.style.color = '#1677ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.style.color = '#666';
            }}
          >
            ‹
          </div>

          {/* 轮播容器 */}
          <div 
            style={carouselContainerStyle}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div style={carouselTrackStyle}>
              {extendedReviews.map((review, index) => (
                <div
                  key={`review-${index}`}
                  style={reviewCardStyle}
                >
                  {/* 头像在右上角 */}
                  <div style={avatarStyle}>{review.avatar}</div>
                  
                  {/* 评价内容 */}
                  <div style={reviewTextStyle}>"{review.review}"</div>
                  
                  {/* 客户信息 */}
                  <div style={customerInfoStyle}>
                    <div style={customerNameStyle}>——{review.name}</div>
                    <div style={customerRoleStyle}>{review.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右箭头 */}
          <div 
            style={rightArrowStyle}
            onClick={nextSlide}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.borderColor = '#1677ff';
              e.currentTarget.style.color = '#1677ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.style.color = '#666';
            }}
          >
            ›
          </div>
        </motion.div>

        {/* 指示器 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2rem'
        }}>
          {customerReviews.map((_, index) => {
            // 计算真实的当前索引
            const realCurrentIndex = ((currentIndex - 3) + customerReviews.length) % customerReviews.length;
            return (
              <div
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: index === realCurrentIndex ? '#1677ff' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index + 3);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryCases; 