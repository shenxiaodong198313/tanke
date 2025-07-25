import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import { ModalProvider, useModal } from './contexts/ModalContext';
import SEOHead from './components/SEOHead';
import KuaiNavbar from './components/KuaiNavbar';
import KuaiFooter from './components/KuaiFooter';
import PageLayout from './components/PageLayout';
import FloatingToolbar from './components/FloatingToolbar';
import ContactModal from './components/ContactModal';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 页面组件
import AiMarketing from './components/pages/AiMarketing';
import AiLive from './components/pages/AiLive';
import AiCall from './components/pages/AiCall';
import Partnership from './components/pages/Partnership';
import Contact from './components/pages/Contact';

// 首页内容组件
import KuaiHero from './components/KuaiHero';
import HeroGeometric from './components/ShapeHero';
import KuaiFeatures from './components/KuaiFeatures';
import KuaiDetails from './components/KuaiDetails';
import AIAssistant from './components/AIAssistant';
import AIStreamingSolutions from './components/AIStreamingSolutions';
import MarketingToolsShowcase from './components/MarketingToolsShowcase';
import IndustryCases from './components/IndustryCases';
import Pricing from './components/Pricing';
import IndustryShowcase from './components/IndustryShowcase';
import FullPageScroll from './components/FullPageScroll';
import CallToAction from './components/CallToAction';

const AppContent: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useModal();

  return (
    <BrowserRouter>
      <SEOHead />
      <Routes>
        {/* 首页 */}
        <Route path="/" element={
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <KuaiNavbar />
            <div style={{ flex: 1 }}>
              {/* 取消整屏滑动，直接普通滚动 */}
              <div>
                <KuaiHero />
                <HeroGeometric />
                <KuaiFeatures />
                <KuaiDetails />
                <AIAssistant />
                <AIStreamingSolutions />
                <MarketingToolsShowcase />
                <IndustryCases />
                <Pricing />
                <IndustryShowcase />
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, display: 'flex' }}>
                    <CallToAction />
                  </div>
                  <KuaiFooter />
                </div>
              </div>
            </div>
          </div>
        } />
        {/* 产品方案子页面 */}
        <Route path="/ai-marketing" element={<PageLayout><AiMarketing /></PageLayout>} />
        <Route path="/ai-live" element={<PageLayout><AiLive /></PageLayout>} />
        <Route path="/ai-call" element={<PageLayout><AiCall /></PageLayout>} />
        {/* 代理合作 */}
        <Route path="/partnership" element={<PageLayout><Partnership /></PageLayout>} />
        {/* 联系我们 */}
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      </Routes>
      {/* 右侧悬浮工具条 */}
      <FloatingToolbar />
      {/* 全局弹窗 */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </BrowserRouter>
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
