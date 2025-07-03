import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 禁用/恢复页面滚动
  React.useEffect(() => {
    if (isOpen) {
      // 禁用页面滚动
      document.body.style.overflow = 'hidden';
    } else {
      // 恢复页面滚动
      document.body.style.overflow = 'unset';
    }

    // 清理函数，组件卸载时恢复滚动
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '16px',
    width: isMobile ? '95%' : '1200px',
    height: isMobile ? '80vh' : '700px',
    position: 'relative',
    overflow: 'hidden',
    border: '3px solid #FFD700',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    height: '100%',
    position: 'relative'
  };

  const leftSectionStyle: React.CSSProperties = {
    flex: isMobile ? 1 : 0.45,
    padding: isMobile ? '20px' : '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa'
  };

  const rightSectionStyle: React.CSSProperties = {
    flex: isMobile ? 0 : 0.55,
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#666',
    zIndex: 10
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
    lineHeight: '1.4'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#666',
    marginBottom: '30px',
    lineHeight: '1.5'
  };

  const phonePreviewStyle: React.CSSProperties = {
    width: isMobile ? '200px' : '280px',
    height: isMobile ? '350px' : '480px',
    backgroundColor: '#1a1a1a',
    borderRadius: '30px',
    padding: '8px',
    margin: '20px auto',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
  };

  const phoneContentStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '22px',
    overflow: 'hidden',
    position: 'relative'
  };

  const qrSectionStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '20px'
  };

  const qrCodeStyle: React.CSSProperties = {
    width: isMobile ? '120px' : '150px',
    height: isMobile ? '120px' : '150px',
    backgroundColor: '#f0f0f0',
    margin: '0 auto 15px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#999',
    border: '1px solid #ddd'
  };

  const backButtonStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#666',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  };

  const rightPhoneStyle: React.CSSProperties = {
    width: isMobile ? '0' : '350px',
    height: isMobile ? '0' : '600px',
    position: 'relative',
    transform: 'rotate(-15deg)',
    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
  };

  const rightPhoneContentStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: '45px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const rightPhoneInnerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: '35px',
    backgroundImage: 'linear-gradient(45deg, #4a90e2, #7b68ee)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '40px 20px'
  };

  return (
    <AnimatePresence>
      <motion.div
        style={overlayStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          style={modalStyle}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button style={closeButtonStyle} onClick={onClose}>
            ×
          </button>

          <div style={contentStyle}>
            {/* 左侧内容 */}
            <div style={leftSectionStyle}>
              <div>
                <h2 style={titleStyle}>
                  扫码免费领取<span style={{ color: '#ff6b47' }}>有赞私域直播试用资格</span>
                </h2>
                <p style={subtitleStyle}>
                  还可以定制你的专属解决方案
                </p>

                {/* 手机预览 */}
                <div style={phonePreviewStyle}>
                  <div style={phoneContentStyle}>
                    {/* 手机状态栏 */}
                    <div style={{
                      height: '30px',
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 15px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      <span>16:52</span>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <span>●●●</span>
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>

                    {/* 手机内容 */}
                    <div style={{ padding: '20px', flex: 1 }}>
                      <div style={{
                        backgroundColor: '#f0f0f0',
                        borderRadius: '12px',
                        padding: '15px',
                        marginBottom: '15px',
                        fontSize: '14px'
                      }}>
                        <div style={{ marginBottom: '10px', fontWeight: '600' }}>数据</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span>销售额</span>
                          <span>¥ 0</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span>客流量</span>
                          <span>0</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span>订单</span>
                          <span>0</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>小程序</span>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 二维码区域 */}
              <div style={qrSectionStyle}>
                <div style={qrCodeStyle}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '8px'
                  }}>
                    二维码
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                  支付宝或微信扫一扫安全登录
                </p>
              </div>

              {/* 返回按钮 */}
              <button style={backButtonStyle} onClick={onClose}>
                ← 返回
              </button>
            </div>

            {/* 右侧手机海报 */}
            <div style={rightSectionStyle}>
              <div style={rightPhoneStyle}>
                <div style={rightPhoneContentStyle}>
                  <div style={rightPhoneInnerStyle}>
                    <div style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      lineHeight: '1.4'
                    }}>
                      智能化消费者运营
                      <br />
                      品牌增长新动力
                    </div>
                    
                    <div style={{
                      fontSize: '14px',
                      opacity: 0.9,
                      marginBottom: '30px',
                      lineHeight: '1.6'
                    }}>
                      通过AI赋能，实现精准客户画像
                      <br />
                      提升营销转化效果
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '25px',
                      padding: '12px 24px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      立即体验
                    </div>

                    <div style={{
                      position: 'absolute',
                      bottom: '40px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}>
                      CRM+导购+AI 完美组合 驱动生意增长
                    </div>

                    {/* 底部指示器 */}
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '8px'
                    }}>
                      {[0, 1, 2, 3, 4].map((_, index) => (
                        <div key={index} style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: index === 0 ? 'white' : 'rgba(255, 255, 255, 0.5)'
                        }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal; 