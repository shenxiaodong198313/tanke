import React from 'react';
import { Award, Leaf, BadgeCheck, ShieldCheck } from 'lucide-react';

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
    overflow: 'hidden',
    margin: 0,
    padding: 0
  };

  const footerSectionStyle: React.CSSProperties = {
    background: '#1a1a2e',
    padding: isMobile ? '1.5rem 1rem 1rem' : '1.5rem 2rem 1rem',
    color: 'white',
    overflow: 'auto',
    margin: 0,
    border: 'none'
  };

  // 新增：资质/认证展示区数据与样式
  const honors: { icon: React.ElementType; title: string }[] = [
    { icon: Leaf, title: '国家高新技术企业' },
    { icon: Award, title: '科技创新企业' },
    { icon: BadgeCheck, title: '软件著作权' },
    { icon: ShieldCheck, title: '信息安全等级保护' },
  ];

  const honorSectionStyle: React.CSSProperties = {
    borderTop: '1px solid #3a3a3a',
    borderBottom: '1px solid #3a3a3a',
    padding: isMobile ? '1rem 0' : '1.2rem 0',
    margin: isMobile ? '1rem 0' : '1.2rem 0',
  };

  const honorItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? 6 : 8,
    color: '#e5e7eb',
  };

  const honorIconCircleStyle: React.CSSProperties = {
    width: isMobile ? 36 : 44,
    height: isMobile ? 36 : 44,
    borderRadius: 9999,
    border: '2px solid rgba(255,255,255,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
            gap: isMobile ? '1.5rem 0.8rem' : '2rem',
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
                fontSize: isMobile ? '0.9rem' : '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: isMobile ? '0.8rem' : '0.5rem',
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
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>外呼系统</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>云电销BPO</button>
              </div>
            </div>

            {/* 销售管理 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: isMobile ? '0.9rem' : '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: isMobile ? '0.8rem' : '0.5rem',
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
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>工作手机</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>微小助</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>微联络</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>云客CRM</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>设备管控</button>
              </div>
            </div>

            {/* AI赋能 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: isMobile ? '0.9rem' : '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: isMobile ? '0.8rem' : '0.5rem',
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
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>云小智</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>数智员工</button>
              </div>
            </div>

            {/* 私域 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: isMobile ? '0.9rem' : '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: isMobile ? '0.8rem' : '0.5rem',
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
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>云客SCRM</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>趣销销</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>代运营服务</button>
              </div>
            </div>

            {/* 抖音 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: isMobile ? '0.9rem' : '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: isMobile ? '0.8rem' : '0.5rem',
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
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>短视频矩阵</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>无人直播</button>
              </div>
            </div>

            {/* 关于云客 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: isMobile ? '0.9rem' : '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: isMobile ? '0.8rem' : '0.5rem',
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
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>公司简介</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>团队理念</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>投资背景</button>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', padding: 0, lineHeight: '1.4' }}>云客动态</button>
              </div>
            </div>
          </div>

          {/* 资质/认证展示 */}
          <div style={honorSectionStyle}>
            <div
              style={{
                display: isMobile ? 'grid' : 'flex',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : undefined,
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: isMobile ? 16 : 0,
                textAlign: 'center',
              }}
            >
              {honors.map((h, idx) => {
                const Icon = h.icon as any;
                return (
                  <React.Fragment key={h.title}>
                    <div style={honorItemStyle}>
                      <div style={honorIconCircleStyle}>
                        <Icon size={isMobile ? 18 : 22} color="#ffffff" strokeWidth={2.2} />
                      </div>
                      <div style={{ fontSize: isMobile ? 12 : 14, color: '#cbd5e1' }}>{h.title}</div>
                    </div>
                    {!isMobile && idx < honors.length - 1 && (
                      <div style={{ width: 1, height: 44, background: 'rgba(255,255,255,0.16)' }} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* 底部版权信息 */}
          <div style={{
            borderTop: '1px solid #444',
            paddingTop: isMobile ? '1rem' : '1.2rem',
            textAlign: 'center',
            marginTop: isMobile ? '2rem' : '1.2rem',
            fontSize: isMobile ? '0.7rem' : '1rem',
            color: '#b0b0b0',
            letterSpacing: '0.02em',
            background: 'transparent',
            fontWeight: 400,
            lineHeight: isMobile ? '1.4' : '1.2',
            padding: isMobile ? '0 0.5rem' : '0'
          }}>
            Copyright © 2025 北京探客互动科技有限公司 版权所有 京ICP备2022018369号
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KuaiFooter;