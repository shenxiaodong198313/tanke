import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const itemsToClone = itemsPerPage;

  const [displayItems, setDisplayItems] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(itemsToClone);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const clonedBefore = testimonialsData.slice(-itemsToClone);
    const clonedAfter = testimonialsData.slice(0, itemsToClone);
    setDisplayItems([...clonedBefore, ...testimonialsData, ...clonedAfter]);
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === testimonialsData.length + itemsToClone) {
      // Just finished animating to the first item's clone at the end
      setIsTransitioning(false); // This will make the next transition instantaneous
      setCurrentIndex(itemsToClone);
    } else if (currentIndex === itemsToClone - 1) {
      // Just finished animating to the last item's clone at the beginning
      setIsTransitioning(false); // This will make the next transition instantaneous
      setCurrentIndex(testimonialsData.length + itemsToClone - 1);
    } else if (isTransitioning) {
      // It was a regular animation, now it's finished
      setIsTransitioning(false);
    }
  };
  
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">他们怎么说</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          我们的客户来自各行各业，他们对探客AI手机的评价是我们不断前进的动力。
        </p>

        <div className="relative" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${(currentIndex * 100) / itemsPerPage}%` }}
              transition={{ 
                duration: isTransitioning ? 0.4 : 0,
                ease: 'easeInOut' 
              }}
              onAnimationComplete={handleTransitionEnd}
            >
              {displayItems.map((testimonial, index) => (
                <div key={index} style={{ flex: `0 0 ${100 / itemsPerPage}%`, padding: '0 1rem' }}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-full relative" style={{ minHeight: '220px' }}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover absolute -top-10 left-1/2 -translate-x-1/2 border-4 border-white shadow-md"
                    />
                    <div className="pt-12 text-center">
                      <Quote className="absolute top-6 right-6 text-gray-100" size={32} />
                      <p className="text-gray-600 mb-4 h-24 overflow-hidden">
                        {testimonial.content}
                      </p>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 transition"
            aria-label="Previous testimonial"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 transition"
            aria-label="Next testimonial"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 