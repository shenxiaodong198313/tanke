import React, { useState } from 'react';
import SEOHead from '../SEOHead';

const AiCall: React.FC = () => {
  const [audio, setAudio] = useState<{ open: boolean; title: string; url: string }>({ open: false, title: '', url: '' });

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)', // 白色渐变背景
    padding: '64px 24px',
    overflowX: 'hidden',
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    marginBottom: '120px',
  };

  // 移除未使用的样式常量，避免 ESLint 报警

  const featureContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    marginBottom: '100px',
  };

  const featureContentStyle: React.CSSProperties = {
    flex: 1,
  };

  const featureImageStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const phoneFrameStyle: React.CSSProperties = {
    width: '300px',
    height: '600px',
    background: '#000',
    borderRadius: '30px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  };

  const phoneScreenStyle: React.CSSProperties = {
    flex: 1,
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  };

  const statusBarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '12px',
    color: '#333',
  };

  const productGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    marginTop: '20px',
  };

  const productCardStyle: React.CSSProperties = {
    background: 'white',
    borderRadius: '12px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const productImageStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    background: '#f5f5f5',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '8px',
  };

  const productInfoStyle: React.CSSProperties = {
    textAlign: 'center',
    width: '100%',
  };

  const productNameStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#333',
    marginBottom: '4px',
  };

  const productPriceStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#e74c3c',
    fontWeight: '600',
    marginBottom: '8px',
  };

  const addToCartStyle: React.CSSProperties = {
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    padding: '4px 12px',
    fontSize: '10px',
    cursor: 'pointer',
  };

  const bottomNavStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
  };

  const navItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '10px',
    color: '#333',
  };

  const highlightBoxStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
    color: 'white',
    padding: '20px 30px',
    borderRadius: '15px',
    display: 'inline-block',
    marginBottom: '20px',
    fontSize: '1.1rem',
    fontWeight: 600,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#6b7280',
    lineHeight: '1.8',
    marginBottom: '20px',
  };

  const learnMoreStyle: React.CSSProperties = {
    color: '#f39c12',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };

  // 顶部蓝色区：替换副标题为图2内容（标题+三条要点）
  const heroSubTitleStyle: React.CSSProperties = {
    fontSize: '1.4rem',
    color: 'rgba(255,255,255,0.95)',
    marginBottom: '16px',
    lineHeight: 1.6,
  };

  const heroBulletList: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    color: 'rgba(255,255,255,0.9)'
  };

  const heroBulletItem: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '6px',
    fontSize: '1rem',
    lineHeight: 1.8,
    justifyContent: 'center'
  };

  const heroBulletIcon: React.CSSProperties = {
    color: '#c7d2fe',
    fontSize: '1rem',
    marginTop: '4px'
  };

  const statsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    marginTop: '60px',
  };

  const statCardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    padding: '40px 30px',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#f39c12',
    marginBottom: '10px',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#6b7280',
    fontWeight: 500,
  };

  // 顶部 KPI 样式（对应图2）
  const kpiSectionStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '80px',
  };

  const kpiTitleStyle: React.CSSProperties = {
    fontSize: '2.6rem',
    fontWeight: 800,
    color: '#0f172a',
    letterSpacing: '1px',
    marginBottom: '40px',
  };

  const kpiGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
    gap: '28px',
    alignItems: 'start',
    margin: '0 auto 32px',
  };

  const kpiItemStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const kpiNumberStyle: React.CSSProperties = {
    fontSize: '2.4rem',
    fontWeight: 800,
    color: '#b91c1c', // 深红色，贴近设计
    marginBottom: '8px',
  };

  const kpiDescStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#475569',
    whiteSpace: 'pre-line',
  };

  const kpiButtonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: '9999px',
    background: '#c0392b',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 700,
    boxShadow: '0 10px 20px rgba(192, 57, 43, 0.25)'
  };

  // 场景案例卡片（替换图1为图2）
  const showcaseWrapperStyle: React.CSSProperties = {
    background: 'linear-gradient(180deg, #f5f9ff 0%, #f7fbff 100%)',
    borderRadius: 20,
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
    padding: 24,
    marginBottom: 100,
  };
  const showcaseHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontWeight: 800,
    fontSize: '1.25rem',
    color: '#0f172a',
    marginBottom: 16,
  };
  const showcaseGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16,
  };
  const showcaseCardStyle: React.CSSProperties = {
    background: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 6px 16px rgba(0,0,0,0.06)'
  };
  const showcaseImageStyle: React.CSSProperties = {
    height: 120,
    background: 'linear-gradient(135deg, #c7d2fe 0%, #e9d5ff 100%)',
    position: 'relative',
  };
  const showcaseTitleOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: '10px 12px',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1rem',
    background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))',
  };
  const showcaseBodyStyle: React.CSSProperties = {
    padding: '12px 12px 8px 12px',
    color: '#475569',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    minHeight: 120,
  };
  const playLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: '#2563eb',
    fontWeight: 700,
    cursor: 'pointer',
    padding: '0 12px 12px',
  };
  const showcaseMoreBtnStyle: React.CSSProperties = {
    display: 'block',
    margin: '20px auto 0',
    padding: '12px 28px',
    borderRadius: 9999,
    background: 'linear-gradient(135deg, #60a5fa 0%, #7c3aed 100%)',
    color: '#fff',
    border: 'none',
    fontWeight: 800,
    cursor: 'pointer',
    boxShadow: '0 12px 24px rgba(99,102,241,0.25)'
  };

  // 升级模块（DeepSeek/通义）
  const upgradeContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    marginBottom: '120px',
  };

  const upgradeRightStyle: React.CSSProperties = {
    flex: 1,
  };

  const upgradeTitleStyle: React.CSSProperties = {
    fontSize: '2.4rem',
    fontWeight: 800,
    color: '#111827',
    margin: 0,
    lineHeight: 1.3,
  };

  const upgradeSubTitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#6b7280',
    marginTop: '12px',
    marginBottom: '28px',
  };

  const pillRowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    maxWidth: 420,
    marginBottom: '22px',
  };

  const pillStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 22px',
    background: 'white',
    borderRadius: '9999px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
    border: '1px solid #edf2f7',
    fontSize: '1.1rem',
    color: '#111827',
    width: 'fit-content',
  };

  const contactBtnStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: '9999px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #60a5fa 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.05rem',
    fontWeight: 700,
    boxShadow: '0 12px 24px rgba(99, 102, 241, 0.35)'
  };

  // 试听弹窗
  const audioModalOverlay: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  } as React.CSSProperties;
  const audioModalContent: React.CSSProperties = {
    background: '#fff',
    borderRadius: 12,
    width: 520,
    maxWidth: '92vw',
    boxShadow: '0 16px 40px rgba(15, 23, 42, 0.16)',
    padding: 20,
  };
  const audioModalHeader: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    fontWeight: 700,
    color: '#0f172a',
  };
  const audioCloseBtn: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    fontSize: 22,
    color: '#64748b',
    cursor: 'pointer',
  };

  // 对比区（AI vs 人工）
  const compareGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gap: '28px',
    alignItems: 'stretch',
    position: 'relative',
    minHeight: 360,
  };
  const comparePanelBase: React.CSSProperties = {
    borderRadius: 22,
    padding: '28px 24px',
    boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 14,
  };
  const comparePanelLeft: React.CSSProperties = {
    ...comparePanelBase,
    background: 'linear-gradient(180deg, #fff7bf 0%, #fde68a 100%)',
  };
  const comparePanelRight: React.CSSProperties = {
    ...comparePanelBase,
    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
  };
  const compareTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 800,
    margin: 0,
    color: '#0f172a',
  };
  const compareListItem: React.CSSProperties = {
    fontSize: '1.05rem',
    color: '#334155',
    lineHeight: 1.85,
  };
  const compareCenterCol: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  };
  const compareBadge: React.CSSProperties = {
    padding: '8px 14px',
    borderRadius: 9999,
    background: '#e2e8f0',
    color: '#0f172a',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  };
  const vsCircleStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: '#f1f5f9',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    color: '#0f172a',
    letterSpacing: 1,
  };

  return (
    <>
      <SEOHead
        title="AI外呼 - 探客AI手机"
        description="探客AI手机AI外呼模块，智能电话营销，自动化客户触达，提升销售效率。"
        keywords="AI外呼, 电话营销, 智能外呼, 自动化销售, 探客AI手机"
        ogTitle="AI外呼 - 探客AI手机"
        ogDescription="探客AI手机AI外呼模块，智能电话营销，自动化客户触达，提升销售效率。"
      />
      <div style={containerStyle}>
        {/* 蓝色背景的标题区域 */}
        <div style={{
          width: '100vw',
          minHeight: '400px',
          background: 'linear-gradient(135deg, #2574e8 0%, #1e40af 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '64px',
          marginLeft: 'calc(-50vw + 50%)',
        }}>
          <div style={{textAlign: 'center', maxWidth: '800px', padding: '0 24px'}}>
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '32px',
              marginTop: '0',
              textAlign: 'center',
              letterSpacing: '2px',
              whiteSpace: 'nowrap',
            }}>AI外呼助手</h1>
            <h2 style={heroSubTitleStyle}>智能电话营销，自动化客户触达，提升销售效率</h2>
            <ul style={heroBulletList}>
              <li style={heroBulletItem}><span style={heroBulletIcon}>✔</span><span>融合自研大模型、ASR、NLP、TTS 等能力，打造智能外呼系统</span></li>
              <li style={heroBulletItem}><span style={heroBulletIcon}>✔</span><span>多轮语音对话，精准识别与自然交互，显著提升转化体验</span></li>
              <li style={heroBulletItem}><span style={heroBulletIcon}>✔</span><span>替代传统外呼流程，降本增效，提升客户满意度</span></li>
            </ul>
          </div>
        </div>
        
        <div style={sectionStyle}>
          {/* 图2：领先的技术实力与行业经验（新加在图1上方） */}
          <div style={kpiSectionStyle}>
            <h2 style={kpiTitleStyle}>领先的技术实力，丰富的行业经验</h2>
            <div style={kpiGridStyle}>
              <div style={kpiItemStyle}>
                <div style={kpiNumberStyle}>7.5亿+</div>
                <div style={kpiDescStyle}>{`累计稳定外呼\n通话数量`}</div>
              </div>
              <div style={kpiItemStyle}>
                <div style={kpiNumberStyle}>100万+小时</div>
                <div style={kpiDescStyle}>{`可在短时间内\n拥有工作经验`}</div>
              </div>
              <div style={kpiItemStyle}>
                <div style={kpiNumberStyle}>97%</div>
                <div style={kpiDescStyle}>{`16K实验室场景机器人\n识别准确率`}</div>
              </div>
              <div style={kpiItemStyle}>
                <div style={kpiNumberStyle}>28+</div>
                <div style={kpiDescStyle}>{`覆盖省市地区`}</div>
              </div>
              <div style={kpiItemStyle}>
                <div style={kpiNumberStyle}>5000+</div>
                <div style={kpiDescStyle}>{`服务客户数量`}</div>
              </div>
              <div style={kpiItemStyle}>
                <div style={kpiNumberStyle}>20+</div>
                <div style={kpiDescStyle}>{`累计申请专利数量`}</div>
              </div>
            </div>
            <button style={kpiButtonStyle} onClick={() => console.log('免费试用')}>免费试用 →</button>
          </div>
          
          {/* 第一屏：AI外呼新升级（替换模块） */}
          <div style={upgradeContainerStyle}>
            {/* 左侧：手机占位图 */}
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div
                  style={{
                    ...phoneScreenStyle,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #eef2ff 0%, #e2e8f0 100%)',
                  }}
                >
                  <div
                    style={{
                      width: '70%',
                      height: '60%',
                      borderRadius: 16,
                      background: 'linear-gradient(135deg, #93c5fd 0%, #a78bfa 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '32px',
                      boxShadow: '0 12px 24px rgba(99,102,241,0.25)',
                    }}
                  >
                    📱
                  </div>
                </div>
              </div>
            </div>
            {/* 右侧：标题 + 徽标 + CTA */}
            <div style={upgradeRightStyle}>
              <h2 style={upgradeTitleStyle}>AI外呼新升级，对接部署DeepSeek/阿里通义</h2>
              <p style={upgradeSubTitleStyle}>大模型话术与外呼深度融合赋能，让AI对话更智能</p>
              <div style={pillRowStyle}>
                <div style={pillStyle}>
                  <span style={{ fontSize: '1.4rem' }}>🐳</span> deepseek
                </div>
                <div style={pillStyle}>
                  <span style={{ fontSize: '1.4rem' }}>✴️</span> 通义千问
                </div>
              </div>
              <button style={contactBtnStyle} onClick={() => (window.location.href = '/contact')}>
                详情联系客服 →
              </button>
            </div>
          </div>

          {/* 第二屏：智能外呼 */}
          <div style={{ marginTop: 24 }}>
            <div style={showcaseWrapperStyle}>
              <div style={showcaseHeaderStyle}>
                <span style={{ width: 28, height: 28, borderRadius: 9999, background: '#e2e8f0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>🔊</span>
                媲美真人智能语音交互
              </div>
              <div style={showcaseGridStyle}>
                <div style={showcaseCardStyle}>
                  <div style={showcaseImageStyle}>
                    <div style={showcaseTitleOverlayStyle}>电商订单加粉</div>
                  </div>
                  <div style={showcaseBodyStyle}>
                    客户支付后AI即时外呼，通知“添加企业微信领取随机小样”，自动推送加微链接。加粉率提升至35%，首单复购率+28%。
                  </div>
                  <div style={playLinkStyle} onClick={() => setAudio({ open: true, title: '电商订单加粉', url: '/audios/ecommerce.mp3' })}>▶ 点击播放</div>
                </div>
                <div style={showcaseCardStyle}>
                  <div style={showcaseImageStyle}>
                    <div style={showcaseTitleOverlayStyle}>沉睡会员激活</div>
                  </div>
                  <div style={showcaseBodyStyle}>
                    AI批量外呼沉睡会员，限时福利引导加微，情绪识别弱化骚扰感。加粉率28%，30天内唤醒消耗率+22%。
                  </div>
                  <div style={playLinkStyle} onClick={() => setAudio({ open: true, title: '沉睡会员激活', url: '/audios/sleeping_member.mp3' })}>▶ 点击播放</div>
                </div>
                <div style={showcaseCardStyle}>
                  <div style={showcaseImageStyle}>
                    <div style={showcaseTitleOverlayStyle}>生鲜签收提醒</div>
                  </div>
                  <div style={showcaseBodyStyle}>
                    物流出发前1小时外呼提醒签收，同时推送“加微领取鲜货技巧+优惠券”。签收时效缩短40%，加粉率+32%。
                  </div>
                  <div style={playLinkStyle} onClick={() => setAudio({ open: true, title: '生鲜签收提醒', url: '/audios/fresh_reminder.mp3' })}>▶ 点击播放</div>
                </div>
                <div style={showcaseCardStyle}>
                  <div style={showcaseImageStyle}>
                    <div style={showcaseTitleOverlayStyle}>新人礼包领取</div>
                  </div>
                  <div style={showcaseBodyStyle}>
                    新会员入会48小时内外呼，强调“限时新人礼包”，自动推送企微名片。礼包领取率提升至65%，首单转化率+45%。
                  </div>
                  <div style={playLinkStyle} onClick={() => setAudio({ open: true, title: '新人礼包领取', url: '/audios/new_user_gift.mp3' })}>▶ 点击播放</div>
                </div>
              </div>
              <button style={showcaseMoreBtnStyle} onClick={() => console.log('更多场景案例试听')}>更多场景案例试听</button>
            </div>
          </div>
          {/* 音频试听弹窗 */}
          {audio.open && (
            <div style={audioModalOverlay} onClick={() => setAudio(prev => ({ ...prev, open: false }))}>
              <div style={audioModalContent} onClick={(e) => e.stopPropagation()}>
                <div style={audioModalHeader}>
                  <span>试听音频</span>
                  <button style={audioCloseBtn} onClick={() => setAudio(prev => ({ ...prev, open: false }))}>×</button>
                </div>
                <div style={{ color: '#64748b', marginBottom: 10 }}>{audio.title}</div>
                <audio src={audio.url} controls style={{ width: '100%' }} autoPlay />
              </div>
            </div>
          )}

          {/* 第四屏：AI vs 人工 对比 */}
          <div style={{ marginTop: 40 }}>
            <div style={compareGridStyle}>
              <div style={comparePanelLeft}>
                <h3 style={compareTitleStyle}>AI 智能外呼</h3>
                <div style={compareListItem}>200-300通</div>
                <div style={compareListItem}>250天（节假日休息）</div>
                <div style={compareListItem}>300通 × 250天 = 75000</div>
                <div style={compareListItem}>情绪化 20%时间热情</div>
                <div style={compareListItem}>30天</div>
                <div style={compareListItem}>内容缺失 记录耗时主观影响</div>
                <div style={compareListItem}>易撞单 跟进难 伴随投诉风险</div>
                <div style={compareListItem}>工资+场地+社保+提成+休假</div>
              </div>
              <div style={compareCenterCol}>
                <div style={compareBadge}>日拨打量</div>
                <div style={compareBadge}>年工作天数</div>
                <div style={compareBadge}>日拨打量</div>
                <div style={compareBadge}>工作态度</div>
                <div style={compareBadge}>业务培训</div>
                <div style={compareBadge}>数据统计</div>
                <div style={compareBadge}>客户跟进</div>
                <div style={compareBadge}>运营成本</div>
              </div>
              <div style={comparePanelRight}>
                <h3 style={compareTitleStyle}>人工</h3>
                <div style={compareListItem}>800-1000通</div>
                <div style={compareListItem}>365天（无休）</div>
                <div style={compareListItem}>100通 × 365天 = 365000</div>
                <div style={compareListItem}>永远100%的热情</div>
                <div style={compareListItem}>1天</div>
                <div style={compareListItem}>内容全面 记录高效系统客观</div>
                <div style={compareListItem}>话术规范 分类标准 跟进及时</div>
                <div style={compareListItem}>机器人费用 低于人工成本</div>
              </div>
              <div style={vsCircleStyle}>VS</div>
            </div>
          </div>

          {/* 第五屏：成功案例统计 */}
          <div style={{textAlign: 'center', marginTop: '100px'}}>
            <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#1f2937', marginBottom: '20px'}}>
              外呼成功案例
            </h2>
            <p style={{fontSize: '1.2rem', color: '#6b7280', marginBottom: '60px'}}>
              提升销售效率的最佳选择
            </p>
            <div style={statsContainerStyle}>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>80%</div>
                <div style={statLabelStyle}>接通率提升</div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>3倍</div>
                <div style={statLabelStyle}>转化效率</div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>24小时</div>
                <div style={statLabelStyle}>全天候服务</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCall;