import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.heading}>rupeshwadne96k@gmail.com</h1>
      <p>design-credits:@OlivierLarose</p>

      <div className={styles.links}>
        <Link href="https://twitter.com/sala_techie">
          <img src="twitterx.png" alt="" />
        </Link>
        <img src="github1.png" alt="" />
      </div>
    </div>
  )
}

export default Footer
