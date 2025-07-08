import React from 'react';
import KuaiNavbar from './KuaiNavbar';
import KuaiFooter from './KuaiFooter';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <KuaiNavbar />
      <div style={{ flex: 1 }}>{children}</div>
      <KuaiFooter />
    </div>
  );
};

export default PageLayout; 