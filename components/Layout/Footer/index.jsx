/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.logo}>
        <div className={classes.imageContainer}>
          <Image src="/images/Logo2.svg" width={81} height={51} />
        </div>
        <span>Similo © {new Date().getFullYear()}</span>
      </div>
      <div className={classes.links}>
        <Link href="/privacy/policy">
          <a>Privacy</a>
        </Link>
        <Link href="/">
          <a>Terms</a>
        </Link>
        <Link href="/">
          <a>About Similo</a>
        </Link>
      </div>
    </footer>
  );
}
