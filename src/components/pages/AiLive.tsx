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
          
          {/* 第一屏：高清私域直播功能 */}
          <div style={featureContainerStyle}>
            <div style={featureContentStyle}>
              <div style={highlightBoxStyle}>
                <span style={{marginRight: '10px'}}>📹</span>
                试试「高清私域直播」
              </div>
              <p style={descriptionStyle}>
                支持批量结合，自动剪切商品短视频
              </p>
              <button style={learnMoreStyle} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'}}>
                  <div style={liveHeaderStyle}>
                    <div style={liveIndicatorStyle}>HD 1080P</div>
                    <div>📱</div>
                  </div>
                  
                  <div style={orderNotificationStyle}>
                    客户C拍了一手
                  </div>
                  
                  <div style={hostAreaStyle}>
                    <div style={hostAvatarStyle}>
                      👩‍💼
                    </div>
                    <div style={{fontSize: '14px', fontWeight: '600'}}>
                      主播同款长裙
                    </div>
                    <div style={{fontSize: '16px', color: '#ffeb3b', marginTop: '5px'}}>
                      ¥199
                    </div>
                    <button style={{
                      ...buyButtonStyle,
                      marginTop: '10px',
                      padding: '8px 16px',
                      fontSize: '12px',
                    }}>
                      拿一手
                    </button>
                  </div>
                  
                  <div style={productShowcaseStyle}>
                    <div style={productItemStyle}>
                      <div style={productImageStyle}>👔</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>潮牌T恤</div>
                        <div style={productPriceStyle}>¥199</div>
                      </div>
                      <button style={buyButtonStyle}>下单</button>
                    </div>
                    
                    <div style={productItemStyle}>
                      <div style={productImageStyle}>👟</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>运动鞋</div>
                        <div style={productPriceStyle}>¥299</div>
                      </div>
                      <button style={buyButtonStyle}>下单</button>
                    </div>
                    
                    <div style={productItemStyle}>
                      <div style={productImageStyle}>👜</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>手提包</div>
                        <div style={productPriceStyle}>¥399</div>
                      </div>
                      <button style={buyButtonStyle}>下单</button>
                    </div>
                  </div>
                  
                  <div style={{
                    marginTop: 'auto',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    color: 'white',
                    fontSize: '12px',
                    textAlign: 'center',
                  }}>
                    💬 正在直播中...
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二屏：直播数据分析 */}
          <div style={{...featureContainerStyle, flexDirection: 'row-reverse'}}>
            <div style={featureContentStyle}>
              <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'}}>
                <span style={{marginRight: '10px'}}>📊</span>
                试试「直播数据分析」
              </div>
              <p style={descriptionStyle}>
                实时监控直播效果，优化直播策略
              </p>
              <button style={{...learnMoreStyle, color: '#3498db'}} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'}}>
                  <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '10px'}}>直播数据</h3>
                    <p style={{fontSize: '12px', opacity: 0.9}}>实时直播统计</p>
                  </div>
                  <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                      <div style={{textAlign: 'center'}}>
                        <div style={{fontSize: '24px', fontWeight: '700', color: '#3498db'}}>2,456</div>
                        <div style={{fontSize: '12px', color: '#666'}}>在线观看</div>
                      </div>
                      <div style={{textAlign: 'center'}}>
                        <div style={{fontSize: '24px', fontWeight: '700', color: '#3498db'}}>156</div>
                        <div style={{fontSize: '12px', color: '#666'}}>实时下单</div>
                      </div>
                      <div style={{textAlign: 'center'}}>
                        <div style={{fontSize: '24px', fontWeight: '700', color: '#3498db'}}>6.4%</div>
                        <div style={{fontSize: '12px', color: '#666'}}>转化率</div>
                      </div>
                      <div style={{textAlign: 'center'}}>
                        <div style={{fontSize: '24px', fontWeight: '700', color: '#3498db'}}>¥18K</div>
                        <div style={{fontSize: '12px', color: '#666'}}>直播销售</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第三屏：互动功能 */}
          <div style={featureContainerStyle}>
            <div style={featureContentStyle}>
              <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'}}>
                <span style={{marginRight: '10px'}}>💬</span>
                试试「互动功能」
              </div>
              <p style={descriptionStyle}>
                弹幕互动、抽奖活动、实时问答
              </p>
              <button style={{...learnMoreStyle, color: '#f39c12'}} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'}}>
                  <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '10px'}}>直播互动</h3>
                    <p style={{fontSize: '12px', opacity: 0.9}}>实时互动功能</p>
                  </div>
                  <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                    <div style={{marginBottom: '15px'}}>
                      <div style={{fontSize: '14px', color: '#333', marginBottom: '10px'}}>弹幕消息</div>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '8px', marginBottom: '6px'}}>
                        <div style={{fontSize: '12px', color: '#666'}}>用户A：这个包包好看！</div>
                      </div>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '8px', marginBottom: '6px'}}>
                        <div style={{fontSize: '12px', color: '#666'}}>用户B：有什么颜色？</div>
                      </div>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '8px', marginBottom: '6px'}}>
                        <div style={{fontSize: '12px', color: '#666'}}>用户C：我要买一个</div>
                      </div>
                      <div style={{background: '#fff3cd', borderRadius: '8px', padding: '16px', border: '1px solid #ffc107'}}>
                        <div style={{fontSize: '12px', color: '#856404'}}>🎉 抽奖活动进行中</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第四屏：多平台直播 */}
          <div style={{...featureContainerStyle, flexDirection: 'row-reverse'}}>
            <div style={featureContentStyle}>
              <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)'}}>
                <span style={{marginRight: '10px'}}>📱</span>
                试试「多平台直播」
              </div>
              <p style={descriptionStyle}>
                同时推流到多个平台，扩大直播覆盖面
              </p>
              <button style={{...learnMoreStyle, color: '#9b59b6'}} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)'}}>
                  <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '10px'}}>多平台推流</h3>
                    <p style={{fontSize: '12px', opacity: 0.9}}>同步直播状态</p>
                  </div>
                  <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                    <div style={{marginBottom: '15px'}}>
                      <div style={{fontSize: '14px', color: '#333', marginBottom: '10px'}}>直播平台</div>
                      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', background: '#f8f9fa', borderRadius: '6px'}}>
                          <span style={{fontSize: '12px', color: '#333'}}>微信视频号</span>
                          <span style={{fontSize: '10px', color: '#28a745', background: '#d4edda', padding: '2px 6px', borderRadius: '4px'}}>直播中</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', background: '#f8f9fa', borderRadius: '6px'}}>
                          <span style={{fontSize: '12px', color: '#333'}}>抖音直播</span>
                          <span style={{fontSize: '10px', color: '#28a745', background: '#d4edda', padding: '2px 6px', borderRadius: '4px'}}>直播中</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', background: '#f8f9fa', borderRadius: '6px'}}>
                          <span style={{fontSize: '12px', color: '#333'}}>快手直播</span>
                          <span style={{fontSize: '10px', color: '#6c757d', background: '#e9ecef', padding: '2px 6px', borderRadius: '4px'}}>待开启</span>
                        </div>
                      </div>
                    </div>
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