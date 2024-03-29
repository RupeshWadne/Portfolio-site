'use client'
import { useEffect, useRef, useState } from 'react'
import { useTransform, useScroll, motion } from 'framer-motion'

import styles from './Bg.module.scss'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'

const images = [
  'Pro11.png',
  'Pro21.png',
  'Pro31.png',
  'Pro41.png',
  'Pro51.png',
  'Pro61.png',
  'Pro71.png',
  'Pro81.png',
  'Pro61.png',
  'Pro21.png',
  'Pro31.png',
  'Pro41.png',
]

export default function Home() {
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })
  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div className={styles.gallery} style={{ position: 'relative' }}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}


const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image
              width={500}
              height={500}
              src={`/assets/${src}`}
              alt="image"
            />
          </div>
        )
      })}
    </motion.div>
  )
}
