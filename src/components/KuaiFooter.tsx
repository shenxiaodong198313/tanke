import React from 'react';

const KuaiFooter: React.FC = () => {
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
    background: 'linear-gradient(135deg, #f8f0ff 0%, #e6f3ff 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isMobile ? 'flex-start' : 'center',
    alignItems: 'center',
    position: 'relative',
    padding: isMobile ? '6rem 1rem 3rem' : '6rem 1rem 2rem'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 'bold',
    marginBottom: isMobile ? '2rem' : '3rem',
    color: '#333',
    textAlign: 'center',
    lineHeight: '1.3'
  };

  const industryGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)',
    gap: isMobile ? '1.5rem' : '1.5rem',
    marginBottom: isMobile ? '2rem' : '3rem'
  };

  const industryCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: isMobile ? '1.5rem 1rem' : '1.5rem 1rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const iconContainerStyle: React.CSSProperties = {
    width: isMobile ? '60px' : '80px',
    height: isMobile ? '60px' : '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    fontSize: isMobile ? '1.5rem' : '2rem',
    color: 'white'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.1rem' : '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333'
  };

  const cardDescriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.85rem' : '0.95rem',
    color: '#666',
    lineHeight: '1.6',
    textAlign: 'left'
  };

  const menuItems = [
    { name: 'AI技术' },
    { name: '个人用户' },
    { name: '中小企业用户' },
    { name: '行业客户' },
    { name: '生态合作伙伴' }
  ];

  const industries = [
    {
      icon: '📄',
      title: '生产型企业直播',
      description: '魔棒声音人直播以实景为直播镜头，对生产性企业有着流水线或生产环境，可给用户来沉浸式体验，人可提高人气的同时长。'
    },
    {
      icon: '👨‍🍳',
      title: '本地实体商家',
      description: '本地生活市场庞大，几乎每个商家都需要直播，但若干人员成本高，话术体验差，老板又无心直播，魔棒人直播系统无人值守，真实镜头去现场出现，如人流场景，菜品制作场景，开心娱乐场景，可场动直播机，可以随时移动，寻找美好瞬间。'
    },
    {
      icon: '💆‍♀️',
      title: '线下美容美体行业',
      description: '美容行业是获客成本比较高的行业，真实直播场景可以给用户来沉浸式体验，以往直播缺乏真主播术不引号，很多时候出现尴尬场景，通过魔棒声音人直播，录制真人话术真实场景，避免尴尬，获客能力强。'
    },
    {
      icon: '🏠',
      title: '家居建材行业',
      description: '家居建材行业是本地获得成本比较高的行业，通过合理摆放相关产品，进行实景直播，加上录制话术，可实现无人直播，长期做客。'
    },
    {
      icon: '🎯',
      title: '有账号就可开直播',
      description: '魔棒声音人直播系统，应用场景非常广泛，只需要有账号就可开直播带货买券，需要获客，即可获得用户，买货的局部，卖真直播，通过专业的话术来实现本地获客，比如你有账号就可在家开无人直播并挂载商品带货或卖团购券赚佣金。'
    }
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

          {/* 桌面菜单 */}
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
        <h2 style={titleStyle}>
          广泛应用于全行业，只要有账号就可获客，就可带货卖券赚佣金。
        </h2>

        {/* 行业应用网格 */}
        <div style={industryGridStyle}>
          {industries.map((industry, index) => (
            <div
              key={index}
              style={industryCardStyle}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }
              }}
            >
              <div style={iconContainerStyle}>
                {industry.icon}
              </div>
              <h3 style={cardTitleStyle}>
                {industry.title}
              </h3>
              <p style={cardDescriptionStyle}>
                {industry.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KuaiFooter; 