import React from 'react';
import { motion } from 'framer-motion';

const KuaiDetails: React.FC = () => {
  const streamingFeatures = [
    {
      title: "自动开播与下播",
      description: "只需联网连电，全程无需人工干预，自动开始和结束直播。",
      icon: "📺",
      color: "#4285f4"
    },
    {
      title: "智能互动", 
      description: "欢迎粉丝进入直播间并引导互动，预热气氛，增加观众参与度。",
      icon: "💫",
      color: "#34a853"
    },
    {
      title: "自动售卖",
      description: "根据话术自动点击讲解商品小黄车，提升直播间转化率。",
      icon: "🛒",
      color: "#fbbc04"
    }
  ];

  const successCases = [
    {
      title: "小型企业主",
      description: "使用探客AI手机后，营销效果显著提升，销售额增长了30%。",
      image: "👨‍💼",
      stats: "+30%",
      statLabel: "销售增长"
    },
    {
      title: "个人创业者",
      description: "通过AI自动化直播，每天吸引超过500名观众，有效提升了品牌知名度。",
      image: "👩‍💻",
      stats: "500+",
      statLabel: "日观众数"
    },
    {
      title: "社交媒体达人",
      description: "利用AI智能分析工具，精准定位目标受众，粉丝增长速度提高了40%。",
      image: "📱",
      stats: "+40%",
      statLabel: "粉丝增长"
    }
  ];

  const sectionStyle: React.CSSProperties = {
    padding: '6rem 0',
    backgroundColor: 'white'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const streamingSectionStyle: React.CSSProperties = {
    marginBottom: '6rem'
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
    fontSize: '1.125rem',
    color: '#5f6368',
    marginBottom: '3rem'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    padding: '2rem',
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

  const caseCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e8eaed',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  };

  const caseImageStyle: React.CSSProperties = {
    fontSize: '4rem',
    marginBottom: '1.5rem',
    display: 'block'
  };

  const statsStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: '0.5rem'
  };

  const statsLabelStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#5f6368',
    marginBottom: '1rem'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* AI自动化直播 */}
        <div style={streamingSectionStyle}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={headerStyle}
          >
            <h2 style={titleStyle}>AI自动化直播</h2>
            <p style={subtitleStyle}>随时随地开启高质量直播</p>
          </motion.div>

          <div style={gridStyle}>
            {streamingFeatures.map((feature, index) => (
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* 成功案例 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={headerStyle}
        >
          <h2 style={titleStyle}>我们的成功案例</h2>
          <p style={subtitleStyle}>真实用户，真实效果</p>
        </motion.div>

        <div style={gridStyle}>
          {successCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
              }}
              style={caseCardStyle}
            >
              <span style={caseImageStyle}>{caseItem.image}</span>
              <div style={statsStyle}>{caseItem.stats}</div>
              <div style={statsLabelStyle}>{caseItem.statLabel}</div>
              <h3 style={cardTitleStyle}>{caseItem.title}</h3>
              <p style={cardDescStyle}>{caseItem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#202124',
            marginBottom: '1rem'
          }}>
            加入成功者行列
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#5f6368',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            让探客AI手机帮助您实现营销和直播的全面自动化
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 15px rgba(26, 115, 232, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
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
            }}
          >
            开始体验
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KuaiDetails; 