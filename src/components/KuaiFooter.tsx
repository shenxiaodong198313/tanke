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
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  };

  const footerSectionStyle: React.CSSProperties = {
    background: '#1a1a2e',
    padding: isMobile ? '0.8rem 1rem 0.5rem' : '1.5rem 2rem 1rem',
    color: 'white',
    overflow: 'auto'
  };

  return (
    <div style={containerStyle}>
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