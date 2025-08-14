import React, { useState } from 'react';
import SEOHead from '../SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState('demo'); // 默认展开预约演示

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px',
    background: 'linear-gradient(135deg, #f4f8ff 0%, #e8f2ff 50%, #dbeafe 100%)', // 浅蓝色渐变背景
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '64px 0',
  };

  // 移除未使用的样式常量，避免 ESLint 报警

  const cardsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    maxWidth: '1200px',
    width: '100%',
    height: '400px',
  };

  const getCardStyle = (cardKey: string): React.CSSProperties => ({
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '24px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    flex: activeCard === cardKey ? 3 : 1,
    position: 'relative',
    overflow: 'hidden',
  });

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: '16px',
    textAlign: 'center',
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 1.6,
    marginBottom: '24px',
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
    <>
      <SEOHead
        title="联系我们 - 探客AI手机"
        description="欢迎联系探客AI手机团队，获取产品咨询、合作与技术支持。"
        keywords="联系我们, 客服, 技术支持, 产品咨询, 探客AI手机"
        ogTitle="联系我们 - 探客AI手机"
        ogDescription="欢迎联系探客AI手机团队，获取产品咨询、合作与技术支持。"
      />
      <div style={containerStyle}>
        {/* 蓝色背景的标题区域 */}
        <div style={{
          width: '100%',
          minHeight: '400px',
          background: 'linear-gradient(135deg, #2574e8 0%, #1e40af 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '64px',
        }}>
          <div style={{textAlign: 'center', maxWidth: '800px', padding: '0 24px'}}>
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '32px',
              marginTop: '0',
              textAlign: 'center',
              letterSpacing: '2px',
              whiteSpace: 'nowrap',
            }}>{t('page.contact.title')}</h1>
            <p style={{fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', marginBottom: '48px', lineHeight: 1.6}}>
              {t('page.contact.subtitle')}
            </p>
          </div>
        </div>

        {/* 预约演示3个模块 */}
        <div style={{...cardsContainerStyle, padding: '0 24px'}}>
          {/* 预约演示 */}
          <div
            style={getCardStyle('demo')}
            onMouseEnter={() => setActiveCard('demo')}
          >
            {activeCard === 'demo' ? (
              <div style={expandedContentStyle}>
                <h2 style={cardTitleStyle}>{t('page.contact.demo')}</h2>
                <p style={cardDescStyle}>
                  {t('page.contact.demo.desc')}
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
                  {t('page.contact.book')} →
                </button>
              </div>
            ) : (
              <div style={collapsedContentStyle}>
                <h3 style={{ ...cardTitleStyle, fontSize: '1.2rem' }}>{t('page.contact.demo')}</h3>
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
                <h2 style={cardTitleStyle}>{t('page.contact.email')}</h2>
                <p style={cardDescStyle}>
                  {t('page.contact.email.desc')}
                </p>
                <p style={{ ...cardDescStyle, fontWeight: 600, color: '#1d4ed8' }}>
                  邮箱地址：info@weiling.cn
                </p>
              </div>
            ) : (
              <div style={collapsedContentStyle}>
                <h3 style={{ ...cardTitleStyle, fontSize: '1.2rem' }}>{t('page.contact.email')}</h3>
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
                <h2 style={cardTitleStyle}>{t('page.contact.partner')}</h2>
                <p style={cardDescStyle}>
                  {t('page.contact.partner.desc')}
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
                  {t('page.contact.join')} →
                </button>
              </div>
            ) : (
              <div style={collapsedContentStyle}>
                <h3 style={{ ...cardTitleStyle, fontSize: '1.2rem' }}>{t('page.contact.partner')}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;