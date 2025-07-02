import React, { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'zh-CN' as Language, name: '简体中文', display: '中文' },
    { code: 'en' as Language, name: 'English', display: 'English' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    color: isScrolled ? '#000000a6' : 'rgba(255, 255, 255, 0.65)',
    padding: '4px 12px',
    borderRadius: '6px',
    fontWeight: '400',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    position: 'relative',
    transition: 'all 0.3s ease',
    minWidth: '80px',
    justifyContent: 'center',
    height: '32px'
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '4px',
    backgroundColor: 'white',
    border: '1px solid #d9d9d9',
    borderRadius: '6px',
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    zIndex: 1000,
    minWidth: '120px',
    overflow: 'hidden',
    display: isOpen ? 'block' : 'none'
  };

  const dropdownItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#000000d9',
    transition: 'background-color 0.2s ease',
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'center'
  };

  const activeItemStyle: React.CSSProperties = {
    ...dropdownItemStyle,
    backgroundColor: '#f6f6f6',
    color: '#1677ff',
    fontWeight: '500'
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        style={buttonStyle}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = isScrolled ? '#d9d9d9' : 'rgba(255, 255, 255, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        }}
      >
        <span>{currentLanguage.display}</span>
        <span style={{ 
          fontSize: '12px', 
          transform: isOpen ? 'rotate(180deg)' : 'none', 
          transition: 'transform 0.2s ease',
          opacity: 0.65
        }}>
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
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }
            }}
            onMouseLeave={(e) => {
              if (lang.code !== language) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
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