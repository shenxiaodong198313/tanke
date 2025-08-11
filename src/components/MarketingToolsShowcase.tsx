import React from 'react';

const icons = [
  { color: '#fef3c7', icon: '💬', left: '12%', top: '45%', size: 56 },
  { color: '#dbeafe', icon: '🏬', left: '15%', top: '25%', size: 48 },
  { color: '#fed7aa', icon: '📝', left: '25%', top: '70%', size: 52 },
  { color: '#dbeafe', icon: '📷', left: '75%', top: '65%', size: 50 },
  { color: '#dcfce7', icon: '🎯', left: '78%', top: '80%', size: 54 },
  { color: '#fef3c7', icon: '👤', left: '85%', top: '45%', size: 58 },
  { color: '#dbeafe', icon: '📄', left: '82%', top: '25%', size: 46 },
  { color: '#dcfce7', icon: '🔍', left: '8%', top: '20%', size: 50 },
  { color: '#fed7aa', icon: '🛒', left: '70%', top: '15%', size: 52 },
  { color: '#dbeafe', icon: '⭐', left: '35%', top: '12%', size: 48 },
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