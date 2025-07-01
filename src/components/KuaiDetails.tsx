import React from 'react';

const KuaiDetails: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

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

  const marketingModules = [
    {
      title: "全触点互动",
      subtitle: "数智化运营多链路消费者",
      description: "用户在哪里，沟通和体验就在哪里",
      icon: "👆",
      color: "#f59e0b"
    },
    {
      title: "邮件营销", 
      subtitle: "无缝衔接Shopify平台，用EDM邮件",
      description: "营销实现您的私域GMV增长",
      icon: "📧",
      color: "#f59e0b"
    },
    {
      title: "微信营销",
      subtitle: "微信生态全域营销",
      description: "助力移动端获客·留客",
      icon: "💬",
      color: "#f59e0b"
    },
    {
      title: "短信营销",
      subtitle: "国内外高速率高送达",
      description: "短链点击追踪｜首视频呈现｜数据累积",
      icon: "📱",
      color: "#f59e0b"
    },
    {
      title: "AI智能外呼",
      subtitle: "助力企业规模化，精细化会员运营",
      description: "实现品牌再增长",
      icon: "🎧",
      color: "#f59e0b"
    },
    {
      title: "TikTok Ads",
      subtitle: "出海必占位的主流平台",
      description: "移动时代领跑用户注意力",
      icon: "🎵",
      color: "#f59e0b"
    },
    {
      title: "5G消息",
      subtitle: "全方位提升展现与转化链路",
      description: "富媒体消息，开启5G营销新时代",
      icon: "📨",
      color: "#f59e0b"
    },
    {
      title: "WhatsApp消息",
      subtitle: "让企业与全球的用户链接起来",
      description: "实现无缝的消息交换和互动",
      icon: "📞",
      color: "#f59e0b"
    }
  ];

  // 导航栏样式
  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#1a73e8',
    padding: '0.75rem 0'
  };

  const navContainerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const menuStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const menuItemStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    padding: '0.5rem 0'
  };

  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    color: '#1a73e8',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.9rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? 'auto' : '100vh',
    padding: isMobile ? '6rem 1rem 3rem' : '6rem 1rem 2rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isMobile ? 'flex-start' : 'center',
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 0.5rem',
    width: '100%'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: isMobile ? '1.5rem 1rem' : 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
    textAlign: 'center',
    border: '1px solid #f0f0f0',
    transition: 'all 0.3s ease',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    minHeight: isMobile ? '200px' : 'auto'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 4vw, 3rem)',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    display: 'block',
    color: '#f59e0b'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.1rem' : 'clamp(1.2rem, 3vw, 1.4rem)',
    fontWeight: '600',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    color: '#333'
  };

  const cardSubtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.8rem' : 'clamp(0.85rem, 2vw, 0.95rem)',
    color: '#666',
    marginBottom: isMobile ? '0.6rem' : '0.8rem',
    lineHeight: '1.4'
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.75rem' : 'clamp(0.8rem, 1.8vw, 0.9rem)',
    lineHeight: '1.5',
    color: '#888'
  };

  const menuItems = [
    { name: 'AI技术' },
    { name: '个人用户' },
    { name: '中小企业用户' },
    { name: '行业客户' },
    { name: '生态合作伙伴' }
  ];

  return (
    <section style={sectionStyle}>
      {/* 顶部导航 - 固定定位 */}
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <div style={logoStyle}>
            <span style={{ fontSize: '2rem' }}>🧠</span>
            <span>360智脑</span>
          </div>

          <ul style={{ 
            ...menuStyle, 
            display: isMobile ? 'none' : 'flex' 
          }}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <span
                  style={menuItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  }}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>

          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            立即定制
          </button>
        </div>
      </nav>

      <div style={containerStyle}>
        {/* 8个营销模块 - 响应式网格 */}
        <div className={isMobile ? "mobile-8-grid" : "responsive-grid-8"}>
          {marketingModules.map((module, index) => (
            <div
              key={module.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              <span style={iconStyle}>{module.icon}</span>
              <h3 style={cardTitleStyle}>{module.title}</h3>
              <p style={cardSubtitleStyle}>{module.subtitle}</p>
              <p style={cardDescStyle}>{module.description}</p>
            </div>
          ))}
        </div>

        {/* 底部简化的CTA */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: isMobile ? '2rem' : '3rem',
          paddingBottom: isMobile ? '2rem' : '0'
        }}>
          <p style={{
            fontSize: isMobile ? '0.95rem' : 'clamp(1rem, 2.5vw, 1.1rem)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}>
            全渠道营销，一站式解决 - 探客AI手机集成多种营销工具
          </p>
        </div>
      </div>
    </section>
  );
};

export default KuaiDetails; 