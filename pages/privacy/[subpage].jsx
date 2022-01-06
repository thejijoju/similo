/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { FaCalendar } from 'react-icons/fa';
import classnames from 'classnames';
import axios from 'axios';
import amplitude from 'amplitude-js';

import classes from './styles.module.scss';
import { API_URL } from '../../constants';

const createDateString = (date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  if (!date) {
    return '';
  }
  const dateObj = new Date(date);

  return `${
    monthNames[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};

export default function PrivacyPage({ pageContent, updatedAt }) {
  const router = useRouter();
  const { subpage } = router.query;

  useEffect(() => {
    if (router.isReady) {
      amplitude.getInstance().logEvent('About Page Opened');
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Similo Privacy</title>
      </Head>
      <main className={classes.PrivacyPage}>
        <div className={classes.sideBar}>
          <h2>Legal information</h2>
          <ul>
            <li className={classnames(subpage === 'policy' && classes.active)}>
              <Link href="/privacy/policy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className={classnames(subpage === 'notice' && classes.active)}>
              <Link href="/privacy/notice">
                <a>Legal notice</a>
              </Link>
            </li>
            <li className={classnames(subpage === 'methods' && classes.active)}>
              <Link href="/privacy/methods">
                <a>Referencing, dereferencing and classification methods</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
          <div className={classes.updatedAt}>
            <FaCalendar style={{ marginRight: 6 }} /> Last update:{' '}
            {createDateString(updatedAt)}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await axios.get(`${API_URL}/admin/pages/${params.subpage}`);

  return {
    props: {
      pageContent: response.data.data.page
        ? response.data.data.page.content
        : '',
      updatedAt: response.data.data.page
        ? response.data.data.page.updatedAt
        : '',
    },
  };
}
