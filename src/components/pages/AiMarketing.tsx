import React from 'react';
import SEOHead from '../SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';

const AiMarketing: React.FC = () => {
  const { t } = useLanguage();
  
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
    color: '#6b7280',
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
    color: '#6b7280',
    fontWeight: 500,
  };

  // 顶部（副标题下方）三大卖点
  const heroFeatureGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    marginTop: '20px',
  };

  const heroFeatureItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    color: 'white',
  };

  const heroFeatureIconStyle: React.CSSProperties = {
    fontSize: '32px',
    color: '#8fb6ff',
    lineHeight: 1,
  };

  const heroFeatureTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '6px',
  };

  const heroFeatureDescStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.9)'
  };

  return (
    <>
      <SEOHead
        title="AI营销 - 探客AI手机"
        description="探客AI手机AI营销模块，助力企业实现全渠道数字化营销，智能获客，提升转化。"
        keywords="AI营销, 智能营销, 数字化营销, 获客, 企业营销, 探客AI手机"
        ogTitle="AI营销 - 探客AI手机"
        ogDescription="探客AI手机AI营销模块，助力企业实现全渠道数字化营销，智能获客，提升转化。"
      />
      <div style={containerStyle}>
        {/* 蓝色背景的标题区域 */}
        <div style={{
          width: '100vw',
          minHeight: '600px',
          background: 'linear-gradient(135deg, #2574e8 0%, #1e40af 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '64px',
          marginLeft: 'calc(-50vw + 50%)',
          paddingBottom: '40px',
        }}>
          <div style={{textAlign: 'center', maxWidth: '1000px', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '32px',
              marginTop: '0',
              textAlign: 'center',
              letterSpacing: '2px',
              whiteSpace: 'nowrap',
            }}>{t('aiMarketing.title')}</h1>
            <p style={{fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: 1.6}}>
              {t('aiMarketing.subtitle')}
            </p>
            {/* 三大卖点（显示在副标题下方） */}
            <div style={heroFeatureGridStyle}>
              <div style={heroFeatureItemStyle}>
                <div style={heroFeatureIconStyle}>🔁</div>
                <div>
                  <div style={heroFeatureTitleStyle}>{t('aiMarketing.feature1')}</div>
                  <div style={heroFeatureDescStyle}>{t('aiMarketing.feature1.desc')}</div>
                </div>
              </div>
              <div style={heroFeatureItemStyle}>
                <div style={heroFeatureIconStyle}>🛡️</div>
                <div>
                  <div style={heroFeatureTitleStyle}>{t('aiMarketing.feature2')}</div>
                  <div style={heroFeatureDescStyle}>{t('aiMarketing.feature2.desc')}</div>
                </div>
              </div>
              <div style={heroFeatureItemStyle}>
                <div style={heroFeatureIconStyle}>📈</div>
                <div>
                  <div style={heroFeatureTitleStyle}>{t('aiMarketing.feature3')}</div>
                  <div style={heroFeatureDescStyle}>{t('aiMarketing.feature3.desc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 实时服务数据统计 */}
        <div style={{
          width: '100vw',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          paddingTop: '80px',
          paddingBottom: '60px',
          marginLeft: 'calc(-50vw + 50%)',
          marginBottom: '0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '0 24px',
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '60px',
              marginTop: '0',
            }}>{t('realTimeData.title')}</h2>
            <div style={{
              borderBottom: '4px solid #3b82f6',
              width: '60px',
              margin: '0 auto',
              marginBottom: '60px',
            }}></div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '60px',
              alignItems: 'center',
            }}>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: '10px',
                }}>1,253,789</div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#6b7280',
                  fontWeight: 500,
                }}>{t('realTimeData.messageSent')}</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: '10px',
                }}>87,652,341</div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#6b7280',
                  fontWeight: 500,
                }}>{t('realTimeData.momentsPublished')}</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: '10px',
                }}>2,847,163</div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#6b7280',
                  fontWeight: 500,
                }}>{t('realTimeData.friendsAdded')}</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: '10px',
                }}>156,782,493</div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#6b7280',
                  fontWeight: 500,
                }}>{t('realTimeData.aiChats')}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={sectionStyle}>
          {/* 第一屏：专注私域营销自动化 */}
          <div style={featureContainerStyle}>
            <div style={featureContentStyle}>
              {/* 01编号和标题 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '30px',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {t('privateDomain.number')}
              </div>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  {t('privateDomain.title')}
                </h2>
              </div>
              
              {/* 副标题 */}
              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                fontWeight: 600,
                marginBottom: '30px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>
                {t('privateDomain.about')}
              </p>

              {/* 主要描述 */}
              <div style={{
                fontSize: '1.1rem',
                color: '#374151',
                lineHeight: '1.8',
                marginBottom: '30px',
              }}>
                <p style={{marginBottom: '20px'}}>
                  <span style={{color: '#3b82f6', marginRight: '8px'}}>◆</span>
                  {t('privateDomain.desc1')}
                </p>
                <p style={{marginBottom: '20px'}}>
                  {t('privateDomain.desc2')}
                </p>
              </div>

              {/* 功能列表 */}
              <div style={{
                marginBottom: '30px',
                paddingLeft: '20px',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '1rem',
                  color: '#374151',
                }}>
                  <div><span style={{color: '#3b82f6', marginRight: '8px'}}>◆</span> {t('privateDomain.feature1')}</div>
                  <div style={{marginLeft: '16px'}}>{t('privateDomain.feature1.sub1')}</div>
                  <div style={{marginLeft: '16px'}}>{t('privateDomain.feature1.sub2')}</div>
                  <div style={{marginLeft: '16px'}}>{t('privateDomain.feature1.sub3')}</div>
                  <div style={{marginLeft: '16px'}}>{t('privateDomain.feature1.sub4')}</div>
                </div>
                <p style={{
                  marginTop: '15px',
                  fontSize: '1rem',
                  color: '#374151',
                }}>
                  <span style={{color: '#3b82f6', marginRight: '8px'}}>◆</span>
                  {t('privateDomain.feature2')}
                </p>
              </div>

              {/* 立即咨询按钮 */}
              <div>
                <button style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
                onClick={() => console.log('立即咨询')}>
                  {t('privateDomain.consultButton')}
              </button>
            </div>
            </div>
            
            {/* 右侧图片区域 */}
            <div style={featureImageStyle}>
              <div style={{
                width: '400px',
                height: '300px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              }}>
                {/* 装饰性几何图形 */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '60px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  width: '80px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  transform: 'rotate(-10deg)',
                }}></div>
                
                {/* 手机占位图 */}
                <div style={{
                  width: '180px',
                  height: '320px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '25px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  transform: 'rotate(-5deg)',
                }}>
                  {/* 手机顶部刘海 */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    width: '60px',
                    height: '4px',
                    background: '#333',
                    borderRadius: '2px',
                  }}></div>
                  
                  {/* 屏幕内容 */}
                  <div style={{
                    width: '150px',
                    height: '280px',
                    background: '#f8fafc',
                    borderRadius: '15px',
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      color: '#667eea',
                    }}>📱</div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#64748b',
                      textAlign: 'center',
                      fontWeight: 600,
                    }}>{t('mobileApp.smartMarketing')}</div>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      marginTop: '10px',
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#667eea',
                        borderRadius: '50%',
                      }}></div>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#cbd5e1',
                        borderRadius: '50%',
                      }}></div>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#cbd5e1',
                        borderRadius: '50%',
                      }}></div>
                  </div>
                  </div>
                  </div>
                
                {/* 右侧标题 */}
                <div style={{
                  position: 'absolute',
                  top: '50px',
                  right: '30px',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  textAlign: 'right',
                  lineHeight: 1.4,
                  maxWidth: '120px',
                }}>
                  专注营销自动化
                  </div>
                
                {/* 右侧描述 */}
                <div style={{
                  position: 'absolute',
                  bottom: '80px',
                  right: '30px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.9rem',
                  textAlign: 'right',
                  lineHeight: 1.5,
                  maxWidth: '150px',
                }}>
                  专注社群营销自动化，给您私有化部署一款微信群管理系统。
                  <br/><br/>
                  登陆任意微信作为机器人小助手，智能管理微信社群，实现社群营销自动化。
                </div>
              </div>
            </div>
          </div>

          {/* 第二屏：24H高效群聊管理 */}
          <div style={{...featureContainerStyle, flexDirection: 'row-reverse'}}>
            <div style={featureContentStyle}>
              {/* 标题 */}
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: 700,
                color: '#1f2937',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                {t('groupManagement.title')}
              </h2>
              
              {/* 副标题 */}
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                marginBottom: '40px',
                lineHeight: 1.6,
              }}>
{t('groupManagement.subtitle')}
              </p>

              {/* 功能列表 */}
              <div style={{
                border: '2px dashed #93c5fd',
                borderRadius: '16px',
                padding: '30px',
                marginBottom: '30px',
                background: '#f8fafc',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}>
                  {/* 自动通过 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      📝
            </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        自动通过
                  </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        自动通过入群申请，并可设置时间间隔规避风险
                  </div>
                  </div>
                  </div>

                  {/* 入群欢迎 */}
                    <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      👋
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        入群欢迎
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        新人进群后及时发送消息并@新人，增加入群仪式感及快速了解群规则
                      </div>
                    </div>
                  </div>

                  {/* 关键字入群 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      🔑
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        关键字入群
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        设定关键词，触发关键词即可自动拉群
                      </div>
                    </div>
                  </div>

                  {/* 自动踢人 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      🚫
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        自动踢人
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        根据发言名片、频率、异常字、垃圾信息等自动踢出，并进入黑名单系统
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 免费试用按钮 */}
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 36px',
                  borderRadius: '25px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease',
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
                onClick={() => console.log('免费试用')}>
                  免费试用
                </button>
              </div>
            </div>
            
            {/* 右侧手机占位图 */}
            <div style={featureImageStyle}>
              <div style={{
                width: '350px',
                height: '400px',
                background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }}>
                {/* 手机占位图 */}
                <div style={{
                  width: '200px',
                  height: '350px',
                  background: '#1f2937',
                  borderRadius: '30px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                }}>
                  {/* 手机顶部刘海 */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    width: '80px',
                    height: '6px',
                    background: '#374151',
                    borderRadius: '3px',
                  }}></div>
                  
                  {/* 屏幕内容 */}
                  <div style={{
                    width: '170px',
                    height: '300px',
                    background: 'white',
                    borderRadius: '20px',
                    marginTop: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    position: 'relative',
                  }}>
                    {/* 群聊图标 */}
                    <div style={{
                      fontSize: '4rem',
                      color: '#3b82f6',
                      marginBottom: '10px',
                    }}>💬</div>
                    
                    {/* 标题文字 */}
                    <div style={{
                      fontSize: '1rem',
                      color: '#1f2937',
                      textAlign: 'center',
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}>
                      群聊管理助手
                    </div>
                    
                    {/* 副标题 */}
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      textAlign: 'center',
                      lineHeight: 1.3,
                      paddingLeft: '10px',
                      paddingRight: '10px',
                    }}>
                      24小时自动化管理
                      <br/>
                      高效便捷
                    </div>
                    
                    {/* 底部指示器 */}
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                      marginTop: '20px',
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: '#3b82f6',
                        borderRadius: '50%',
                      }}></div>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: '#d1d5db',
                        borderRadius: '50%',
                      }}></div>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: '#d1d5db',
                        borderRadius: '50%',
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第三屏：智能客服聊天工具 */}
          <div style={featureContainerStyle}>
            <div style={featureContentStyle}>
              {/* 标题 */}
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: 700,
                color: '#1f2937',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                {t('smartChat.title')}
              </h2>
              
              {/* 副标题 */}
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                marginBottom: '40px',
                lineHeight: 1.6,
              }}>
{t('smartChat.subtitle')}
              </p>

              {/* 功能列表 */}
              <div style={{
                border: '2px dashed #93c5fd',
                borderRadius: '16px',
                padding: '30px',
                marginBottom: '30px',
                background: '#f8fafc',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}>
                  {/* 会话沟通 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      💬
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        会话沟通
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        多人多号会话沟通，一人轻松管理多个微信号
                      </div>
                    </div>
                  </div>

                  {/* 关键词回复 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      🔑
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        关键词回复
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        设定关键词，触发关键词即可自动回复，实现24H智能问答
                      </div>
                    </div>
                  </div>

                  {/* 话术库 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      📚
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        话术库
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        话术集中收录管理，其他功能模块识别可快捷调用，沉淀有价值内容
                      </div>
                    </div>
                  </div>

                  {/* 快捷回复 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      ⚡
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}>
                        快捷回复
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}>
                        预设常见问题的回复用语，人机协作，快速高效解答用户问题
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 免费试用按钮 */}
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 36px',
                  borderRadius: '25px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease',
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
                onClick={() => console.log('免费试用')}>
                  免费试用
              </button>
            </div>
            </div>
            
            {/* 右侧手机占位图 */}
            <div style={featureImageStyle}>
              <div style={{
                width: '350px',
                height: '400px',
                background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }}>
                {/* 手机占位图 */}
                <div style={{
                  width: '200px',
                  height: '350px',
                  background: '#1f2937',
                  borderRadius: '30px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                }}>
                  {/* 手机顶部刘海 */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    width: '80px',
                    height: '6px',
                    background: '#374151',
                    borderRadius: '3px',
                  }}></div>
                  
                  {/* 屏幕内容 */}
                  <div style={{
                    width: '170px',
                    height: '300px',
                    background: 'white',
                    borderRadius: '20px',
                    marginTop: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    position: 'relative',
                  }}>
                    {/* 聊天图标 */}
                    <div style={{
                      fontSize: '4rem',
                      color: '#3b82f6',
                      marginBottom: '10px',
                    }}>💬</div>
                    
                    {/* 标题文字 */}
                    <div style={{
                      fontSize: '1rem',
                      color: '#1f2937',
                      textAlign: 'center',
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}>
                      智能客服助手
                  </div>
                    
                    {/* 副标题 */}
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      textAlign: 'center',
                      lineHeight: 1.3,
                      paddingLeft: '10px',
                      paddingRight: '10px',
                    }}>
                      24小时智能对话
                      <br/>
                      高效沟通
                        </div>
                    
                    {/* 底部指示器 */}
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                      marginTop: '20px',
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: '#3b82f6',
                        borderRadius: '50%',
                      }}></div>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: '#d1d5db',
                        borderRadius: '50%',
                      }}></div>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: '#d1d5db',
                        borderRadius: '50%',
                      }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          {/* 第四屏：强大的功能特点 */}
          <div style={{
            textAlign: 'center',
            marginTop: '120px',
            marginBottom: '120px',
          }}>
            {/* 标题区域 */}
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}>
              {t('powerfulFeatures.title')}
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#6b7280',
              marginBottom: '80px',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 80px auto',
            }}>
{t('powerfulFeatures.subtitle')}
            </p>

            {/* 功能特点网格 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '60px 40px',
              maxWidth: '1000px',
              margin: '0 auto',
            }}>
              {/* 清理无效粉丝 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>✓</span>
            </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>清理无效粉丝</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  智能识别并一键清理僵尸粉、黑名单等无效粉丝，保持粉丝质量
                </p>
          </div>

              {/* 加群好友 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>👥</span>
              </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>加群好友</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  快速构群成员添加为好友，扩大人脉网络
                </p>
            </div>

              {/* 批量导入手机号 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>💬</span>
                  </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>批量导入手机号</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  支持Excel批量导入手机号，一键添加为微信好友
                </p>
                      </div>

              {/* 批量群发 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>📷</span>
                      </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>批量群发</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  定时发送消息给选定好友或群组，提高营销效率
                </p>
                      </div>

              {/* 自动换群 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>🔄</span>
                      </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>自动换群</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  智能管理多个群组，自动执行群组切换策略
                </p>
                    </div>

              {/* 导出群成员 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>⏰</span>
                  </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>导出群成员</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  一键导出群成员信息，便于后续精准营销
                </p>
                </div>

              {/* 自动朋友圈 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>⏰</span>
              </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>自动朋友圈</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  定时自动发布朋友圈内容，保持活跃度
                </p>
              </div>

              {/* 无限多开 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>📱</span>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>无限多开</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  支持同时登录多个微信账号，高效管理多个营销渠道
                </p>
              </div>

              {/* 数据分析 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}>
                  <span style={{fontSize: '1.8rem', color: '#3b82f6'}}>📊</span>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}>数据分析</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}>
                  全面分析营销数据，助您做出明智的决策
                </p>
              </div>
            </div>
          </div>

          {/* 第五屏：成功案例统计 */}
          <div style={{textAlign: 'center', marginTop: '100px'}}>
            <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#1f2937', marginBottom: '20px'}}>
{t('successCases.title')}
            </h2>
            <p style={{fontSize: '1.2rem', color: '#6b7280', marginBottom: '60px'}}>
{t('successCases.subtitle')}
            </p>
            <div style={statsContainerStyle}>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>5000+</div>
                <div style={statLabelStyle}>{t('successCases.activeUsers')}</div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>95%</div>
                <div style={statLabelStyle}>{t('successCases.satisfaction')}</div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>200%</div>
                <div style={statLabelStyle}>{t('successCases.conversionImprovement')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiMarketing;