import React from 'react';
import SEOHead from '../SEOHead';

const AiCall: React.FC = () => {
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
            <p style={{fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', marginBottom: '48px', lineHeight: 1.6}}>
              智能电话营销，自动化客户触达，提升销售效率
            </p>
          </div>
        </div>
        
        <div style={sectionStyle}>
          
          {/* 第一屏：线上小店功能 */}
          <div style={featureContainerStyle}>
            <div style={featureContentStyle}>
              <div style={highlightBoxStyle}>
                <span style={{marginRight: '10px'}}>🛒</span>
                试试「线上小店」
              </div>
              <p style={descriptionStyle}>
                不受时间和空间限制，24小时都能下单
              </p>
              <button style={learnMoreStyle} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={phoneScreenStyle}>
                  <div style={statusBarStyle}>
                    <div>🔍</div>
                    <div>📱</div>
                    <div>🛒</div>
                  </div>
                  
                  <div style={productGridStyle}>
                    <div style={productCardStyle}>
                      <div style={productImageStyle}>👔</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>潮牌</div>
                        <div style={productPriceStyle}>¥199</div>
                        <button style={addToCartStyle}>🛒</button>
                      </div>
                    </div>
                    
                    <div style={productCardStyle}>
                      <div style={productImageStyle}>👟</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>行走鞋</div>
                        <div style={productPriceStyle}>¥299</div>
                        <button style={addToCartStyle}>🛒</button>
                      </div>
                    </div>
                    
                    <div style={productCardStyle}>
                      <div style={productImageStyle}>👜</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>包包</div>
                        <div style={productPriceStyle}>¥399</div>
                        <button style={addToCartStyle}>🛒</button>
                      </div>
                    </div>
                    
                    <div style={productCardStyle}>
                      <div style={productImageStyle}>⌚</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>手表</div>
                        <div style={productPriceStyle}>¥599</div>
                        <button style={addToCartStyle}>🛒</button>
                      </div>
                    </div>
                    
                    <div style={productCardStyle}>
                      <div style={productImageStyle}>🍊</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>橙子</div>
                        <div style={productPriceStyle}>¥29</div>
                        <button style={addToCartStyle}>🛒</button>
                      </div>
                    </div>
                    
                    <div style={productCardStyle}>
                      <div style={productImageStyle}>🥑</div>
                      <div style={productInfoStyle}>
                        <div style={productNameStyle}>牛油果</div>
                        <div style={productPriceStyle}>¥39</div>
                        <button style={addToCartStyle}>🛒</button>
                      </div>
                    </div>
                  </div>
                  
                  <div style={bottomNavStyle}>
                    <div style={navItemStyle}>
                      <div style={{marginBottom: '2px'}}>🏠</div>
                      <div>首页</div>
                    </div>
                    <div style={navItemStyle}>
                      <div style={{marginBottom: '2px'}}>📋</div>
                      <div>商品分类</div>
                    </div>
                    <div style={navItemStyle}>
                      <div style={{marginBottom: '2px'}}>🛒</div>
                      <div>购物车</div>
                    </div>
                    <div style={navItemStyle}>
                      <div style={{marginBottom: '2px'}}>👤</div>
                      <div>我的</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二屏：智能外呼 */}
          <div style={{...featureContainerStyle, flexDirection: 'row-reverse'}}>
            <div style={featureContentStyle}>
              <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)'}}>
                <span style={{marginRight: '10px'}}>📞</span>
                试试「智能外呼」
              </div>
              <p style={descriptionStyle}>
                AI语音助手，自动筛选意向客户，提升转化效率
              </p>
              <button style={{...learnMoreStyle, color: '#9b59b6'}} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)'}}>
                  <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '10px'}}>AI外呼中心</h3>
                    <p style={{fontSize: '12px', opacity: 0.9}}>正在进行智能外呼</p>
                  </div>
                  <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                    <div style={{marginBottom: '15px'}}>
                      <div style={{fontSize: '14px', color: '#333', marginBottom: '10px'}}>通话记录</div>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '10px', marginBottom: '8px'}}>
                        <div style={{fontSize: '12px', color: '#666'}}>客户A - 已接通</div>
                        <div style={{fontSize: '10px', color: '#28a745'}}>✓ 有购买意向</div>
                      </div>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '10px', marginBottom: '8px'}}>
                        <div style={{fontSize: '12px', color: '#666'}}>客户B - 已接通</div>
                        <div style={{fontSize: '10px', color: '#ffc107'}}>⚠ 暂无意向</div>
                      </div>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '10px'}}>
                        <div style={{fontSize: '12px', color: '#666'}}>客户C - 通话中</div>
                        <div style={{fontSize: '10px', color: '#17a2b8'}}>📞 正在沟通</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第三屏：订单管理 */}
          <div style={featureContainerStyle}>
            <div style={featureContentStyle}>
              <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)'}}>
                <span style={{marginRight: '10px'}}>📋</span>
                试试「订单管理」
              </div>
              <p style={descriptionStyle}>
                一键管理所有订单，自动化处理流程
              </p>
              <button style={{...learnMoreStyle, color: '#27ae60'}} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)'}}>
                  <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '10px'}}>订单中心</h3>
                    <p style={{fontSize: '12px', opacity: 0.9}}>今日订单概览</p>
                  </div>
                  <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                    <div style={{marginBottom: '15px'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                        <span style={{fontSize: '14px', color: '#333'}}>待处理订单</span>
                        <span style={{fontSize: '16px', fontWeight: '600', color: '#e74c3c'}}>12</span>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                        <span style={{fontSize: '14px', color: '#333'}}>已发货订单</span>
                        <span style={{fontSize: '16px', fontWeight: '600', color: '#27ae60'}}>89</span>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                        <span style={{fontSize: '14px', color: '#333'}}>已完成订单</span>
                        <span style={{fontSize: '16px', fontWeight: '600', color: '#3498db'}}>156</span>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{fontSize: '14px', color: '#333'}}>今日销售额</span>
                        <span style={{fontSize: '16px', fontWeight: '600', color: '#f39c12'}}>¥25,680</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第四屏：客户跟进 */}
          <div style={{...featureContainerStyle, flexDirection: 'row-reverse'}}>
            <div style={featureContentStyle}>
              <div style={{...highlightBoxStyle, background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'}}>
                <span style={{marginRight: '10px'}}>👥</span>
                试试「客户跟进」
              </div>
              <p style={descriptionStyle}>
                智能客户画像，精准跟进策略
              </p>
              <button style={{...learnMoreStyle, color: '#e74c3c'}} onClick={() => console.log('了解更多')}>
                进一步了解 →
              </button>
            </div>
            <div style={featureImageStyle}>
              <div style={phoneFrameStyle}>
                <div style={{...phoneScreenStyle, background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'}}>
                  <div style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
                    <h3 style={{fontSize: '18px', marginBottom: '10px'}}>客户跟进</h3>
                    <p style={{fontSize: '12px', opacity: 0.9}}>智能客户管理</p>
                  </div>
                  <div style={{background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '20px'}}>
                    <div style={{marginBottom: '15px'}}>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '12px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px'}}>
                          <span style={{fontSize: '14px', fontWeight: '600', color: '#333'}}>张先生</span>
                          <span style={{fontSize: '10px', color: '#28a745', background: '#d4edda', padding: '2px 6px', borderRadius: '4px'}}>高意向</span>
                        </div>
                        <div style={{fontSize: '12px', color: '#666'}}>上次沟通：2小时前</div>
                        <div style={{fontSize: '12px', color: '#666'}}>需要跟进：明天上午</div>
                      </div>
                      <div style={{background: '#f8f9fa', borderRadius: '8px', padding: '12px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px'}}>
                          <span style={{fontSize: '14px', fontWeight: '600', color: '#333'}}>李女士</span>
                          <span style={{fontSize: '10px', color: '#ffc107', background: '#fff3cd', padding: '2px 6px', borderRadius: '4px'}}>中意向</span>
                        </div>
                        <div style={{fontSize: '12px', color: '#666'}}>上次沟通：1天前</div>
                        <div style={{fontSize: '12px', color: '#666'}}>需要跟进：今天下午</div>
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