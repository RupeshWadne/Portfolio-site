import React from 'react'
import { forwardRef } from 'react';
import styles from '../header/Header.module.scss';

const Header = forwardRef(function index(props, ref) {
  return (
    <div className={styles.header}>
          <div className={styles.burger}>
            <div ref={ref} className={styles.bounds}></div>
          </div>
    </div>
  )
})

export default Header
