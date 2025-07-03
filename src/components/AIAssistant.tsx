import React from 'react';
import { motion } from 'framer-motion';

const AIAssistant: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

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
    background: 'linear-gradient(135deg, #f0f8ff 0%, #e8f4fd 50%, #fff0f8 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '2rem 1rem' : '2rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1800px',
    width: '100%',
    height: isMobile ? 'auto' : '90vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // PC屏幕样式 - 左侧，与手机挨着
  const computerScreenStyle: React.CSSProperties = {
    position: 'absolute',
    left: isMobile ? '10px' : '150px',
    top: isMobile ? '20px' : '80px',
    width: isMobile ? '320px' : '600px',
    height: isMobile ? '240px' : '450px',
    backgroundColor: '#2a2a2a',
    borderRadius: '20px',
    padding: '12px',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
    zIndex: 10
  };

  const computerContentStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '12px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex'
  };

  // PC左侧导航栏样式
  const sidebarStyle: React.CSSProperties = {
    width: isMobile ? '50px' : '70px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px 0 0 12px',
    padding: isMobile ? '8px' : '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '6px' : '8px'
  };

  const sidebarItemStyle: React.CSSProperties = {
    width: '100%',
    height: isMobile ? '30px' : '35px',
    backgroundColor: '#e9ecef',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '0.7rem' : '0.8rem',
    color: '#666'
  };

  // PC主内容区域样式
  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    padding: isMobile ? '12px' : '18px',
    display: 'flex',
    flexDirection: 'column'
  };

  // 手机屏幕样式 - 右侧紧挨PC，比PC高
  const phoneScreenStyle: React.CSSProperties = {
    position: 'absolute',
    right: isMobile ? '10px' : '120px',
    top: isMobile ? '80px' : '30px',
    width: isMobile ? '200px' : '320px',
    height: isMobile ? '400px' : '650px',
    backgroundColor: '#1a1a1a',
    borderRadius: '45px',
    padding: '12px',
    boxShadow: '0 30px 100px rgba(0, 0, 0, 0.4)',
    zIndex: 10
  };

  const phoneContentStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '35px',
    position: 'relative',
    overflow: 'hidden'
  };

  // AI人物图片样式 - 中间更大
  const aiCharactersStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '50%' : '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 15,
    width: isMobile ? '350px' : '600px',
    height: isMobile ? '230px' : '400px'
  };

  const aiImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))'
  };

  // 底部功能标签样式 - 圆形
  const functionsContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: isMobile ? '30px' : '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: isMobile ? '20px' : '40px',
    justifyContent: 'center',
    zIndex: 20
  };

  const functionCircleStyle: React.CSSProperties = {
    width: isMobile ? '80px' : '120px',
    height: isMobile ? '80px' : '120px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '4px' : '6px',
    fontSize: isMobile ? '0.7rem' : '0.9rem',
    color: '#666',
    fontWeight: '500',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  };

  // PC底部白色容器样式
  const dockContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    right: '15px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: isMobile ? '8px' : '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  };

  const dockStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: isMobile ? '4px' : '6px',
    width: '100%'
  };

  const appIconStyle: React.CSSProperties = {
    width: isMobile ? '20px' : '28px',
    height: isMobile ? '20px' : '28px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '0.5rem' : '0.7rem',
    color: 'white',
    fontWeight: 'bold'
  };

  const functions = [
    { icon: '🎯', name: '营销专家\n智能体' },
    { icon: '🛵', name: '全渠道\n外卖托管' },
    { icon: '📱', name: '小红书\n内容托管' },
    { icon: '📊', name: '经营报表\n智能体' }
  ];

  // 社交媒体应用图标数据
  const socialApps = [
    { name: '微', color: '#1AAD19' },
    { name: '抖', color: '#000' },
    { name: '小', color: '#FF6B6B' },
    { name: '美', color: '#FF6B47' },
    { name: '饿', color: '#3190E8' },
    { name: '滴', color: '#FF6600' },
    { name: '淘', color: '#FF4D00' },
    { name: '京', color: '#E1251B' },
    { name: '拼', color: '#E02020' },
    { name: '快', color: '#FF6600' }
  ];

  // 侧边栏菜单项
  const sidebarItems = ['工', '消', '订', '商', '客', '数', '营', '设'];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* PC屏幕 - 左侧，与手机挨着 */}
        <motion.div
          style={computerScreenStyle}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div style={computerContentStyle}>
            {/* 左侧导航栏 */}
            <div style={sidebarStyle}>
              {sidebarItems.map((item, index) => (
                <div key={index} style={{
                  ...sidebarItemStyle,
                  backgroundColor: index === 6 ? '#007aff' : '#e9ecef',
                  color: index === 6 ? 'white' : '#666'
                }}>
                  {item}
                </div>
              ))}
            </div>

            {/* 主内容区域 */}
            <div style={mainContentStyle}>
              {/* PC界面头部 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: isMobile ? '12px' : '18px',
                paddingBottom: '12px',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ff5f56',
                  marginRight: '8px'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ffbd2e',
                  marginRight: '8px'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#27ca3f'
                }} />
                <span style={{
                  marginLeft: '16px',
                  fontSize: isMobile ? '0.8rem' : '1rem',
                  color: '#666',
                  fontWeight: '500'
                }}>
                  智能营销台
                </span>
              </div>

              {/* PC工作台内容 */}
              <div style={{ fontSize: isMobile ? '0.8rem' : '1rem', color: '#333', flex: 1 }}>
                <div style={{ marginBottom: '16px', fontWeight: '600' }}>早上好 👋</div>
                <div style={{ marginBottom: '20px', color: '#666' }}>
                  看看今晚的工作成果，在过去的 <strong>51天</strong>
                </div>
                
                {/* 数据展示区 */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: isMobile ? '16px' : '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#ff6b47', fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 'bold' }}>6266元</div>
                    <div style={{ fontSize: isMobile ? '0.7rem' : '0.9rem', color: '#999' }}>销售额</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#ff69b4', fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 'bold' }}>96人/天</div>
                    <div style={{ fontSize: isMobile ? '0.7rem' : '0.9rem', color: '#999' }}>新增用户</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#ffd700', fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 'bold' }}>6次</div>
                    <div style={{ fontSize: isMobile ? '0.7rem' : '0.9rem', color: '#999' }}>完成</div>
                  </div>
                </div>

                {/* 智能托管区域 */}
                <div style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  padding: isMobile ? '12px' : '16px',
                  flex: 1,
                  position: 'relative'
                }}>
                  <div style={{ fontSize: isMobile ? '0.8rem' : '1rem', fontWeight: '600', marginBottom: '8px' }}>智能托管</div>
                  <div style={{ fontSize: isMobile ? '0.7rem' : '0.9rem', color: '#666', lineHeight: '1.4' }}>
                    全渠道自动托管，各平台智能优化及数据统计！
                    <span style={{ color: '#3b82f6', cursor: 'pointer' }}> 编辑来</span>
                  </div>
                  
                  {/* PC底部白色容器包裹的图标 */}
                  <div style={dockContainerStyle}>
                    <div style={dockStyle}>
                      {socialApps.map((app, i) => (
                        <div key={i} style={{
                          ...appIconStyle,
                          backgroundColor: app.color
                        }}>
                          {app.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 手机屏幕 - 右侧紧挨PC，比PC高 */}
        <motion.div
          style={phoneScreenStyle}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div style={phoneContentStyle}>
            {/* 手机状态栏 */}
            <div style={{
              height: '35px',
              backgroundColor: '#f8f9fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px',
              fontSize: isMobile ? '0.7rem' : '0.9rem',
              fontWeight: '600'
            }}>
              <span>9:41</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span>●●●</span>
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* 聊天界面 */}
            <div style={{ padding: isMobile ? '12px' : '20px', height: 'calc(100% - 35px)' }}>
              <div style={{
                textAlign: 'center',
                fontSize: isMobile ? '0.9rem' : '1.2rem',
                fontWeight: '600',
                marginBottom: '18px',
                color: '#333'
              }}>
                助手 智能体
              </div>

              {/* 对话内容 */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{
                  backgroundColor: '#f0f0f0',
                  borderRadius: '16px',
                  padding: isMobile ? '12px' : '18px',
                  marginBottom: '12px',
                  fontSize: isMobile ? '0.8rem' : '1rem',
                  lineHeight: '1.5'
                }}>
                  你好 👋
                  <br />
                  我是智能助手，我可以为您提供功能介绍，搭建客户/订单/商品、分析店铺经营情况，提供营销建议。
                  <br />
                  你可以试着向我提问：
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: isMobile ? '0.7rem' : '0.9rem'
                }}>
                  <div style={{
                    backgroundColor: '#e8f4fd',
                    borderRadius: '12px',
                    padding: '8px 12px',
                    border: '1px solid #ddd'
                  }}>
                    如何提升会员复购率
                  </div>
                  <div style={{
                    backgroundColor: '#e8f4fd',
                    borderRadius: '12px',
                    padding: '8px 12px',
                    border: '1px solid #ddd'
                  }}>
                    商品营销
                  </div>
                </div>
              </div>

              {/* 智能分析通知 */}
              <div style={{
                backgroundColor: '#007aff',
                borderRadius: '16px',
                padding: isMobile ? '12px' : '18px',
                color: 'white',
                fontSize: isMobile ? '0.8rem' : '1rem',
                marginBottom: '18px'
              }}>
                <div style={{ marginBottom: '6px', fontWeight: '600' }}>🤖 智能分析进度通知</div>
                <div style={{ fontSize: isMobile ? '0.7rem' : '0.9rem', opacity: 0.9, lineHeight: '1.4' }}>
                  01月第2周支付金额40686.98元，营业额线上开始，具体请查看当月下载
                </div>
              </div>

              {/* 分析报告 */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: isMobile ? '8px' : '12px',
                fontSize: isMobile ? '0.7rem' : '0.9rem',
                color: '#666'
              }}>
                📊 店铺经营分析报告
                <br />
                2025-05-29 至 2025-05-28
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI人物图片 - 中间更大 */}
        <motion.div
          style={aiCharactersStyle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img 
            src="https://img01.yzcdn.cn/upload_files/2025/05/20/FnmmpYoOB2iy2ENFGMXy-M-7vKzq.png"
            alt="AI助手人物"
            style={aiImageStyle}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div style="display: flex; align-items: center; justify-content: center; gap: 40px; width: 100%; height: 100%;">
                    <div style="font-size: 150px; line-height: 1;">👨‍💼</div>
                    <div style="font-size: 150px; line-height: 1;">👩‍💼</div>
                  </div>
                `;
              }
            }}
          />
        </motion.div>

        {/* 底部功能标签 - 圆形 */}
        <motion.div
          style={functionsContainerStyle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {functions.map((func, index) => (
            <motion.div
              key={index}
              style={functionCircleStyle}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 1)'
              }}
            >
              <span style={{ fontSize: isMobile ? '1.2rem' : '1.6rem' }}>{func.icon}</span>
              <span style={{ 
                whiteSpace: 'pre-line',
                fontSize: isMobile ? '0.6rem' : '0.8rem',
                lineHeight: '1.2'
              }}>
                {func.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIAssistant; 