import React from 'react';
import { motion } from 'framer-motion';

const KuaiFeatures: React.FC = () => {
  const marketingFeatures = [
    {
      title: "智能分析客户数据",
      description: "自动分析客户行为数据，构建精准用户画像，实现个性化营销。",
      icon: "📊",
      color: "#4285f4"
    },
    {
      title: "智能沟通",
      description: "自动回复客户消息，模拟真人对话，提升客户满意度和粘性。",
      icon: "💬",
      color: "#34a853"
    },
    {
      title: "全网营销覆盖",
      description: "自动化发布朋友圈、视频号、抖音、小红书等平台，扩大品牌影响力。",
      icon: "🌐",
      color: "#fbbc04"
    }
  ];

  const sectionStyle: React.CSSProperties = {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '4rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: '1rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: '#5f6368',
    fontWeight: '300',
    marginBottom: '2rem'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e8eaed',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    display: 'block'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#202124'
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#5f6368'
  };

  const ctaStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '3rem'
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: '#1a73e8',
    color: 'white',
    padding: '1rem 3rem',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)',
    transition: 'all 0.3s ease'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={headerStyle}
        >
          <h2 style={titleStyle}>AI自动化营销</h2>
          <p style={subtitleStyle}>让营销更智能、更高效</p>
        </motion.div>

        {/* Marketing Features Grid */}
        <div style={gridStyle}>
          {marketingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
              }}
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

              <span style={iconStyle}>{feature.icon}</span>
              <h3 style={{
                ...cardTitleStyle,
                color: feature.color
              }}>
                {feature.title}
              </h3>
              <p style={cardDescStyle}>{feature.description}</p>

              {/* Hover effect overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${feature.color}10, ${feature.color}05)`,
                  opacity: 0,
                  pointerEvents: 'none'
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={ctaStyle}
        >
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#202124',
            marginBottom: '1rem'
          }}>
            智能营销，轻松实现
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#5f6368',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            探客AI手机帮助您实现全自动化营销，让每一次营销都更精准有效
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 15px rgba(26, 115, 232, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            style={ctaButtonStyle}
          >
            了解营销功能
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KuaiFeatures; 