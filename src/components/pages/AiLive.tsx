import React from 'react';
import SEOHead from '../SEOHead';

const AiLive: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px',
    background: 'white', // 改为白色背景
    padding: '64px 24px',
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  // 移除未使用的样式常量，避免 ESLint 报警

  // 概览模块样式（仿图2）
  const overviewTitleStyle: React.CSSProperties = {
    fontSize: '2.6rem',
    fontWeight: 800,
    color: '#111827',
    textAlign: 'center',
    lineHeight: 1.25,
    margin: '0 0 16px',
    letterSpacing: '-0.5px'
  };

  const overviewSubTitleStyle: React.CSSProperties = {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#111827',
    textAlign: 'center',
    lineHeight: 1.25,
    margin: '0 0 48px',
    letterSpacing: '-0.5px'
  };

  const overviewGridStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 0,
  };

  const overviewItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '28px 12px',
    flex: 1,
    minWidth: 0,
  };

  const overviewIconWrapStyle: React.CSSProperties = {
    width: 68,
    height: 68,
    borderRadius: 20,
    background: '#eef2ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 12px 28px rgba(59,130,246,0.12)'
  };

  const overviewNumberStyle: React.CSSProperties = {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#111827',
    marginTop: 20,
    marginBottom: 6,
    letterSpacing: '-0.5px'
  };

  const overviewLabelStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#6b7280',
  };

  const overviewDividerStyle: React.CSSProperties = {
    width: 1,
    background: 'rgba(17,24,39,0.08)',
    alignSelf: 'stretch',
  };

  const liveStats = [
    { icon: '📱', number: '3689万+', label: '直播总场次' },
    { icon: '⭐', number: '15.9亿+', label: '全网曝光数量' },
    { icon: '🧩', number: '63590个+', label: '授权矩阵数量' },
    { icon: '🌐', number: '23658家+', label: '服务商家数量' },
  ];

  const featureContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    marginBottom: '40px',
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
    background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    borderRadius: '20px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  };

  const liveHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    color: 'white',
    fontSize: '12px',
  };

  const liveIndicatorStyle: React.CSSProperties = {
    background: '#e74c3c',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '10px',
    fontWeight: 'bold',
  };

  const hostAreaStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
  };

  const hostAvatarStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#ff6b6b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    margin: '0 auto 10px',
    border: '3px solid white',
  };

  const productShowcaseStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '12px',
    padding: '15px',
    marginBottom: '15px',
  };

  const productItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '8px',
    background: '#f8f9fa',
    borderRadius: '8px',
  };

  const productImageStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    background: '#ddd',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    fontSize: '20px',
  };

  const productInfoStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'left',
  };

  const productNameStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#333',
    marginBottom: '2px',
  };

  const productPriceStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#e74c3c',
    fontWeight: '600',
  };

  const buyButtonStyle: React.CSSProperties = {
    background: '#ff6b6b',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    padding: '6px 12px',
    fontSize: '10px',
    cursor: 'pointer',
  };

  const orderNotificationStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '6px 10px',
    borderRadius: '12px',
    fontSize: '10px',
  };

  const highlightBoxStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
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
    color: '#e74c3c',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };

  // 新增：图2样式 - 左侧内容块
  const heroTitleStyle: React.CSSProperties = {
    fontSize: '2.8rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: 1.2,
    margin: 0,
  };

  const heroSubTitleStyle: React.CSSProperties = {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: 1.2,
    margin: '12px 0 24px',
  };

  const heroParagraphStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: 1.9,
    margin: '0 0 16px',
    maxWidth: 640,
  };

  const bulletRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    margin: '10px 0',
    color: '#0f172a',
  };

  const bulletIconStyle: React.CSSProperties = {
    width: 12,
    height: 12,
    borderRadius: 9999,
    background: '#2563eb',
    marginTop: 8,
    boxShadow: '0 0 0 3px rgba(37,99,235,0.15)'
  };

  const ctaPrimaryButtonStyle: React.CSSProperties = {
    background: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: 12,
    padding: '14px 24px',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: 22,
    boxShadow: '0 10px 24px rgba(37,99,235,0.25)'
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
    color: '#e74c3c',
    marginBottom: '10px',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#6b7280',
    fontWeight: 500,
  };

  // 新增：四项优势模块样式
  const benefitsTitleStyle: React.CSSProperties = {
    fontSize: '2.6rem',
    fontWeight: 800,
    color: '#0f172a',
    textAlign: 'center',
    letterSpacing: '-0.5px',
    margin: 0,
  };

  const benefitGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 420px 1fr',
    gap: '40px',
    alignItems: 'center',
    marginTop: '40px',
  };

  const benefitColStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  };

  const benefitItemStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  };

  const numBadgeStyle: React.CSSProperties = {
    width: 64,
    height: 64,
    borderRadius: 16,
    border: '2px solid #e5e7eb',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4338ca',
    fontSize: '1.6rem',
    fontWeight: 800,
    boxShadow: '0 10px 24px rgba(0,0,0,0.05)'
  };

  const benefitHeadingStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: 6,
  };

  const benefitDescStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.8,
  };

  return (
    <>
      <SEOHead
        title="AI直播 - 探客AI手机"
        description="探客AI手机AI直播模块，助力企业轻松开启私域直播，提升客户互动与转化。"
        keywords="AI直播, 私域直播, 企业直播, 智能直播, 探客AI手机"
        ogTitle="AI直播 - 探客AI手机"
        ogDescription="探客AI手机AI直播模块，助力企业轻松开启私域直播，提升客户互动与转化。"
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
          <div style={{textAlign: 'center', maxWidth: '800px', padding: '0'}}>
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '32px',
              marginTop: '0',
              textAlign: 'center',
              letterSpacing: '2px',
              whiteSpace: 'nowrap',
            }}>AI直播智能体</h1>
            <p style={{fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', marginBottom: '48px', lineHeight: 1.6}}>
              私域直播新体验，提升客户互动与转化率
            </p>
          </div>
        </div>
        
        <div style={sectionStyle}>
          {/* 概览模块：大标题 + 4项指标 */}
          <div style={{ margin: '0 0 80px' }}>
            <h2 style={overviewTitleStyle}>全自动化AI实景智能直播</h2>
            <h3 style={overviewSubTitleStyle}>助您快速开启财富自由之路</h3>
            <div style={overviewGridStyle}>
              {liveStats.map((s, idx) => (
                <React.Fragment key={s.label}>
                  <div style={overviewItemStyle}>
                    <div style={overviewIconWrapStyle}><span style={{ fontSize: 28, color: '#3b82f6' }}>{s.icon}</span></div>
                    <div style={overviewNumberStyle}>{s.number}</div>
                    <div style={overviewLabelStyle}>{s.label}</div>
                  </div>
                  {idx < liveStats.length - 1 && <div style={overviewDividerStyle} />}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* 第一屏（替换）：图2 左文右图 */}
          <div style={featureContainerStyle}>
            {/* 左侧文案 */}
            <div style={{ ...featureContentStyle, maxWidth: 640 }}>
              <h2 style={heroTitleStyle}>能为商家降低成本，提高效益</h2>
              <h3 style={heroSubTitleStyle}>的好工具</h3>
              <p style={heroParagraphStyle}>
                每个商家都可以通过智能语音直播系统，实现自动直播、自动卖团购/优惠券；
                只需录入直播话术，找到合适的场景，架设好手机就可开播：降低门槛，家家都能播！
              </p>
              <div style={bulletRowStyle}><span style={bulletIconStyle}></span><span>智能语音、文字回复，无需人工干预</span></div>
              <div style={bulletRowStyle}><span style={bulletIconStyle}></span><span>商品、团购券，自动讲解/推窗</span></div>
              <div style={bulletRowStyle}><span style={bulletIconStyle}></span><span>文字场控，解决直播间无互动问题</span></div>
              <div style={bulletRowStyle}><span style={bulletIconStyle}></span><span>支持贴图、贴视频、贴数字人、绿幕抠图视频</span></div>
              <button style={ctaPrimaryButtonStyle}>联系客服免费试用</button>
            </div>
            {/* 右侧手机占位图 */}
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{ ...phoneScreenStyle, background: 'linear-gradient(135deg, #1f2937 0%, #0f172a 100%)' }}>
                  <div style={{
                    margin: 'auto',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px dashed rgba(255,255,255,0.25)',
                    borderRadius: 16,
                    padding: 16,
                    color: '#e5e7eb',
                    textAlign: 'center'
                  }}>
                    手机界面占位图
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二屏：直播数据分析 */}
          <div style={{ ...featureContainerStyle, flexDirection: 'row-reverse', marginTop: '80px' }}>
            {/* 右侧文案（标题/步骤/按钮） */}
            <div style={{ ...featureContentStyle, maxWidth: 620 }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>简易操作，一键开播</h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.9, margin: '16px 0 24px' }}>
                只需录制好语音、设置好回复内容、选择开播平台，即可开播
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: 22 }}>📝</div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>产品的语音/文字设置</div>
                    <div style={{ fontSize: '0.95rem', color: '#64748b' }}>产品语音讲解、文字回复内容</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: 22 }}>📱</div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>设置好需要开播的平台</div>
                    <div style={{ fontSize: '0.95rem', color: '#64748b' }}>抖音、视频号、快手、美团、Tiktok</div>
                  </div>
                </div>
              </div>
              <button style={{ ...ctaPrimaryButtonStyle, marginTop: 26 }}>联系客服免费试用</button>
            </div>
            {/* 左侧手机占位图 */}
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{ ...phoneScreenStyle, background: 'linear-gradient(135deg, #1f2937 0%, #0f172a 100%)' }}>
                  <div style={{
                    margin: 'auto',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px dashed rgba(255,255,255,0.25)',
                    borderRadius: 16,
                    padding: 16,
                    color: '#e5e7eb',
                    textAlign: 'center'
                  }}>
                    手机界面占位图
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第三屏（替换）：四项优势模块 */}
          <div style={{ marginTop: '120px' }}>
            <h2 style={benefitsTitleStyle}>适用实体门店直播,带货直播</h2>
            <div style={benefitGridStyle}>
              {/* 左列 */}
              <div style={benefitColStyle}>
                <div style={benefitItemStyle}>
                  <div style={numBadgeStyle}>01</div>
                  <div>
                    <div style={benefitHeadingStyle}>降低门槛</div>
                    <div style={benefitDescStyle}>不需要专业的知识，不需要雇用主播。可以是老板、员工、服务员都可以一键操作、无需出镜、自动收集评论。</div>
                  </div>
                </div>
                <div style={benefitItemStyle}>
                  <div style={numBadgeStyle}>02</div>
                  <div>
                    <div style={benefitHeadingStyle}>操作简单</div>
                    <div style={benefitDescStyle}>找到合适的场景，架设好手机即可开播。每个商家都可以实现自动直播，只需录入直播话术，家家都能播。</div>
                  </div>
                </div>
              </div>

              {/* 中部手机 */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={phoneFrameStyle}>
                  <div style={{ ...phoneScreenStyle, background: 'linear-gradient(135deg, #1f2937 0%, #0f172a 100%)' }}>
                    <div style={{ margin: 'auto', background: 'rgba(255,255,255,0.06)', border: '1px dashed rgba(255,255,255,0.25)', borderRadius: 16, padding: 16, color: '#e5e7eb', textAlign: 'center' }}>
                      手机界面占位图
                    </div>
                  </div>
                </div>
              </div>

              {/* 右列 */}
              <div style={benefitColStyle}>
                <div style={benefitItemStyle}>
                  <div style={numBadgeStyle}>03</div>
                  <div>
                    <div style={benefitHeadingStyle}>支持代理和OEM</div>
                    <div style={benefitDescStyle}>提供专属品牌APP、独立会员、独立后台；并提供宣传海报、贴牌宣传视频、线下物料、PPT，销售话术等相关营销物料。</div>
                  </div>
                </div>
                <div style={benefitItemStyle}>
                  <div style={numBadgeStyle}>04</div>
                  <div>
                    <div style={benefitHeadingStyle}>节省时间</div>
                    <div style={benefitDescStyle}>提供GPT自动话术生成、自动语音生成。输入话术文字，系统自动生成语音，也可以自行录制好真人语音。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第五屏：成功案例统计 */}
          <div style={{textAlign: 'center', marginTop: '100px'}}>
            <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#1f2937', marginBottom: '20px'}}>
              直播成功案例
            </h2>
            <p style={{fontSize: '1.2rem', color: '#6b7280', marginBottom: '60px'}}>
              打造专业直播带货体验
            </p>
            <div style={statsContainerStyle}>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>10万+</div>
                <div style={statLabelStyle}>直播观看量</div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>15%</div>
                <div style={statLabelStyle}>平均转化率</div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>500万+</div>
                <div style={statLabelStyle}>直播销售额</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiLive;