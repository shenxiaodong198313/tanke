import React from 'react';

const solutions = [
  {
    title: 'AI无人直播',
    desc: '一台手机全自动开播',
    icon: '🤖',
  },
  {
    title: 'AI素材生成',
    desc: 'AI生成直播话术/TTS',
    icon: '⚙️',
  },
  {
    title: 'AI直播互动',
    desc: 'AI自动点赞/回复',
    icon: '💬',
  },
];

const AIStreamingSolutions: React.FC = () => {
  return (
    <section style={{
      background: '#f8f9fa',
      padding: '80px 0',
      color: '#23242a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: 1280,
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
      }}>
         <div style={{
          fontSize: '2.2rem',
          fontWeight: 800,
          marginBottom: '12px',
          letterSpacing: '0.5px',
          color: '#1f2937',
        }}>
          一台手机自动24小时不间断无人直播
        </div>
        <div style={{
          fontSize: '1.1rem',
          color: '#4b5563',
          marginBottom: '48px',
        }}>
          帮您打造低成本常态化、高效率、自动化的无人直播
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginTop: '0',
        }}>
          {solutions.map((item) => (
            <div
              key={item.title}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '14px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.04)'
              }}
            >
              <div
                aria-hidden
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #60a5fa 100%)',
                  color: '#ffffff',
                  fontSize: '36px',
                  boxShadow: '0 10px 25px rgba(124,58,237,0.25)'
                }}
              >
                <span>{item.icon}</span>
              </div>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                margin: 0,
                color: '#111827'
              }}>
                {item.title}
              </h3>
              <div style={{
                color: '#6b7280',
                fontSize: '1rem'
              }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
        
        {/* 图片上方新增标题与副标题（含装饰条） */}
        <div style={{ marginTop: '56px', marginBottom: '8px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '8px'
          }}>
            {/* 左侧装饰条 */}
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 8, height: 20, borderRadius: 6, background: 'linear-gradient(180deg, #3b82f6, #6366f1)' }} />
              <span style={{ width: 8, height: 20, borderRadius: 6, background: 'linear-gradient(180deg, #60a5fa, #3b82f6)' }} />
            </div>

            <h2 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#1f2937',
              margin: 0,
              letterSpacing: '1px'
            }}>
              取代真人主/副播，一台手机即可开启直播
            </h2>

            {/* 右侧装饰条 */}
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 8, height: 20, borderRadius: 6, background: 'linear-gradient(180deg, #60a5fa, #3b82f6)' }} />
              <span style={{ width: 8, height: 20, borderRadius: 6, background: 'linear-gradient(180deg, #3b82f6, #6366f1)' }} />
            </div>
          </div>

          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            margin: 0
          }}>
            在电商、本地生活、企业获客等直播场景均成熟落地
          </p>
        </div>

        {/* 在三个容器下方添加图片 */}
        <div style={{
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src="https://img01.yzcdn.cn/upload_files/2025/05/21/FgQ3I8848jV_1BFTaMnVlbWitMGB.png?imageMogr2/format/webp"
            alt="矩阵式AI智能生态"
            loading="lazy"
            style={{
              width: '100%',
              maxWidth: '1280px',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default AIStreamingSolutions; 