import React from 'react';

const icons: { color: string; icon: string; left: string; top: string; size: number }[] = [];

// 新增：图1的四项功能内容
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

const MarketingToolsShowcase: React.FC = () => {
  return (
    <section style={{
      background: '#f8f9fa', // 浅灰色背景
      padding: '64px 0 0',
      minHeight: '900px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* 新增：放在AI外呼标题之前的功能说明区块（图1） */}
        <div style={{
          margin: '0 auto 32px',
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

        <div style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: 8,
          letterSpacing: '-2px',
          color: '#1f2937',
          display: 'inline-block',
        }}>
          AI外呼
        </div>
        <div style={{
          fontSize: '2rem',
          fontWeight: 600,
          color: '#374151',
          marginBottom: 12,
        }}>
          使用机主的声音自动给客户打电话、加微信、推送产品资料
        </div>
        <div style={{
          fontSize: '1.05rem',
          color: '#6b7280',
          marginBottom: 48,
        }}>
          让手机自动完成重复的外呼工作
        </div>
      </div>
      {/* 漂浮icon */}
      {icons.map((item, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            background: item.color,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: item.size * 0.5,
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            border: '2px solid #ffffff',
            zIndex: 1,
            opacity: 0.95,
          }}
        >
          {item.icon}
        </div>
      ))}
      {/* 手机框占位图 */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        margin: '0 auto',
        marginTop: 0,
        marginBottom: 0,
        width: 320,
        height: 640,
        maxWidth: '90vw',
        boxShadow: '0 8px 48px rgba(0,0,0,0.15)',
        borderRadius: 40,
        background: '#ffffff',
        border: '3px solid #d1d5db',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#9ca3af',
        fontWeight: 500,
      }}>
        手机界面占位图
      </div>
    </section>
  );
};

export default MarketingToolsShowcase;