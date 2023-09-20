import { Inter } from 'next/font/google';
import SidebarMenu from './SidebarMenu';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SidebarMenu />
      <div className={`content ${inter.className}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
