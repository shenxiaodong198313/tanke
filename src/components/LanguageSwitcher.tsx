import React, { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'zh-CN' as Language, name: '简体中文', flag: '🇨🇳' },
    { code: 'zh-TW' as Language, name: '繁體中文', flag: '🇹🇼' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
    { code: 'ko' as Language, name: '한국어', flag: '🇰🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: isScrolled ? '1px solid #e8eaed' : '1px solid rgba(255, 255, 255, 0.3)',
    color: isScrolled ? '#5f6368' : 'rgba(255, 255, 255, 0.9)',
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative',
    transition: 'all 0.3s ease',
    minWidth: '120px',
    justifyContent: 'space-between'
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '0.5rem',
    backgroundColor: 'white',
    border: '1px solid #e8eaed',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
    minWidth: '160px',
    overflow: 'hidden',
    display: isOpen ? 'block' : 'none'
  };

  const dropdownItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    color: '#5f6368',
    transition: 'background-color 0.2s ease',
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left'
  };

  const activeItemStyle: React.CSSProperties = {
    ...dropdownItemStyle,
    backgroundColor: '#f8f9fa',
    color: '#1a73e8',
    fontWeight: '500'
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        style={buttonStyle}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isScrolled ? '#f8f9fa' : 'rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>{currentLanguage.flag}</span>
          <span>{currentLanguage.code === 'zh-CN' ? '中文' : 
                currentLanguage.code === 'zh-TW' ? '中文' :
                currentLanguage.code === 'en' ? 'EN' :
                currentLanguage.code === 'ja' ? '日本語' : '한국어'}</span>
        </span>
        <span style={{ fontSize: '0.75rem', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
          ▼
        </span>
      </button>

      <div style={dropdownStyle}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            style={lang.code === language ? activeItemStyle : dropdownItemStyle}
            onClick={() => handleLanguageChange(lang.code)}
            onMouseEnter={(e) => {
              if (lang.code !== language) {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
              }
            }}
            onMouseLeave={(e) => {
              if (lang.code !== language) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>

      {/* 点击外部关闭下拉菜单 */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher; 