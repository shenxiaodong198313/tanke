import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../contexts/ModalContext';
import { useNavigate } from 'react-router-dom';

const KuaiFeatures: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { openContactModal } = useModal();
  const navigate = useNavigate();

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

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#ffffff', // 使用浅色背景
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    position: 'relative'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: isMobile ? 'left' : 'left',
    marginBottom: isMobile ? '1.5rem' : '2rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '32px' : '48px',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: isMobile ? '12px' : '16px',
    lineHeight: '1.15',
    letterSpacing: '-0.5px'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '13px' : '14px',
    color: '#0ea5e9',
    fontWeight: 600,
    letterSpacing: '0.5px',
    marginBottom: isMobile ? '8px' : '10px'
  };

  const contentAreaStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    margin: '0 auto',
    padding: isMobile ? '0' : '0',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1.5rem' : '3rem'
  };

  // 左侧文案区
  const leftColStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'stretch' : 'flex-start',
    justifyContent: 'center'
  };

  const descStyle: React.CSSProperties = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#334155',
    lineHeight: 1.8,
    marginTop: isMobile ? '10px' : '12px',
    marginBottom: isMobile ? '18px' : '22px'
  };

  const metricRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '8px' : '12px',
    marginBottom: isMobile ? '12px' : '16px',
    flexWrap: 'wrap'
  };

  const metricBadgeStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : '13px',
    color: '#0f172a',
    background: '#f1f5f9',
    padding: '6px 10px',
    borderRadius: '9999px',
    border: '1px solid #e2e8f0',
    fontWeight: 600
  };

  const badgeRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: isMobile ? '10px' : '12px'
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: isMobile ? '12px' : '13px',
    color: '#475569',
    background: '#f1f5f9',
    padding: '6px 10px',
    borderRadius: '9999px',
    border: '1px solid #e2e8f0',
    fontWeight: 600
  };

  const ctaRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '10px' : '14px',
    marginTop: isMobile ? '4px' : '8px'
  };

  const primaryBtnStyle: React.CSSProperties = {
    padding: isMobile ? '10px 14px' : '12px 18px',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
    color: 'white',
    fontSize: isMobile ? '14px' : '15px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 6px 14px rgba(59, 130, 246, 0.25)'
  };

  const secondaryBtnStyle: React.CSSProperties = {
    padding: isMobile ? '10px 14px' : '12px 18px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    background: '#ffffff',
    color: '#0f172a',
    fontSize: isMobile ? '14px' : '15px',
    fontWeight: 700,
    cursor: 'pointer'
  };

  // 右侧占位卡片
  const rightColStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'flex-start' : 'center'
  };

  const placeholderCardStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '520px',
    minHeight: isMobile ? '220px' : '300px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    boxShadow: '0 10px 24px rgba(15,23,42,0.08)',
    padding: isMobile ? '16px' : '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const chatBubbleStyle: React.CSSProperties = {
    alignSelf: 'flex-start',
    maxWidth: '85%',
    background: '#e0f2fe',
    color: '#0c4a6e',
    padding: '10px 12px',
    borderRadius: '12px',
    border: '1px solid #bae6fd',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
  };

  const chatBubbleRightStyle: React.CSSProperties = {
    alignSelf: 'flex-end',
    maxWidth: '85%',
    background: '#eef2ff',
    color: '#3730a3',
    padding: '10px 12px',
    borderRadius: '12px',
    border: '1px solid #c7d2fe',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 头部：标签 + 标题 */}
        <motion.div 
          style={headerStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* 标签移动到指标行右侧，移除原位置 */}
          <h1 style={titleStyle}>AI Agent，让对话自然流畅，获客行云流水</h1>
          <div style={metricRowStyle}>
            <span style={metricBadgeStyle}>大语言模型技术加持</span>
            <span style={metricBadgeStyle}>AI 赋能营销&服务</span>
            <span style={metricBadgeStyle}>大模型获客机器人</span>
            <span style={metricBadgeStyle}>AI Agent</span>
          </div>
        </motion.div>

        {/* 主体内容：左文案 + 右占位卡片 */}
        <div style={contentAreaStyle}>
          <motion.div 
            style={leftColStyle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={descStyle}>
              一个不知疲倦的"超级销售员"，全天候在线，能同时和成百上千位客户自然流畅地聊天。它不仅能精准理解每位客户的需求和情绪，还能像经验丰富的销售经理一样，灵活追问、随机应变，用最贴心的方式引导客户留下联系方式。
            </div>
            <div style={ctaRowStyle}>
              <button style={primaryBtnStyle} onClick={() => openContactModal()}>预约演示</button>
              {/* 移除免费试用按钮 */}
            </div>
          </motion.div>

          <motion.div 
            style={rightColStyle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={placeholderCardStyle}>
              <div style={{ color: '#0f172a', fontWeight: 700 }}>AI Agent</div>
              <div style={chatBubbleStyle}>您好，我是AI Agent，可以为您介绍产品并解答疑问。</div>
              <div style={chatBubbleRightStyle}>可以先简单介绍下核心功能吗？</div>
              <div style={chatBubbleStyle}>当然可以：支持意图识别、多轮对话、知识库检索、表单留资与外部系统集成。</div>
              <div style={{ alignSelf: 'center', color: '#64748b', fontSize: 12 }}>AI Agent 智能回复中…</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KuaiFeatures;