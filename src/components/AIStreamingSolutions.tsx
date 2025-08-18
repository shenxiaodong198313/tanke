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

// 新增：图1的四项功能内容（用于插入到红框位置）
const highlightItems = [
  {
    icon: '🎥',
    title: '复刻直播间',
    desc:
      '无需真人模特、无需绿幕脚本提示词。基于往期直播视频即可生成7x24小时在线、可主动交互的数字人主播。',
  },
  {
    icon: '🤖',
    title: '多模态大模型智能运营',
    desc:
      '按交易额、互动次数等维度智能选品，可自动拆分多段视频并智能提取特写镜头，直播间运营效率最高提升7倍。',
  },
  {
    icon: '💬',
    title: '智能问答/互动切品',
    desc:
      '根据评论区提问留言，自动切换讲解商品并控场。支持语音、弹幕等多种方式互动，有问必答，有效带动成交。',
  },
  {
    icon: '🎬',
    title: '高效便捷，打造视频专业质感',
    desc:
      '摆脱专业设备/场地限制，输入文字或上传录音，仅需数分钟即可合成高质量数字人视频。',
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
      minHeight: '100vh',
      boxSizing: 'border-box',
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

        {/* 新增：把图1四项功能插入到红框位置（紧跟三张卡片之后） */}
        <div style={{
          margin: '28px auto 16px',
          padding: '0 16px',
          maxWidth: 1100,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 40,
          textAlign: 'left',
        }}>
          {highlightItems.map((item) => (
            <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div
                aria-hidden
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  border: '2px solid #ef4444',
                  color: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                  background: '#fff',
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: '#6b7280' }}>{item.desc}</div>
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