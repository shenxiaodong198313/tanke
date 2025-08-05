import React, { useState } from 'react';
import { useModal } from '../contexts/ModalContext';

const KuaiDetails: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { openContactModal } = useModal();

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

  // 12个功能模块，每个都有独特的渐变色系（删除了最后4个）
  const featureModules = [
    { 
      icon: "📱", 
      title: "应用多开", 
      description: "微信抖音多开，快捷高效办公",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      bgColor: "#f0f2ff"
    },
    { 
      icon: "🎯", 
      title: "智能拓客", 
      description: "多维画像精准拓客，高效获客",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bgColor: "#fff0f2"
    },
    { 
      icon: "🎬", 
      title: "视频矩阵获客", 
      description: "AI生成热门视频，一键转发吸粉",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      bgColor: "#f0fbff"
    },
    { 
      icon: "🗂️", 
      title: "矩阵账号管理", 
      description: "多账号统一管理，批量发布内容",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      bgColor: "#f0fff8"
    },
    
    { 
      icon: "🚀", 
      title: "自动化运营", 
      description: "自动加好友点赞，视频引流增长",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      bgColor: "#fff8f0"
    },
    { 
      icon: "🤖", 
      title: "AI数字人", 
      description: "24小时AI数字人，自动直播运营",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      bgColor: "#f8ffff"
    },
    { 
      icon: "📈", 
      title: "智能私域运营", 
      description: "自动监控回复，跟进转化客户",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      bgColor: "#fffcf0"
    },
    { 
      icon: "💬", 
      title: "AI智能对话", 
      description: "高情商AI实时对话，提升效率",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      bgColor: "#fff0f8"
    },
    
    { 
      icon: "✍️", 
      title: "AI评论回复", 
      description: "智能分析评论内容，自动回复",
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      bgColor: "#f8f0ff"
    },
    { 
      icon: "➕", 
      title: "AI引导加粉", 
      description: "智能引导粉丝加好友，提升私域转化",
      gradient: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
      bgColor: "#fff8fc"
    },
    { 
      icon: "💡", 
      title: "AI推荐产品", 
      description: "分析最佳销售时机，智能推荐产品",
      gradient: "linear-gradient(135deg, #ffeeff 0%, #d9b3ff 100%)",
      bgColor: "#fcf8ff"
    },
    { 
      icon: "🔍", 
      title: "大数据拓客", 
      description: "提供丰富拓客工具，精准获客",
      gradient: "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)",
      bgColor: "#f0f8ff"
    }
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? 'auto' : '100vh',
    padding: isMobile ? '8rem 1rem 6rem' : '8rem 2rem 6rem',
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '16px' : '20px',
    marginBottom: '3rem'
  };

  const getCardStyle = (index: number, bgColor: string): React.CSSProperties => ({
    backgroundColor: bgColor,
    borderRadius: '8px', // 更小的圆角
    padding: isMobile ? '1.2rem' : '1.5rem',
    textAlign: 'left',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s ease',
    position: 'relative',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)', // 更淡的投影
    minHeight: isMobile ? '100px' : '120px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: isMobile ? '12px' : '16px',
    cursor: 'pointer',
    overflow: 'hidden'
  });

  const getIconStyle = (gradient: string): React.CSSProperties => ({
    width: isMobile ? '48px' : '56px', // 更大的图标
    height: isMobile ? '48px' : '56px',
    background: gradient,
    borderRadius: '12px', // 圆角图标背景
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '1.5rem' : '1.8rem', // 更大的emoji
    flexShrink: 0,
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  });

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1e293b',
    lineHeight: '1.3'
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.8rem' : '0.85rem',
    lineHeight: '1.4',
    color: '#64748b',
    margin: 0
  };

  const getOverlayStyle = (isVisible: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(4px)',
    borderRadius: '8px'
  });

  const consultButtonStyle: React.CSSProperties = {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: isMobile ? '8px 20px' : '10px 24px',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: isMobile ? '12px 32px' : '14px 40px',
    fontSize: isMobile ? '1rem' : '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 功能网格 */}
        <div style={gridContainerStyle}>
          {featureModules.map((module, index) => (
            <div
              key={index}
              style={getCardStyle(index, module.bgColor)}
              onMouseEnter={() => {
                if (!isMobile) {
                  setHoveredIndex(index);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setHoveredIndex(null);
                }
              }}
            >
              <div style={getIconStyle(module.gradient)}>
                {module.icon}
              </div>
              <div style={textContainerStyle}>
                <h3 style={cardTitleStyle}>{module.title}</h3>
                <p style={cardDescStyle}>{module.description}</p>
              </div>
              
              {/* 悬浮覆盖层 */}
              <div style={getOverlayStyle(hoveredIndex === index)}>
                <button 
                  style={consultButtonStyle}
                  onClick={() => openContactModal()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#3b82f6';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  立即咨询
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KuaiDetails; 