import React from 'react';

const AiMarketing: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px',
    background: '#030303', // 深色背景
    padding: '64px 24px',
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    marginBottom: '120px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
    marginBottom: '48px',
    letterSpacing: '-2px',
    background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };

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
    background: '#fff',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  };

  const chatHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  };

  const avatarStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#4CAF50',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    marginRight: '10px',
  };

  const messageStyle: React.CSSProperties = {
    background: '#f0f0f0',
    padding: '12px 16px',
    borderRadius: '18px',
    marginBottom: '15px',
    fontSize: '14px',
    lineHeight: '1.4',
  };

  const productGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '20px',
  };

  const productItemStyle: React.CSSProperties = {
    aspectRatio: '1',
    background: '#f5f5f5',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#666',
    border: '1px solid #eee',
  };

  const highlightBoxStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
    color: '#030303',
    padding: '20px 30px',
    borderRadius: '15px',
    display: 'inline-block',
    marginBottom: '20px',
    fontSize: '1.1rem',
    fontWeight: 600,
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    letterSpacing: '1px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '20px',
  };

  const learnMoreStyle: React.CSSProperties = {
    color: '#00D4AA',
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
    color: '#00D4AA',
    marginBottom: '10px',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 style={titleStyle}>AI营销助手</h1>
        
        {/* 第一屏：共享素材库 */}
        <div style={featureContainerStyle}>
          <div style={featureContentStyle}>
            <div style={highlightBoxStyle}>
              <span style={{marginRight: '10px'}}>💡</span>
              试试「共享素材库」
            </div>
            <p style={descriptionStyle}>
              方便自己也方便代理的朋友圈卖货神器
            </p>
            <button style={learnMoreStyle} onClick={() => console.log('了解更多')}>
              进一步了解 →
            </button>
          </div>
          <div style={featureImageStyle}>
            <div style={phoneFrameStyle}>
              <div style={phoneScreenStyle}>
                <div style={chatHeaderStyle}>
                  <div style={avatarStyle}>😊</div>
                  <span style={{fontSize: '16px', fontWeight: '600'}}>客户常问：有素材吗？</span>
                </div>
                <div style={messageStyle}>
                  客户问的是什么？
                </div>
                <div style={messageStyle}>
                  从哪里可以快速转发/下载你的图啊？
                </div>
                <div style={productGridStyle}>
                  <div style={productItemStyle}>👔</div>
                  <div style={productItemStyle}>👟</div>
                  <div style={productItemStyle}>👜</div>
                  <div style={productItemStyle}>⌚</div>
                  <div style={productItemStyle}>🔗</div>
                  <div style={productItemStyle}>📱</div>
                  <div style={productItemStyle}>🥑</div>
                  <div style={productItemStyle}>🍊</div>
                  <div style={productItemStyle}>🧴</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第二屏：产品图册 */}
        <div style={{...featureContainerStyle, flexDirection: 'row-reverse'}}>
          <div style={featureContentStyle}>
            <div style={highlightBoxStyle}>
              <span style={{marginRight: '10px'}}>🏔️</span>
              试试「产品图册」
            </div>
            <p style={descriptionStyle}>
              方便客户精准看款找款的小程序图册
            </p>
            <button style={learnMoreStyle} onClick={() => console.log('了解更多')}>
              进一步了解 →
            </button>
          </div>
          <div style={featureImageStyle}>
            <div style={phoneFrameStyle}>
              <div style={phoneScreenStyle}>
                <div style={chatHeaderStyle}>
                  <div style={avatarStyle}>😊</div>
                  <span style={{fontSize: '16px', fontWeight: '600'}}>客户常问：有没有这个款？</span>
                </div>
                <div style={messageStyle}>
                  客户问的是什么？
                </div>
                <div style={messageStyle}>
                  能不能马上立即发给我，不要让我浪费时间翻朋友圈
                </div>
                <div style={{marginTop: '20px'}}>
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    padding: '15px',
                    textAlign: 'center',
                    border: '1px solid #e9ecef'
                  }}>
                    <div style={{fontSize: '20px', marginBottom: '8px'}}>微信</div>
                    <div style={{fontSize: '12px', color: '#666'}}>常来买</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第三屏：智能推荐 */}
        <div style={featureContainerStyle}>
          <div style={featureContentStyle}>
            <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <span style={{marginRight: '10px'}}>🤖</span>
              试试「智能推荐」
            </div>
            <p style={descriptionStyle}>
              AI分析客户喜好，精准推荐最适合的产品
            </p>
            <button style={{...learnMoreStyle, color: '#667eea'}} onClick={() => console.log('了解更多')}>
              进一步了解 →
            </button>
          </div>
          <div style={featureImageStyle}>
            <div style={phoneFrameStyle}>
              <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                  <h3 style={{fontSize: '18px', marginBottom: '10px'}}>AI智能推荐</h3>
                  <p style={{fontSize: '12px', opacity: 0.9}}>基于客户浏览历史分析</p>
                </div>
                <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                  <div style={{marginBottom: '15px'}}>
                    <div style={{fontSize: '14px', color: '#333', marginBottom: '5px'}}>为您推荐</div>
                    <div style={{display: 'flex', gap: '10px'}}>
                      <div style={{flex: 1, background: '#f5f5f5', borderRadius: '8px', padding: '10px', textAlign: 'center'}}>
                        <div style={{fontSize: '20px', marginBottom: '5px'}}>👔</div>
                        <div style={{fontSize: '12px', color: '#666'}}>商务衬衫</div>
                        <div style={{fontSize: '12px', color: '#00D4AA', fontWeight: '600'}}>95%匹配</div>
                      </div>
                      <div style={{flex: 1, background: '#f5f5f5', borderRadius: '8px', padding: '10px', textAlign: 'center'}}>
                        <div style={{fontSize: '20px', marginBottom: '5px'}}>👟</div>
                        <div style={{fontSize: '12px', color: '#666'}}>运动鞋</div>
                        <div style={{fontSize: '12px', color: '#00D4AA', fontWeight: '600'}}>88%匹配</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第四屏：数据分析 */}
        <div style={{...featureContainerStyle, flexDirection: 'row-reverse'}}>
          <div style={featureContentStyle}>
            <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'}}>
              <span style={{marginRight: '10px'}}>📊</span>
              试试「数据分析」
            </div>
            <p style={descriptionStyle}>
              实时追踪营销效果，优化推广策略
            </p>
            <button style={{...learnMoreStyle, color: '#ff6b6b'}} onClick={() => console.log('了解更多')}>
              进一步了解 →
            </button>
          </div>
          <div style={featureImageStyle}>
            <div style={phoneFrameStyle}>
              <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'}}>
                <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                  <h3 style={{fontSize: '18px', marginBottom: '10px'}}>营销数据</h3>
                  <p style={{fontSize: '12px', opacity: 0.9}}>今日实时数据</p>
                </div>
                <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '24px', fontWeight: '700', color: '#ff6b6b'}}>1,234</div>
                      <div style={{fontSize: '12px', color: '#666'}}>浏览量</div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '24px', fontWeight: '700', color: '#ff6b6b'}}>89</div>
                      <div style={{fontSize: '12px', color: '#666'}}>转化数</div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '24px', fontWeight: '700', color: '#ff6b6b'}}>7.2%</div>
                      <div style={{fontSize: '12px', color: '#666'}}>转化率</div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '24px', fontWeight: '700', color: '#ff6b6b'}}>¥12K</div>
                      <div style={{fontSize: '12px', color: '#666'}}>销售额</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第五屏：成功案例统计 */}
        <div style={{textAlign: 'center', marginTop: '100px'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#222', marginBottom: '20px'}}>
            用户成功案例
          </h2>
          <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '60px'}}>
            数千家企业的共同选择
          </p>
          <div style={statsContainerStyle}>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>5000+</div>
              <div style={statLabelStyle}>活跃用户</div>
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>95%</div>
              <div style={statLabelStyle}>客户满意度</div>
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>200%</div>
              <div style={statLabelStyle}>平均转化提升</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiMarketing; 