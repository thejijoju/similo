import React from 'react';

import Header from './Header';
import HeaderWithoutSearch from './HeaderWithoutSearch';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      {typeof window !== 'undefined' &&
      (window.location.href.includes('/privacy/') ||
        window.location.href.includes('/disclamer')) ? (
        <HeaderWithoutSearch />
      ) : (
        <Header />
      )}
      {children}
      <Footer />
    </div>
  );
}
