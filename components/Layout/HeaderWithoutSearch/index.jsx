/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './styles.module.scss';

export default function HeaderWithoutSearch() {
  return (
    <header className={classes.HeaderWithoutSearch}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
            <Image src="/images/Logo1.svg" width={191} height={79} />
          </a>
        </Link>
      </div>
    </header>
  );
}
