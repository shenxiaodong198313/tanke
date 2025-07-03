import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import SEOHead from './components/SEOHead';
import KuaiNavbar from './components/KuaiNavbar';
import KuaiHero from './components/KuaiHero';
import KuaiFeatures from './components/KuaiFeatures';
import KuaiDetails from './components/KuaiDetails';
import AIAssistant from './components/AIAssistant';
import IndustryCases from './components/IndustryCases';
import Pricing from './components/Pricing';
import IndustryShowcase from './components/IndustryShowcase';
import FullPageScroll from './components/FullPageScroll';
import KuaiFooter from './components/KuaiFooter';
import FloatingToolbar from './components/FloatingToolbar';
import './App.css';

function App() {
  const appStyle: React.CSSProperties = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    overflowX: 'hidden'
  };

  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="App" style={appStyle}>
          <SEOHead />
          <KuaiNavbar />
          
          <FullPageScroll>
            <KuaiHero />
            <KuaiFeatures />
            <KuaiDetails />
            <AIAssistant />
            <IndustryCases />
            <Pricing />
            <IndustryShowcase />
            <KuaiFooter />
          </FullPageScroll>
          
          {/* 右侧悬浮工具条 */}
          <FloatingToolbar />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
