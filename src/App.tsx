import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import KuaiNavbar from './components/KuaiNavbar';
import KuaiHero from './components/KuaiHero';
import KuaiFeatures from './components/KuaiFeatures';
import KuaiDetails from './components/KuaiDetails';
import KuaiFooter from './components/KuaiFooter';
import FullPageScroll from './components/FullPageScroll';
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
      <div className="App" style={appStyle}>
        <SEOHead />
        <KuaiNavbar />
        
        <FullPageScroll>
          <KuaiHero />
          <KuaiFeatures />
          <KuaiDetails />
          <KuaiFooter />
        </FullPageScroll>
      </div>
    </HelmetProvider>
  );
}

export default App;
