import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [activeCard, setActiveCard] = useState('demo'); // 默认展开预约演示

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px',
    background: '#18181c', // 深色背景
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '64px 24px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#222',
    textAlign: 'center',
    marginBottom: '48px',
    letterSpacing: '1px',
  };

  // 上方联系方式卡片容器样式
  const topCardsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    marginBottom: '64px',
    maxWidth: '1200px',
    width: '100%',
  };

  const cardsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    maxWidth: '1200px',
    width: '100%',
    height: '400px',
  };

  const getCardStyle = (cardKey: string): React.CSSProperties => ({
    background: 'rgba(36, 36, 48, 0.95)',
    borderRadius: '24px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    flex: activeCard === cardKey ? 3 : 1,
    position: 'relative',
    overflow: 'hidden',
  });

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#222',
    marginBottom: '16px',
    textAlign: 'center',
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
    lineHeight: 1.6,
    marginBottom: '24px',
  };

  const qrCodeStyle: React.CSSProperties = {
    width: '120px',
    height: '120px',
    background: 'white',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    border: '2px solid #f0f0f0',
  };

  const qrPlaceholderStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    background: `
      linear-gradient(45deg, #000 25%, transparent 25%),
      linear-gradient(-45deg, #000 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #000 75%),
      linear-gradient(-45deg, transparent 75%, #000 75%)
    `,
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
  };

  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
  };

  const collapsedContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    opacity: 0.7,
  };

  const expandedContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>您可以通过以下方式联系我们</h1>
      
      {/* 上方联系方式卡片 */}
      <div style={topCardsContainerStyle}>
        {/* 1V1咨询 */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '32px',
          flex: 1,
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', color: '#222' }}>
            1V1咨询
          </h3>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '20px' }}>
            您的专属顾问为您提供产品咨询
          </p>
          <div style={qrCodeStyle}>
            <div style={qrPlaceholderStyle}></div>
          </div>
        </div>

        {/* 公众号 */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '32px',
          flex: 1,
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', color: '#222' }}>
            公众号
          </h3>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '20px' }}>
            关注公众号，实时掌握探客AI最新动态
          </p>
          <div style={qrCodeStyle}>
            <div style={qrPlaceholderStyle}></div>
          </div>
        </div>

        {/* 视频号 */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '32px',
          flex: 1,
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', color: '#222' }}>
            视频号
          </h3>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '20px' }}>
            关注视频号，分享您的商业深度思考
          </p>
          <div style={qrCodeStyle}>
            <div style={qrPlaceholderStyle}></div>
          </div>
        </div>
      </div>

      {/* 预约演示3个模块 */}
      <div style={cardsContainerStyle}>
        {/* 预约演示 */}
        <div
          style={getCardStyle('demo')}
          onMouseEnter={() => setActiveCard('demo')}
        >
          {activeCard === 'demo' ? (
            <div style={expandedContentStyle}>
              <h2 style={cardTitleStyle}>预约演示</h2>
              <p style={cardDescStyle}>
                通过演示，您可以快速了解探客AI增长手机的产品功能和使用场景，
                判断与您的业务需求是否适配，并获取专属您的解决方案和价格方案
              </p>
              <button 
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                }}
              >
                立即预约 →
              </button>
            </div>
          ) : (
            <div style={collapsedContentStyle}>
              <h3 style={{ ...cardTitleStyle, fontSize: '1.2rem' }}>预约演示</h3>
            </div>
          )}
        </div>

        {/* 邮件联系 */}
        <div
          style={getCardStyle('email')}
          onMouseEnter={() => setActiveCard('email')}
        >
          {activeCard === 'email' ? (
            <div style={expandedContentStyle}>
              <h2 style={cardTitleStyle}>邮件联系</h2>
              <p style={cardDescStyle}>
                帮助您快速了解探客AI增长手机产品及价格。
              </p>
              <p style={{ ...cardDescStyle, fontWeight: 600, color: '#1d4ed8' }}>
                邮箱地址：info@weiling.cn
              </p>
            </div>
          ) : (
            <div style={collapsedContentStyle}>
              <h3 style={{ ...cardTitleStyle, fontSize: '1.2rem' }}>邮件联系</h3>
            </div>
          )}
        </div>

        {/* 成为合作伙伴 */}
        <div
          style={getCardStyle('partner')}
          onMouseEnter={() => setActiveCard('partner')}
        >
          {activeCard === 'partner' ? (
            <div style={expandedContentStyle}>
              <h2 style={cardTitleStyle}>成为合作伙伴</h2>
              <p style={cardDescStyle}>
                了解我们的合作伙伴体系和对合作伙伴的支持
              </p>
              <button 
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                }}
                onClick={() => window.location.href = '/partnership'}
              >
                立即加入我们 →
              </button>
            </div>
          ) : (
            <div style={collapsedContentStyle}>
              <h3 style={{ ...cardTitleStyle, fontSize: '1.2rem' }}>成为合作伙伴</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact; 