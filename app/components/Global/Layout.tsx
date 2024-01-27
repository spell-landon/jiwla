import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='w-full max-w-7xl mx-auto px-4 h-full'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
