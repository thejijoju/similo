import React from 'react';
import Head from 'next/head';

import Filters from '@/components/Filters';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Similo</title>
      </Head>
      <Filters />
    </div>
  );
}
