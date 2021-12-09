import React from 'react';

import { useRouter } from 'next/router';

import Header from './Header';
import HeaderWithoutSearch from './HeaderWithoutSearch';
import Footer from './Footer';

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      {router.pathname.includes('/privacy/') ||
      router.pathname.includes('/disclamer') ? (
        <HeaderWithoutSearch />
      ) : (
        <Header />
      )}
      {children}
      <Footer />
    </div>
  );
}
