import React from 'react';

export default function PrivacyPageWithRedirect() {
  return <div />;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/privacy/policy',
      permanent: true,
    },
  };
}
