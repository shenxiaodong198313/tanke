import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Tutorials: React.FC = () => {
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
          <h1>{t('page.tutorials.title')}</h1>
          <p>{t('page.tutorials.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 