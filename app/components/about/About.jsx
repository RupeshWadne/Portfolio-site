'use client'
import styles from './About.module.scss'
import { useState } from 'react'
import Links from '../links/Links'
import { motion } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <div>
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          I&apos;m diving into open-source web3 projects, crafting solutions for
          real-world issues, and on the lookout for new opportunities.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I&apos;m a <span>Web3/Blockchain </span> Full-stack Developer with strong
          focus on developing high quality & impactful Decentralized
          Applications.
        </p>
      </div>
    </main>
      </div>
  )
}
