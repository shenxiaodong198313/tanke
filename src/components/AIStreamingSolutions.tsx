import React from 'react';

const solutions = [
  {
    icon: '🔄',
    badge: 1,
    title: '实景直播',
    desc: '一部手机就能开播，不需要声卡，用实景直播，不用培训主播，不用购买数字人。',
    color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  },
  {
    icon: '😐',
    badge: 2,
    title: '视频直播',
    desc: '不用搭建直播场景，直接用录制好的视频进行开播，直播场景更加丰富和吸引人。',
    color: 'linear-gradient(135deg, #f87171 0%, #f43f5e 100%)',
  },
  {
    icon: '🔒',
    badge: 3,
    title: '矩阵直播',
    desc: '矩阵开播，一个账号授权无数账号同时开播。实景和AI加持，规避封号风险。',
    color: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
  },
  {
    icon: '🎧',
    badge: 4,
    title: '无人直播手机',
    desc: '2024年直播黑科技，直接用视频进行直播，一部手机既可以录播又可以实景直播。',
    color: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
  },
];

const AIStreamingSolutions: React.FC = () => {
  return (
    <section style={{
      background: '#fff',
      padding: '80px 0',
      color: '#23242a',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: '2.8rem',
          fontWeight: 800,
          marginBottom: '18px',
          letterSpacing: 1,
          color: '#23242a',
        }}>
          AI自动直播系统技术源头<br />代理、OEM、私有化部署
        </div>
        <div style={{
          fontSize: '1.25rem',
          color: '#666',
          marginBottom: '56px',
        }}>
          矩阵直播、防封机制、直播贴图、智能互动。
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          marginTop: '0',
        }}>
          {solutions.map((item, idx) => (
            <div key={item.title} style={{
              background: '#f7f8fa',
              borderRadius: '20px',
              padding: '48px 32px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
              position: 'relative',
              minHeight: 320,
            }}>
              <div style={{
                width: 72,
                height: 72,
                borderRadius: 20,
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 38,
                color: '#fff',
                position: 'relative',
                marginBottom: 24,
              }}>
                {item.icon}
                <span style={{
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  background: '#fff',
                  color: '#2563eb',
                  borderRadius: '50%',
                  fontSize: 18,
                  fontWeight: 700,
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  border: '2px solid #fff',
                }}>{item.badge}</span>
              </div>
              <div style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                marginBottom: 16,
                letterSpacing: 1,
                color: '#23242a',
              }}>{item.title}</div>
              <div style={{
                color: '#666',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                fontWeight: 400,
                textAlign: 'center',
              }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIStreamingSolutions; 