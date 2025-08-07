import React from 'react';
import KuaiNavbar from './KuaiNavbar';
import KuaiFooter from './KuaiFooter';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <KuaiNavbar />
      <div style={{ flex: 1, margin: 0, padding: 0 }}>{children}</div>
      <KuaiFooter />
    </div>
  );
};

export default PageLayout; 