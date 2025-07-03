import React, { useState } from 'react';

const KuaiDetails: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  // 16个功能模块，每个都有独特的渐变色系
  const featureModules = [
    { 
      icon: "📱", 
      title: "小程序", 
      description: "拓展推广路径，提振品牌声量",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      bgColor: "#f0f2ff"
    },
    { 
      icon: "📊", 
      title: "拼团", 
      description: "裂变拉新，多人一起下单提销量",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bgColor: "#fff0f2"
    },
    { 
      icon: "👥", 
      title: "社交分销", 
      description: "好友分享裂变，迅速扩大品牌知名度",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      bgColor: "#f0fbff"
    },
    { 
      icon: "💰", 
      title: "裂变红包", 
      description: "传播拉新，实现产品或者品牌快速推广",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      bgColor: "#f0fff8"
    },
    
    { 
      icon: "🎫", 
      title: "优惠券", 
      description: "购物享优惠，完成促销或提营单价",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      bgColor: "#fff8f0"
    },
    { 
      icon: "🎁", 
      title: "注册赠券", 
      description: "新人注册获得券礼包，提转化",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      bgColor: "#f8ffff"
    },
    { 
      icon: "🎭", 
      title: "全场赠券", 
      description: "全场发券，领券中心全员领券",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      bgColor: "#fffcf0"
    },
    { 
      icon: "🎯", 
      title: "指定赠券", 
      description: "定向发券，精准触达，会员精细化管理",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      bgColor: "#fff0f8"
    },
    
    { 
      icon: "💸", 
      title: "满减", 
      description: "刺激用户消费，提升会员忠诚度",
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      bgColor: "#f8f0ff"
    },
    { 
      icon: "🏷️", 
      title: "满折", 
      description: "多买多优惠，有效提升店铺营业额",
      gradient: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
      bgColor: "#fff8fc"
    },
    { 
      icon: "🎉", 
      title: "满赠", 
      description: "满足指定条件获得赠品，拉动客单价",
      gradient: "linear-gradient(135deg, #ffeeff 0%, #d9b3ff 100%)",
      bgColor: "#fcf8ff"
    },
    { 
      icon: "💼", 
      title: "打包一口价", 
      description: "清库存，提升客单价与控成本",
      gradient: "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)",
      bgColor: "#f0f8ff"
    },
    
    { 
      icon: "💎", 
      title: "会员成长值", 
      description: "完整的会员成长体系，提升用户粘性",
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      bgColor: "#fcf8ff"
    },
    { 
      icon: "⭐", 
      title: "会员积分", 
      description: "积分兑消费金，激活客户消费",
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      bgColor: "#f0fbff"
    },
    { 
      icon: "🏪", 
      title: "积分商城", 
      description: "小积分大价值，好礼随心兑",
      gradient: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
      bgColor: "#fffbf0"
    },
    { 
      icon: "👔", 
      title: "CRM", 
      description: "会员分层管理与精准营销，拉升销售转化",
      gradient: "linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)",
      bgColor: "#fff8f8"
    }
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? 'auto' : '100vh',
    padding: isMobile ? '8rem 1rem 6rem' : '8rem 2rem 6rem',
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '16px' : '20px',
    marginBottom: '3rem'
  };

  const getCardStyle = (index: number, bgColor: string): React.CSSProperties => ({
    backgroundColor: bgColor,
    borderRadius: '8px', // 更小的圆角
    padding: isMobile ? '1.2rem' : '1.5rem',
    textAlign: 'left',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s ease',
    position: 'relative',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)', // 更淡的投影
    minHeight: isMobile ? '100px' : '120px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: isMobile ? '12px' : '16px',
    cursor: 'pointer',
    overflow: 'hidden'
  });

  const getIconStyle = (gradient: string): React.CSSProperties => ({
    width: isMobile ? '48px' : '56px', // 更大的图标
    height: isMobile ? '48px' : '56px',
    background: gradient,
    borderRadius: '12px', // 圆角图标背景
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '1.5rem' : '1.8rem', // 更大的emoji
    flexShrink: 0,
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  });

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1e293b',
    lineHeight: '1.3'
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.8rem' : '0.85rem',
    lineHeight: '1.4',
    color: '#64748b',
    margin: 0
  };

  const getOverlayStyle = (isVisible: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(4px)',
    borderRadius: '8px'
  });

  const consultButtonStyle: React.CSSProperties = {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: isMobile ? '8px 20px' : '10px 24px',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: isMobile ? '12px 32px' : '14px 40px',
    fontSize: isMobile ? '1rem' : '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 功能网格 */}
        <div style={gridContainerStyle}>
          {featureModules.map((module, index) => (
            <div
              key={index}
              style={getCardStyle(index, module.bgColor)}
              onMouseEnter={() => {
                if (!isMobile) {
                  setHoveredIndex(index);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setHoveredIndex(null);
                }
              }}
            >
              <div style={getIconStyle(module.gradient)}>
                {module.icon}
              </div>
              <div style={textContainerStyle}>
                <h3 style={cardTitleStyle}>{module.title}</h3>
                <p style={cardDescStyle}>{module.description}</p>
              </div>
              
              {/* 悬浮覆盖层 */}
              <div style={getOverlayStyle(hoveredIndex === index)}>
                <button 
                  style={consultButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#3b82f6';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  立即咨询
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 底部CTA按钮 */}
        <div style={{ 
          textAlign: 'center'
        }}>
          <button 
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            了解完整功能清单
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default KuaiDetails; 