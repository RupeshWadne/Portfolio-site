'use client'
import React from 'react'
import styles from './Project.module.scss'
import Link from 'next/link'

export default function Project({
  index,
  title,
  location,
  link,
  setModal,
  category,
}) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index })
      }}
      onMouseLeave={() => {
        setModal({ active: false, index })
      }}
      className={styles.project}
    >
      <Link href={location ? `/${location}` : link}>
        <div className={styles.main}>
          <h2>{title}</h2>
          <div style={{width: "35%"}}>
          <h3>{category}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
