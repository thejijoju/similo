import React from 'react';
import Image from 'next/image';

import classes from './styles.module.scss';

export default function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.logo}>
        <Image src="/images/Logo1.svg" width={191} height={79} />
      </div>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="What company or brand do you want to compare?"
          className={classes.searchBar}
        />
      </div>
    </header>
  );
}
