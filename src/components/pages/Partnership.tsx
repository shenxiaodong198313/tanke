import React, { useState } from 'react';
import SEOHead from '../SEOHead';
import { partnerApplicationApi, formValidation } from '../../services/api';
import { useLanguage } from '../../contexts/LanguageContext';

// 移除未使用常量，避免 ESLint 报警
const CARD_WIDTH = 340;
// 内容区最大宽度与导航栏一致
const contentMaxWidth = 1100;

const Partnership: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 清除之前的错误信息
    if (submitMessage) {
      setSubmitMessage('');
    }
  };

  const handleSubmit = async () => {
    // 表单验证
    const errors = formValidation.validatePartnerApplication(formData);
    if (errors.length > 0) {
      setSubmitMessage(errors.join(', '));
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await partnerApplicationApi.submit(formData);
      
      if (response.success) {
        setSubmitMessage('申请提交成功！我们会尽快与您联系。');
        // 重置表单
        setFormData({ name: '', company: '', position: '', phone: '' });
        // 3秒后关闭模态窗口
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage(response.message || '提交失败，请稍后重试');
      }
    } catch (error) {
      console.error('提交申请失败:', error);
      setSubmitMessage('网络错误，请检查网络连接后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 模态窗口样式
  const modalOverlay: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  };

  const modalContent: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '32px',
    width: '480px',
    maxWidth: '90vw',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  };

  const modalTitle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#222',
    textAlign: 'center',
    marginBottom: '24px',
    marginTop: 0,
  };

  const closeButton: React.CSSProperties = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#999',
    cursor: 'pointer',
    lineHeight: 1,
    padding: '4px',
  };

  const formField: React.CSSProperties = {
    marginBottom: '20px',
  };

  const formLabel: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    color: '#333',
    marginBottom: '8px',
    fontWeight: 500,
  };

  const formInput: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const submitButton: React.CSSProperties = {
    width: '100%',
    padding: '12px 24px',
    backgroundColor: isSubmitting ? '#ccc' : '#2574e8',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    marginTop: '8px',
    transition: 'background-color 0.2s',
  };

  const messageStyle: React.CSSProperties = {
    marginTop: '12px',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    textAlign: 'center',
    backgroundColor: submitMessage.includes('成功') ? '#d4edda' : '#f8d7da',
    color: submitMessage.includes('成功') ? '#155724' : '#721c24',
    border: `1px solid ${submitMessage.includes('成功') ? '#c3e6cb' : '#f5c6cb'}`,
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px',
    background: 'linear-gradient(135deg, #f4f8ff 0%, #e8f2ff 50%, #dbeafe 100%)',
    width: '100%',
  };

  // 内容区最大宽度与导航栏一致
  const contentWrap: React.CSSProperties = {
    width: '100%',
    maxWidth: contentMaxWidth,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const heroSection: React.CSSProperties = {
    width: '100%',
    minHeight: '400px',
    background: 'linear-gradient(135deg, #2574e8 0%, #1e40af 100%)',
    position: 'relative',
    marginBottom: '64px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const heroTitle: React.CSSProperties = {
    fontSize: '3.2rem',
    fontWeight: 700,
    color: 'white',
    marginBottom: '32px',
    marginTop: '0',
    textAlign: 'center',
    letterSpacing: '2px',
    whiteSpace: 'nowrap',
  };
  const heroBtn: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#2574e8',
    border: '2px solid #2574e8',
    borderRadius: '32px',
    padding: '10px 36px',
    background: 'white',
    cursor: 'pointer',
    fontWeight: 500,
    outline: 'none',
    transition: 'all 0.2s',
    marginTop: '8px',
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#222',
    textAlign: 'center',
    margin: '48px 0 32px 0',
    letterSpacing: '1px',
  };

  // 合作伙伴体系卡片
  const partnerTypes: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginBottom: '48px',
    width: '100%',
    maxWidth: contentMaxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  const partnerCard: React.CSSProperties = {
    background: 'white',
    borderRadius: '18px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    padding: '36px 24px 28px 24px',
    width: CARD_WIDTH,
    minHeight: 320,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };
  const partnerIcon: React.CSSProperties = {
    width: 88,
    height: 88,
    background: '#e0e0e0',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    marginTop: 0,
  };
  const partnerCardTitle: React.CSSProperties = {
    fontSize: '1.35rem',
    fontWeight: 700,
    margin: '0 0 14px 0',
    color: '#222',
    letterSpacing: '1px',
  };
  const partnerCardDesc: React.CSSProperties = {
    fontSize: '1.05rem',
    color: '#666',
    lineHeight: 1.7,
    margin: 0,
  };

  // 合作支持（三板块新排版）
  const supportSection: React.CSSProperties = {
    width: '100%',
    marginBottom: 64,
  };
  const supportGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gridAutoRows: 'minmax(220px, auto)',
    gap: '28px',
    width: '100%',
    maxWidth: contentMaxWidth,
    margin: '0 auto',
    alignItems: 'stretch',
  };
  const supportCardLarge: React.CSSProperties = {
    background: 'linear-gradient(135deg, #eef7ff 0%, #e6f2ff 40%, #e9fbff 100%)',
    borderRadius: 22,
    boxShadow: '0 8px 28px rgba(37, 116, 232, 0.15)',
    padding: '32px 32px',
    position: 'relative',
    overflow: 'hidden',
    gridRow: '1 / span 2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  const supportCardRight: React.CSSProperties = {
    background: 'linear-gradient(135deg, #f4f7ff 0%, #f7fbff 100%)',
    borderRadius: 22,
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    padding: '28px 28px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  const supportTitle: React.CSSProperties = {
    fontSize: '1.6rem',
    fontWeight: 800,
    margin: '0 0 14px 0',
    color: '#0f172a',
    letterSpacing: '0.5px',
  };
  const supportDesc: React.CSSProperties = {
    fontSize: '1.05rem',
    color: '#475569',
    lineHeight: 1.9,
    margin: 0,
  };

  return (
    <>
      <SEOHead
        title="代理合作 - 探客AI手机"
        description="探客AI手机诚邀各界合作伙伴，共同开拓智能营销新市场，合作共赢。"
        keywords="代理合作, 合作伙伴, 智能营销, 渠道合作, 探客AI手机"
        ogTitle="代理合作 - 探客AI手机"
        ogDescription="探客AI手机诚邀各界合作伙伴，共同开拓智能营销新市场，合作共赢。"
      />
      <div style={containerStyle}>
        <section style={heroSection}>
          <div style={{textAlign: 'center', maxWidth: '800px', padding: '0 24px'}}>
            <h1 style={heroTitle}>探客AI增长手机合作伙伴火热招募中</h1>
            <p style={{fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', marginBottom: '48px', lineHeight: 1.6}}>
              诚邀各界合作伙伴，共同开拓智能营销新市场，合作共赢
            </p>
            <button 
              style={heroBtn}
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2574e8';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#2574e8';
              }}
            >
              立即申请合作
            </button>
          </div>
        </section>
        <div style={{ height: 40 }} />
        <div style={contentWrap}>
          {/* 合作伙伴体系 */}
          <div style={sectionTitle}>合作伙伴体系</div>
          <div style={partnerTypes}>
            <div style={partnerCard}>
              <div style={partnerIcon}><span style={{color: '#aaa', fontSize: 32}}>图标</span></div>
              <div style={partnerCardTitle}>生态合作伙伴</div>
              <div style={partnerCardDesc}>与探客AI增长手机基于共同目标和利益而建立的长期合作关系；通过整合双方的资源、产品优势和能力。</div>
            </div>
            <div style={partnerCard}>
              <div style={partnerIcon}><span style={{color: '#aaa', fontSize: 32}}>图标</span></div>
              <div style={partnerCardTitle}>商机合作伙伴</div>
              <div style={partnerCardDesc}>认同探客AI增长手机的文化和产品理念，具备一定客户资源的企业，愿意向其客户推荐探客AI增长手机的产品。</div>
            </div>
            <div style={partnerCard}>
              <div style={partnerIcon}><span style={{color: '#aaa', fontSize: 32}}>图标</span></div>
              <div style={partnerCardTitle}>推广大使</div>
              <div style={partnerCardDesc}>具备专业知识和影响力的个人，致力于推广探客AI增长手机的品牌和产品。</div>
            </div>
          </div>
          {/* 合作支持（图2排版替换） */}
          <div style={sectionTitle}>合作支持</div>
          <div style={supportSection}>
            <div style={supportGrid}>
              {/* 左侧：培训体系（大卡，贯穿两行） */}
              <div style={supportCardLarge}>
                <h3 style={supportTitle}>培训体系</h3>
                <p style={supportDesc}>
                  线上: 产品操作培训课程平台，定期钉钉、飞书、腾讯会议展开产品培训技术难题一对一技术指导等
                </p>
                <div style={{ height: 16 }} />
                <p style={supportDesc}>
                  线下: 集团技术导师+团队驻场指导; 集团总部定期统一开展培训活动
                </p>
              </div>

              {/* 右上：优惠扶持 */}
              <div style={supportCardRight}>
                <h3 style={supportTitle}>优惠扶持</h3>
                <p style={supportDesc}>超额奖励、年度峰会资格、首批补贴</p>
              </div>

              {/* 右下：市场支持 */}
              <div style={supportCardRight}>
                <h3 style={supportTitle}>市场支持</h3>
                <p style={supportDesc}>联合品牌推广、客户撮合、首单陪谈、当地客户流量线索提供等</p>
              </div>
            </div>
          </div>
        </div>

        {/* 申请表单模态窗口 */}
        {isModalOpen && (
          <div style={modalOverlay} onClick={() => setIsModalOpen(false)}>
            <div style={modalContent} onClick={(e) => e.stopPropagation()}>
              <button style={closeButton} onClick={() => setIsModalOpen(false)}>×</button>
              <h2 style={modalTitle}>申请成为探客AI合作伙伴</h2>
              
              <div style={formField}>
                <label style={formLabel}>您的姓名是？ <span style={{color: '#2574e8'}}>*</span></label>
                <input
                  style={formInput}
                  type="text"
                  placeholder="请填写您的姓名"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div style={formField}>
                <label style={formLabel}>您的公司名称是？ <span style={{color: '#2574e8'}}>*</span></label>
                <input
                  style={formInput}
                  type="text"
                  placeholder="请填写您的公司名称"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>

              <div style={formField}>
                <label style={formLabel}>您的职位是？ <span style={{color: '#2574e8'}}>*</span></label>
                <input
                  style={formInput}
                  type="text"
                  placeholder="请填写您的职位"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                />
              </div>

              <div style={formField}>
                <label style={formLabel}>您的手机号是？ <span style={{color: '#2574e8'}}>*</span></label>
                <input
                  style={formInput}
                  type="tel"
                  placeholder="请填写您的手机号"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              <button 
                style={submitButton} 
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? '提交中...' : '提交申请'}
              </button>
              
              {submitMessage && (
                <div style={messageStyle}>
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Partnership;