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

  // 16个功能模块，严格按照设计图内容
  const featureModules = [
    { icon: "📱", title: "小程序", description: "拓展推广路径，提振品牌声量" },
    { icon: "📊", title: "拼团", description: "裂变拉新，多人一起下单提销量" },
    { icon: "👥", title: "社交分销", description: "好友分享裂变，迅速扩大品牌知名度" },
    { icon: "💰", title: "裂变红包", description: "传播拉新，实现产品或者品牌快速推广" },
    
    { icon: "🎫", title: "优惠券", description: "购物享优惠，完成促销或提营单价" },
    { icon: "🎁", title: "注册赠券", description: "新人注册获得券礼包，提转化" },
    { icon: "🎭", title: "全场赠券", description: "全场发券，领券中心全员领券" },
    { icon: "🎯", title: "指定赠券", description: "定向发券，精准触达，会员精细化管理" },
    
    { icon: "💸", title: "满减", description: "刺激用户消费，提升会员忠诚度" },
    { icon: "🏷️", title: "满折", description: "多买多优惠，有效提升店铺营业额" },
    { icon: "🎉", title: "满赠", description: "满足指定条件获得赠品，拉动客单价" },
    { icon: "💼", title: "打包一口价", description: "清库存，提升客单价与控成本" },
    
    { icon: "💎", title: "会员成长值", description: "完整的会员成长体系，提升用户粘性" },
    { icon: "⭐", title: "会员积分", description: "积分兑消费金，激活客户消费" },
    { icon: "🏪", title: "积分商城", description: "小积分大价值，好礼随心兑" },
    { icon: "👔", title: "CRM", description: "会员分层管理与精准营销，拉升销售转化" }
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

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: isMobile ? '1rem' : '1.5rem',
    textAlign: 'left',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    position: 'relative',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    minHeight: isMobile ? '80px' : '90px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: isMobile ? '12px' : '16px'
  };

  const iconStyle: React.CSSProperties = {
    width: isMobile ? '28px' : '32px',
    height: isMobile ? '28px' : '32px',
    backgroundColor: '#3b82f6',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '1rem' : '1.2rem',
    flexShrink: 0
  };

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
    color: '#1e293b',
    lineHeight: '1.3'
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.75rem' : '0.8rem',
    lineHeight: '1.3',
    color: '#64748b',
    margin: 0
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
              style={cardStyle}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              <div style={iconStyle}>
                {module.icon}
              </div>
              <div style={textContainerStyle}>
                <h3 style={cardTitleStyle}>{module.title}</h3>
                <p style={cardDescStyle}>{module.description}</p>
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