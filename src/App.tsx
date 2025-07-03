import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import { ModalProvider, useModal } from './contexts/ModalContext';
import SEOHead from './components/SEOHead';
import KuaiNavbar from './components/KuaiNavbar';
import KuaiHero from './components/KuaiHero';
import KuaiFeatures from './components/KuaiFeatures';
import KuaiDetails from './components/KuaiDetails';
import AIAssistant from './components/AIAssistant';
import AIStreamingSolutions from './components/AIStreamingSolutions';
import MarketingToolsShowcase from './components/MarketingToolsShowcase';
import IndustryCases from './components/IndustryCases';
import Pricing from './components/Pricing';
import IndustryShowcase from './components/IndustryShowcase';
import FullPageScroll from './components/FullPageScroll';
import KuaiFooter from './components/KuaiFooter';
import FloatingToolbar from './components/FloatingToolbar';
import ContactModal from './components/ContactModal';
import './App.css';

const AppContent: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useModal();
  
  const appStyle: React.CSSProperties = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    overflowX: 'hidden'
  };

  return (
    <div className="App" style={appStyle}>
      <SEOHead />
      <KuaiNavbar />
      
      <FullPageScroll>
        <KuaiHero />
        <KuaiFeatures />
        <KuaiDetails />
        <AIAssistant />
        <AIStreamingSolutions />
        <MarketingToolsShowcase />
        <IndustryCases />
        <Pricing />
        <IndustryShowcase />
        <KuaiFooter />
      </FullPageScroll>
      
      {/* 右侧悬浮工具条 */}
      <FloatingToolbar />
      
      {/* 全局弹窗 */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ModalProvider>
          <AppContent />
        </ModalProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
