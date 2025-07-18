import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: '张教授',
    content: '探客AI手机的智能分析功能，让我们的营销策略更加精准，转化率提升了60%',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: '李总',
    content: '自从使用探客AI手机后，我们的客户画像更清晰，营销ROI翻了两倍',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: '设计-小雅',
    content: '探客手机的功能非常适合我们这种创意型公司，特别是内容生成和矩阵发布，效率神器！',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: '小众消息',
    content: '用探客手机很多年了账号有N个，探客是zui懂礼域人性需求的没有之一',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: '天地悠悠',
    content: '基本上我的客户，实体店客户，都在用探客AI手机，被我带起来的',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
];

const Testimonials: React.FC = () => {
  const itemsPerPage = 3;
  const totalItems = testimonialsData.length;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % totalItems);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push(testimonialsData[index]);
    }
    return items;
  };
  
  return (
    <section style={{ background: '#030303', padding: '120px 0', overflow: 'visible' }}>
      <div className="container mx-auto px-4 relative">
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: 16,
          letterSpacing: '-2px',
          background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          textAlign: 'center',
          width: '100%',
        }}>
          他们怎么说
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: 48,
          maxWidth: 700,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          我们的客户来自各行各业，他们对探客AI手机的评价是我们不断前进的动力。
        </p>
        <div className="relative" style={{ paddingTop: '80px', paddingBottom: '80px', margin: '0 -40px' }}>
          <div className="w-full" style={{ overflow: 'visible', padding: '0 60px' }}>
            <div className="flex transition-transform duration-400 ease-in-out">
              {getVisibleItems().map((testimonial, index) => (
                <div key={`${currentIndex}-${index}`} style={{ flex: `0 0 ${100 / itemsPerPage}%`, padding: '0 1rem' }}>
                  <div style={{
                    background: 'rgba(30,30,40,0.92)',
                    borderRadius: '1.5rem',
                    padding: '2.5rem 2rem',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                    border: '1.5px solid',
                    borderImage: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%) 1',
                    minHeight: 220,
                    position: 'relative',
                  }}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      loading="lazy"
                      style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', border: '4px solid #fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                    />
                    <div style={{ paddingTop: 48, textAlign: 'center' }}>
                      <Quote style={{ position: 'absolute', top: 24, right: 24, color: 'rgba(255,255,255,0.08)' }} size={32} />
                      <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 16, minHeight: 72, fontSize: '1.1rem', lineHeight: 1.7, overflow: 'hidden' }}>
                        {testimonial.content}
                      </p>
                      <p style={{ fontWeight: 600, color: 'white', fontSize: '1.1rem' }}>{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
              border: 'none',
              borderRadius: '50%',
              padding: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft style={{ color: '#030303' }} className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
              border: 'none',
              borderRadius: '50%',
              padding: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight style={{ color: '#030303' }} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;