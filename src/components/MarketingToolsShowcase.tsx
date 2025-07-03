import React from 'react';

const icons = [
  { color: 'linear-gradient(135deg, #ffd6b7 0%, #ffb98a 100%)', icon: '💬', left: '8%', top: '60%' },
  { color: 'linear-gradient(135deg, #b7d3ff 0%, #8abaff 100%)', icon: '🏬', left: '18%', top: '30%' },
  { color: 'linear-gradient(135deg, #ffb98a 0%, #ff7e5f 100%)', icon: '📝', left: '30%', top: '80%' },
  { color: 'linear-gradient(135deg, #b7d3ff 0%, #8abaff 100%)', icon: '📷', left: '70%', top: '75%' },
  { color: 'linear-gradient(135deg, #b7f7d3 0%, #8affb9 100%)', icon: '🎯', left: '60%', top: '90%' },
  { color: 'linear-gradient(135deg, #ffd6b7 0%, #ffb98a 100%)', icon: '👤', left: '85%', top: '60%' },
  { color: 'linear-gradient(135deg, #b7d3ff 0%, #8abaff 100%)', icon: '📄', left: '80%', top: '30%' },
  { color: 'linear-gradient(135deg, #b7f7d3 0%, #8affb9 100%)', icon: '🔍', left: '10%', top: '20%' },
  { color: 'linear-gradient(135deg, #ffd6b7 0%, #ffb98a 100%)', icon: '🛒', left: '60%', top: '10%' },
  { color: 'linear-gradient(135deg, #b7d3ff 0%, #8abaff 100%)', icon: '⭐', left: '40%', top: '10%' },
];

const MarketingToolsShowcase: React.FC = () => {
  return (
    <section style={{
      background: '#fff',
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
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#ff6b1b',
          marginBottom: 8,
          letterSpacing: 1,
        }}>
          大模型营销工具
        </div>
        <div style={{
          fontSize: '2rem',
          fontWeight: 600,
          color: '#23242a',
          marginBottom: 12,
        }}>
          内置多款营销工具，满足不同营销需求
        </div>
        <div style={{
          fontSize: '1.05rem',
          color: '#666',
          marginBottom: 48,
        }}>
          高效热门营销工具，包含企业筛选、短视频爆款、短视频找门店、基开客户、精准查找各个行业下细分领域客户
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
            width: 64,
            height: 64,
            background: item.color,
            borderRadius: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 32,
            boxShadow: '0 4px 24px rgba(255, 153, 51, 0.08)',
            zIndex: 1,
            opacity: 0.85,
            filter: 'blur(0.5px)',
          }}
        >
          {item.icon}
        </div>
      ))}
      {/* 手机图片 */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        margin: '0 auto',
        marginTop: 0,
        marginBottom: 0,
        width: 420,
        maxWidth: '90vw',
        boxShadow: '0 8px 48px rgba(0,0,0,0.10)',
        borderRadius: 40,
        overflow: 'hidden',
        background: '#fff',
      }}>
        <img
          src="https://files.cdn.bcebos.com/tanke/marketing-tools-phone-demo.png"
          alt="营销工具手机界面"
          style={{ width: '100%', display: 'block', borderRadius: 40 }}
        />
      </div>
    </section>
  );
};

export default MarketingToolsShowcase; 