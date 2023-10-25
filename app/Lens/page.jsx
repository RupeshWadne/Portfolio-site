'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.scss'
import Texts from '../components/texts/Texts';

export default function Page() {

  const phrase2 = "This decentralized social media platform brings a blend of standout features to the digital landscape. With Lens Protocol as its backbone, users can explore trending posts, delving deep into people's profiles while forging connections."

  const phrase3 = "The distinctive highlight is the platform's spotlight on the most influential figures within the Lens community, creating a unique lens on popularity. Fueled by Framer Motion, this social hub is a visual marvel, with immersive animations enhancing the user experience."

  const phrase4 = "Here, decentralization meets innovation, offering not just a space for connectivity but a new dimension in social media, where engagement is redefined and relationships take center stage."

  return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.head} >
            <h1>
              Lens Decentralized Social Media platform
            </h1>
            <p>
            Introducing a cutting-edge social media platform, meticulously crafted with Lens Protocol and powered by Next.js, showcasing a realm of decentralized social interaction. This innovative platform offers a dynamic space to explore trending posts and dive into the profiles of individuals who shape the conversation. Notably, it features a unique lens on popularity, spotlighting the most influential figures within the Lens community. Leveraging the power of Framer Motion for captivating animations, this decentralized social hub redefines user engagement and opens up new horizons in the world of social media, where innovation meets connectivity in every scroll and click.
            </p>
            <div style={{display: "flex", padding: "10px"}}>
              <Link href="https://social-media-lens-app.vercel.app/" target="_blank" >
                <button className={styles.btn}>Live Site</button>
              </Link>
              <Link href="https://github.com/RupeshWadne/Social-Media-Lens-App" target="_blank" >
              <button className={styles.btn}>Github</button>
              </Link>
              
            </div>
          </div>
          {/* <video autoPlay muted loop>

            <source src="/pro/vid1.mp4" type="video/mp4"/>

          </video> */}
          
          <Texts phrase={phrase2} />
          
          <Texts phrase={phrase3} />
          <Texts phrase={phrase4} />
        </div>
      </div>
  )
}
