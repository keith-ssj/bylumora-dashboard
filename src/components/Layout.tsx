import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout wraps pages with a sticky header, footer and provides the primary
 * dark background.  It also sets up padding to ensure content doesn't hide
 * behind the fixed header.  Use this component at the top of each page.
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-primary text-white">
      <Header />
      <main className="flex-1 pt-16 pb-12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
