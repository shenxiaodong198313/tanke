import React from 'react';
import { motion } from 'framer-motion';

const SimpleFeatures: React.FC = () => {
  const features = [
    {
      title: "客户常问：有素材吗？",
      subtitle: "客户问的是什么？",
      description: "从哪里可以快速转发/下载你的图啊？",
      solution: "试试「共享素材库」",
      detail: "方便自己也方便代理的朋友圈卖货神器",
      color: "#3B82F6"
    },
    {
      title: "客户常问：有没有这个款？",
      subtitle: "客户问的是什么？",
      description: "能不能马上立即发给我，不要让我浪费时间翻朋友圈",
      solution: "试试「产品图册」",
      detail: "方便客户精准看款找款的小程序图册",
      color: "#10B981"
    },
    {
      title: "客户常说：我先看看，需要再找你",
      subtitle: "客户问的是什么？",
      description: "我自己边逛边下单，不用管我先",
      solution: "试试「线上小店」",
      detail: "不受时间和空间限制，24小时都能下单",
      color: "#8B5CF6"
    },
    {
      title: "客户常问：有没有视频，我想看看真实细节？",
      subtitle: "客户问的是什么？",
      description: "有没有直播，让我一次买个爽！",
      solution: "试试「高清私域直播」",
      detail: "支持批零结合，自动剪切商品短视频",
      color: "#F59E0B"
    },
    {
      title: "客户常问：我能不能做你的代理？",
      subtitle: "客户问的是什么？",
      description: "我帮你推广，你帮我代发，我自动返佣",
      solution: "试试「私域分销」",
      detail: "覆盖私域所有分销模式，撬动微信10亿用户为你卖货",
      color: "#EF4444"
    },
    {
      title: "老板常问：我们销售团队怎么样？",
      subtitle: "老板问的是什么？",
      description: "我们销售人均销售额多少？有谁是销冠？有谁拖后腿？大家怎样都变成销冠？",
      solution: "试试「微信销售管理」",
      detail: "复制销冠，显著提升转化率和人效",
      color: "#06B6D4"
    }
  ];

  const sectionStyle: React.CSSProperties = {
    padding: '4rem 0',
    backgroundColor: '#F9FAFB'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '1rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    color: '#6B7280',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E5E7EB',
    position: 'relative',
    overflow: 'hidden'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '0.5rem'
  };

  const cardSubtitleStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#6B7280',
    marginBottom: '0.5rem'
  };

  const cardDescriptionStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#4B5563',
    marginBottom: '1.5rem',
    lineHeight: '1.5'
  };

  const solutionStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  };

  const detailStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#6B7280',
    marginBottom: '1rem'
  };

  const learnMoreStyle: React.CSSProperties = {
    color: '#3B82F6',
    fontSize: '0.875rem',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={titleStyle}
          >
            为什么选择探客？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={subtitleStyle}
          >
            我们深入了解客户需求，提供最贴心的解决方案
          </motion.p>
        </div>

        <div style={gridStyle}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={cardStyle}
            >
              {/* Color accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: feature.color
              }} />

              <h3 style={cardTitleStyle}>{feature.title}</h3>
              <p style={cardSubtitleStyle}>{feature.subtitle}</p>
              <p style={cardDescriptionStyle}>{feature.description}</p>
              
              <h4 style={{ ...solutionStyle, color: feature.color }}>
                {feature.solution}
              </h4>
              <p style={detailStyle}>{feature.detail}</p>
              
              <motion.button
                style={{
                  ...learnMoreStyle,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                whileHover={{ x: 5 }}

              >
                进一步了解 →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleFeatures; 