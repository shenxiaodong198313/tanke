import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const KuaiFooter: React.FC = () => {
  const { t } = useLanguage();
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



  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    height: '100vh',
    background: 'linear-gradient(135deg, #f8f0ff 0%, #e6f3ff 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: isMobile ? '2rem 1rem' : '3rem 2rem',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  };







  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 页脚内容 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: isMobile ? '80vh' : '85vh',
          overflowY: 'auto'
        }}>
          {/* 页脚标题 */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: isMobile ? '1.5rem' : '2rem',
            padding: '0 1rem'
          }}>
            <h1 style={{
              fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#333',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t('footer.title')}
            </h1>
            <p style={{
              fontSize: isMobile ? '0.9rem' : 'clamp(0.9rem, 2vw, 1rem)',
              color: '#666',
              lineHeight: '1.6'
            }}>
              {t('footer.subtitle')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? '2rem' : '3rem',
            marginBottom: '2rem'
          }}>
            {/* 公司信息 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                {t('footer.company')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.about')}
                </button>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.careers')}
                </button>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.contact')}
                </button>
              </div>
            </div>

            {/* 产品 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                {t('footer.products')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.aiPhone')}
                </button>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.marketing')}
                </button>
              </div>
            </div>

            {/* 支持 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                {t('footer.support')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.help')}
                </button>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.docs')}
                </button>
                <button style={{ color: '#666', background: 'none', border: 'none', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer', padding: '0.25rem 0' }}>
                  {t('footer.community')}
                </button>
              </div>
            </div>

            {/* Logo */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>🧠</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a73e8' }}>探客AI</span>
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {t('hero.description')}
              </p>
            </div>
          </div>

          {/* 版权信息 */}
          <div style={{
            borderTop: '1px solid #e8eaed',
            paddingTop: '1.5rem',
            textAlign: 'center'
          }}>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              {t('footer.copyright')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KuaiFooter; 