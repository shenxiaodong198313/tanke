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

  const containerStyle: React.CSSProperties = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  };

  const ctaSectionStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3730a3 100%)',
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
    `,
    padding: isMobile ? '2rem 1rem' : '3rem 2rem',
    position: 'relative',
    overflow: 'hidden',
    flex: isMobile ? '0 0 auto' : '0 0 65%'
  };

  const footerSectionStyle: React.CSSProperties = {
    background: '#1a1a2e',
    padding: isMobile ? '0.8rem 1rem 0.5rem' : '1rem 2rem 0.5rem',
    color: 'white',
    flex: 1,
    overflow: 'auto'
  };

  return (
    <div style={containerStyle}>
      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center'
        }}>
          {/* 主标题 */}
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            lineHeight: '1.3',
            marginBottom: isMobile ? '2rem' : '3rem'
          }}>
            立即扫码咨询，领取您的专属解决方案
          </h2>

          {/* 卡片区域 - 水平布局 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '16px',
            padding: isMobile ? '1.5rem' : '2rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            width: isMobile ? '90%' : 'auto',
            maxWidth: '800px'
          }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '1.5rem' : '3rem',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            {/* 人物插图 */}
            <div style={{
              width: isMobile ? '80px' : '120px',
              height: isMobile ? '80px' : '120px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '2rem' : '3rem',
              flexShrink: 0
            }}>
              👨‍💼
            </div>

            {/* 中间文案和按钮 */}
            <div style={{ 
              flex: 1, 
              textAlign: isMobile ? 'center' : 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start'
            }}>
              <div style={{
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                color: '#333',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                马上扫码添加客户经理
              </div>
              <div style={{
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#666',
                marginBottom: '1.5rem'
              }}>
                或者您也可以先
              </div>
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                padding: isMobile ? '0.8rem 2rem' : '1rem 2.5rem',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                // 这里可以添加其他咨询逻辑
                console.log('在线咨询');
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
              }}>
                在线咨询
              </button>
            </div>

            {/* 二维码 */}
            <div style={{
              width: isMobile ? '100px' : '120px',
              height: isMobile ? '100px' : '120px',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #f0f0f0',
              flexShrink: 0
            }}>
              <div style={{
                width: isMobile ? '80px' : '100px',
                height: isMobile ? '80px' : '100px',
                background: `
                  linear-gradient(45deg, #000 25%, transparent 25%),
                  linear-gradient(-45deg, #000 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #000 75%),
                  linear-gradient(-45deg, transparent 75%, #000 75%)
                `,
                backgroundSize: isMobile ? '8px 8px' : '10px 10px',
                backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
              }}></div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        ...footerSectionStyle,
        background: '#323238',
        color: '#e0e0e0',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* 主要内容区域 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(6, 1fr)',
            gap: isMobile ? '1rem' : '2rem',
            flex: 1,
            alignItems: 'start',
            alignContent: 'start'
          }}>
            {/* 外呼 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem',
                minHeight: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                外呼
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                flex: 1
              }}>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>外呼系统</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>云电销BPO</button>
              </div>
            </div>

            {/* 销售管理 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem',
                minHeight: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                销售管理
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                flex: 1
              }}>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>工作手机</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>微小助</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>微联络</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>云客CRM</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>设备管控</button>
              </div>
            </div>

            {/* AI赋能 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem',
                minHeight: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                AI赋能
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                flex: 1
              }}>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>云小智</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>数智员工</button>
              </div>
            </div>

            {/* 私域 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem',
                minHeight: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                私域
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                flex: 1
              }}>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>云客SCRM</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>趣销销</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>代运营服务</button>
              </div>
            </div>

            {/* 抖音 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem',
                minHeight: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                抖音
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                flex: 1
              }}>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>短视频矩阵</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>无人直播</button>
              </div>
            </div>

            {/* 关于云客 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem',
                minHeight: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                关于云客
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                flex: 1
              }}>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>公司简介</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>团队理念</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>投资背景</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: '0.65rem', padding: 0, lineHeight: '1.2' }}>云客动态</button>
              </div>
            </div>
          </div>

          {/* 底部版权信息 */}
          <div style={{
            borderTop: '1px solid #444',
            paddingTop: '1.2rem',
            textAlign: 'center',
            marginTop: '1.2rem',
            fontSize: isMobile ? '0.85rem' : '1rem',
            color: '#b0b0b0',
            letterSpacing: '0.02em',
            background: 'transparent',
            fontWeight: 400
          }}>
            Copyright © 2025 北京探客互动科技有限公司 版权所有 京ICP备2022018369号
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KuaiFooter; 