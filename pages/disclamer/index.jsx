import React from 'react';

import axios from 'axios';

import { API_URL } from '../../constants/index';
import classes from './styles.module.scss';

export default function DisclamerPage({ pageContent }) {
  return (
    <div className={classes.DisclamerPage}>
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
