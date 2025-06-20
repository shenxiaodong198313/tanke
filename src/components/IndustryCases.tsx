import React from 'react';
import { motion } from 'framer-motion';

const IndustryCases: React.FC = () => {
  const industries = [
    "服装", "鞋子", "箱包", "珠宝", "玩具", "茶叶", 
    "家具", "生鲜", "3C", "书籍", "美容", "母婴",
    "汽车", "二手", "超市", "社区", "家政", "同城", 
    "房产", "旅游", "鲜花"
  ];

  const cases = [
    {
      title: "房租租赁",
      description: "专业的房屋租赁管理系统",
      image: "🏠",
      features: ["在线看房", "合同管理", "租金收缴"]
    },
    {
      title: "服鞋箱包",
      description: "时尚零售行业解决方案",
      image: "👗",
      features: ["款式展示", "尺码管理", "库存同步"]
    },
    {
      title: "3C电子",
      description: "数码产品销售管理平台",
      image: "📱",
      features: ["产品配置", "价格管理", "售后服务"]
    },
    {
      title: "社区团购",
      description: "社区电商运营解决方案",
      image: "🛒",
      features: ["团长管理", "订单配送", "分佣结算"]
    },
    {
      title: "美食外卖",
      description: "餐饮外卖配送管理系统",
      image: "🍜",
      features: ["菜单管理", "订单处理", "配送跟踪"]
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
    margin: '0 auto',
    marginBottom: '2rem'
  };

  const industriesContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '4rem'
  };

  const industryTagStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    fontSize: '0.875rem',
    color: '#374151',
    border: '1px solid #E5E7EB',
    whiteSpace: 'nowrap'
  };

  const casesHeaderStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const casesSubtitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '0.5rem'
  };

  const casesDescStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#6B7280'
  };

  const casesGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  };

  const caseCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E5E7EB',
    position: 'relative',
    overflow: 'hidden'
  };

  const caseImageStyle: React.CSSProperties = {
    fontSize: '4rem',
    marginBottom: '1rem',
    display: 'block'
  };

  const caseTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '0.5rem'
  };

  const caseDescriptionStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#6B7280',
    marginBottom: '1.5rem'
  };

  const featuresListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const featureItemStyle: React.CSSProperties = {
    padding: '0.25rem 0',
    fontSize: '0.875rem',
    color: '#4B5563'
  };

  const qrCodeStyle: React.CSSProperties = {
    marginTop: '1rem',
    padding: '0.5rem',
    backgroundColor: '#F3F4F6',
    borderRadius: '0.5rem',
    fontSize: '0.75rem',
    color: '#6B7280'
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
            各行各业都在用
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={subtitleStyle}
          >
            生意人必备的生产力工具
          </motion.p>

          {/* Industries Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={industriesContainerStyle}
          >
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: '#EBF8FF' }}
                style={industryTagStyle}
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Cases Header */}
        <div style={casesHeaderStyle}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={casesSubtitleStyle}
          >
            行业案例
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={casesDescStyle}
          >
            傻瓜式，自动化，一个人就能搞定
          </motion.p>
        </div>

        {/* Cases Grid */}
        <div style={casesGridStyle}>
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
              }}
              style={caseCardStyle}
            >
              <span style={caseImageStyle}>{caseItem.image}</span>
              <h3 style={caseTitleStyle}>{caseItem.title}</h3>
              <p style={caseDescriptionStyle}>{caseItem.description}</p>
              
              <ul style={featuresListStyle}>
                {caseItem.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={featureItemStyle}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              
              <div style={qrCodeStyle}>
                微信扫码即刻体验
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCases; 