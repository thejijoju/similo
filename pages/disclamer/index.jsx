import React from 'react';
import Head from 'next/head';

import axios from 'axios';

import { API_URL } from '../../constants/index';
import classes from './styles.module.scss';

export default function DisclamerPage({ pageContent }) {
  return (
    <div className={classes.DisclamerPage}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Similo Disclamer</title>
      </Head>
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(`${API_URL}/admin/pages/disclamer`);

  return {
    props: {
      pageContent: response.data.data.page.content,
    },
  };
}
