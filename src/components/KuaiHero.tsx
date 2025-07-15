import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

const KuaiHero: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useLanguage();
  const { openContactModal } = useModal();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 整个section的容器
  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    height: '100vh', // 固定第一屏高度为100vh
    overflow: 'hidden' // 隐藏超出部分，确保不露出第二屏
  };

  const heroStyle: React.CSSProperties = {
    background: '#030303', // 深色背景
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-64px',
    paddingTop: '64px'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.05)'
  };

  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: '140px', // 大幅增加顶部间距，让文字往下移动更多
    paddingBottom: '60px' // 减少底部padding
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: isMobile ? '100%' : '600px',
    textAlign: isMobile ? 'center' : 'left'
  };

  const mainTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '48px' : '68px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '16px',
    color: 'white',
    letterSpacing: '-2px',
    background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '18px' : '20px',
    fontWeight: '400',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6'
  };

  const sloganStyle: React.CSSProperties = {
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: '400',
    marginBottom: '40px',
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: '1.6'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    justifyContent: isMobile ? 'center' : 'flex-start',
    flexWrap: 'wrap',
    marginBottom: '120px' // 增加按钮和白色容器之间的间距
  };

  const primaryButtonStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
    color: '#030303',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.23,0.86,0.39,0.96)',
    minWidth: '120px',
    height: '44px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    letterSpacing: '1px',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '16px',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '120px',
    height: '44px'
  };

  const illustrationStyle: React.CSSProperties = {
    flex: 1,
    display: 'none', // 暂时隐藏右侧图片区域
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '500px'
  };

  // 白色特性容器 - 调整位置让一半覆盖蓝色背景
  const featuresContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '55vh' : '60vh', // 调整到合适位置，确保在第一屏内且50%覆盖蓝色背景
    left: '0',
    right: '0',
    margin: '0 auto',
    width: '90%',
    maxWidth: '1200px',
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: isMobile ? '24px 16px' : '36px 24px', // 进一步减少内边距，确保容器不会太高
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.08)',
    zIndex: 20
  };

  const featuresStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: isMobile ? '32px' : '48px' // 减少间距
  };

  const featureItemStyle: React.CSSProperties = {
    textAlign: 'center'
  };

  const featureIconStyle: React.CSSProperties = {
    width: '56px', // 稍微减小图标尺寸
    height: '56px',
    backgroundColor: '#f0f8ff',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px', // 减小图标字体
    margin: '0 auto 12px', // 减少间距
    color: '#1677ff'
  };

  const featureTitleStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '6px', // 减少间距
    color: '#000000d9'
  };

  const featureDescStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#00000073',
    lineHeight: '1.4' // 减少行高
  };

  // 底部占位区域 - 增加高度确保白色容器有足够空间
  const spacerStyle: React.CSSProperties = {
    height: '350px', // 进一步增加高度，确保第一屏完整显示
    backgroundColor: '#f5f5f5'
  };

  return (
    <>
      {/* 整个section容器 */}
      <section style={sectionStyle}>
        {/* 蓝色背景区域 */}
        <div style={heroStyle}>
          <div style={overlayStyle}></div>
          
          {/* 主要内容区域 */}
          <div style={mainContentStyle}>
            <div style={containerStyle}>
              <div style={contentStyle}>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={mainTitleStyle}
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={subtitleStyle}
                >
                  {t('hero.subtitle')}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={sloganStyle}
                >
                  {t('hero.description')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={buttonContainerStyle}
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={primaryButtonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f5f5f5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    {t('hero.getStarted')}
                  </motion.button>

                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.6)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={secondaryButtonStyle}
                    onClick={() => openContactModal()}
                  >
                    {t('hero.learnMore')}
                  </motion.button>
                </motion.div>
              </div>

              {/* 右侧插图区域 */}
              <div style={illustrationStyle}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{
                    width: '400px',
                    height: '300px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div style={{
                    color: 'white',
                    fontSize: '48px',
                    textAlign: 'center'
                  }}>
                    📱<br/>
                    <span style={{ fontSize: '16px' }}>移动端组件库</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* 白色特性容器 - 绝对定位，一半覆盖蓝色背景 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={featuresContainerStyle}
        >
          <div style={featuresStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={featureItemStyle}
            >
              <div style={featureIconStyle}>
                <span>📱</span>
              </div>
              <div style={featureTitleStyle}>智能手机</div>
              <div style={featureDescStyle}>无需配置，即可拥有最佳的包体积大小和极致的性能</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={featureItemStyle}
            >
              <div style={featureIconStyle}>
                <span>🎯</span>
              </div>
              <div style={featureTitleStyle}>精准营销</div>
              <div style={featureDescStyle}>可以高效地对组件外观进行调整或者创建自己的主题</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={featureItemStyle}
            >
              <div style={featureIconStyle}>
                <span>📺</span>
              </div>
              <div style={featureTitleStyle}>自动直播</div>
              <div style={featureDescStyle}>拥有流畅的手势和细腻的动画，助力产品打造极致体验</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 底部占位区域 */}
      <div style={spacerStyle}></div>
    </>
  );
};

export default KuaiHero; 