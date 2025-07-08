import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AiMarketing: React.FC = () => {
  const { t } = useLanguage();

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px', // 为固定导航栏留出空间
    display: 'flex',
    flexDirection: 'column'
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5f5'
  };

  const placeholderStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#666',
    fontSize: '1.2rem'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={placeholderStyle}>
          <h1>AI营销产品页面</h1>
          <p>页面内容正在开发中...</p>
        </div>
      </div>
    </div>
  );
};

export default AiMarketing; 