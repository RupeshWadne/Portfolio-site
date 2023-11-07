import { useRef } from 'react'
import Image from 'next/image'
import styles from './Hero.module.scss'

export default function Hero() {
  const plane = useRef(null)
  const image = useRef(null)

  const maxRotate = 45

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4
    const rotateX = maxRotate * x - maxRotate / 2
    const rotateY = (maxRotate * y - maxRotate / 2) * -1
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  const manageImageMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4
    const rotateX = maxRotate * x - maxRotate / 2
    const rotateY = (maxRotate * y - maxRotate / 2) * -1
    image.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  return (
    <main className={styles.main}>
    <div
      onMouseMove={(e) => {
        manageMouseMove(e)
      }}
      className={styles.container}
    >
      <div ref={plane} className={styles.body}>
        <Text3d primary={'Rupesh'} secondary={'Wadne'} color={'#411530'} />
        <Text3d primary={'Blockchain'} secondary={'Web3'} color={'#2B2730'} />
        <Text3d primary={'FullStack'} secondary={'Developer'} color={'#072541'} />
      </div>

      <div
        onMouseMove={(e) => {
          manageImageMove(e)
        }}
        className={styles.container}
      >
        <div ref={image} className={styles.body}>
          <div className={styles.frame}>
            <div
              style={{
                zIndex: '0',
                marginLeft: '220px',
                marginTop: '-10px',
                position: "absolute",
                
              }}
            >
              <p style={{ marginLeft: '-50px', position: 'relative', }}>My partner</p>
              <p style={{ marginLeft: '-80px', position: 'relative', }}>(future co-founder 🫡✌️)</p>
              <img className={styles.arrow} src="curved-arrow.svg" />
            </div>
            <div
              style={{
                zIndex: '0',
                marginLeft: '500px',
                marginTop: '-40px',
                position: "absolute"
              }}
            >
              <p style={{ marginLeft: '20px', position: 'relative', }}>It&apos;s Me</p>
              <p style={{ marginLeft: '-10px', position: 'relative', }}>(future founder 🚀🚀)</p>
              <img style={{transform: "rotate(70deg)"}} className={styles.arrow} src="curved-arrow.svg" />
            </div>
            <Image
              className={styles.img}
              quality={100}
              width={800}
              height={800}
              src={`/Portfolio.jpeg`}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

function Text3d({ primary, secondary, color }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p style={{color: `${color}`}} className={styles.secondary}>{secondary}</p>
    </div>
  )
}

