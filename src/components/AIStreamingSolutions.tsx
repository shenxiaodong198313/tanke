import React from 'react';

const solutions = [
  {
    title: '回放即克隆',
    mainText: '3-40min',
    subText: ['直播回放片段', '一键克隆声形'],
    buttonText: '便捷迅速',
    bgColor: '#f3f4ff',
    textColor: '#6d28d9',
    buttonColor: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
    mainTextColor: '#4f46e5',
  },
  {
    title: '拟真度升级',
    mainText: '业内领先唇动生成技术',
    subText: ['支持360°', '大角度侧转'],
    buttonText: '自由录制',
    bgColor: '#f5f3ff',
    textColor: '#7e2d86',
    buttonColor: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
    mainTextColor: '#9333ea',
  },
  {
    title: '短阵规模化',
    mainText: '单次上传 多次开播',
    subText: ['轻松打造数字人直播矩阵'],
    buttonText: '高效开播',
    bgColor: '#f0fdfa',
    textColor: '#047857',
    buttonColor: 'linear-gradient(135deg, #6ee7b7 0%, #2dd4bf 100%)',
    mainTextColor: '#10b981',
  },
];

const AIStreamingSolutions: React.FC = () => {
  return (
    <section style={{
      background: '#f8f9fa', // 浅灰色背景
      padding: '100px 0',
      color: '#23242a',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: 1100,
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
      }}>
         <div style={{
          fontSize: '2.8rem',
          fontWeight: 800,
          marginBottom: '18px',
          letterSpacing: '0.5px',
          color: '#1f2937',
        }}>
          录屏直播、实景直播、融合画中画直播
        </div>
        <div style={{
          fontSize: '1.25rem',
          color: '#4b5563',
          marginBottom: '64px',
        }}>
          轻松打造AI自动化直播矩阵，高效开播，自由开播。
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginTop: '0',
        }}>
          {solutions.map((item) => (
            <div key={item.title} style={{
              background: item.bgColor,
              borderRadius: '24px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              height: '380px',
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: item.textColor,
                  marginBottom: '24px',
                }}>{item.title}</h3>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: item.mainTextColor,
                  marginBottom: '16px',
                  minHeight: '60px',
                }}>
                  {item.mainText}
                </div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}>
                  {item.subText.map(line => <p key={line} style={{margin: 0}}>{line}</p>)}
                </div>
              </div>
              <button style={{
                background: item.buttonColor,
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '16px',
                width: '100%',
                fontSize: '1.2rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 15px ${item.mainTextColor}40`,
              }}>
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIStreamingSolutions; 