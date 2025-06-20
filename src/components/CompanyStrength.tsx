import React from 'react';
import { motion } from 'framer-motion';

const CompanyStrength: React.FC = () => {
  const achievements = [
    {
      title: "广东省\"守合同重信用\"企业",
      description: "政府认证的诚信企业",
      icon: "🏆"
    },
    {
      title: "腾讯SaaS加速器成员",
      description: "腾讯生态合作伙伴",
      icon: "🚀"
    },
    {
      title: "App Store Top 20",
      description: "效率榜前20名应用",
      icon: "📱"
    },
    {
      title: "国家高新技术企业",
      description: "拥有50+项专利技术",
      icon: "⚡"
    },
    {
      title: "腾讯云启联盟成员",
      description: "云计算生态伙伴",
      icon: "☁️"
    }
  ];

  const stats = [
    { number: "10,000+", label: "服务企业数量", description: "覆盖各行各业" },
    { number: "95%", label: "客户满意度", description: "持续优质服务" },
    { number: "10年", label: "专业经验", description: "深耕行业多年" },
    { number: "24/7", label: "技术支持", description: "全天候服务保障" }
  ];

  const sectionStyle: React.CSSProperties = {
    padding: '4rem 0',
    backgroundColor: 'white'
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

  const achievementsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  };

  const achievementCardStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#F9FAFB',
    borderRadius: '1rem',
    border: '1px solid #E5E7EB',
    transition: 'all 0.3s ease'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block'
  };

  const achievementTitleStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '0.5rem'
  };

  const achievementDescStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#6B7280'
  };

  const statsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem'
  };

  const statCardStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '2rem'
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: '0.5rem',
    display: 'block'
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: '0.25rem'
  };

  const statDescStyle: React.CSSProperties = {
    fontSize: '0.875rem',
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
            公司实力
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={subtitleStyle}
          >
            超过10,000家企业的信任选择，全部来自口碑推荐
          </motion.p>
        </div>

        {/* 资质荣誉 */}
        <div style={achievementsGridStyle}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                backgroundColor: '#F3F4F6',
                transition: { duration: 0.3 }
              }}
              style={achievementCardStyle}
            >
              <span style={iconStyle}>{achievement.icon}</span>
              <h3 style={achievementTitleStyle}>{achievement.title}</h3>
              <p style={achievementDescStyle}>{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 数据统计 */}
        <div style={statsGridStyle}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              style={statCardStyle}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                style={statNumberStyle}
              >
                {stat.number}
              </motion.span>
              <h3 style={statLabelStyle}>{stat.label}</h3>
              <p style={statDescStyle}>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStrength; 