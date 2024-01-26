'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.scss'
import Texts from '../components/texts/Texts';

export default function Page() {

  const phrase2 = "This DApp solves the persisting issues in the world of social media. It tackles the problem of centralized control and data ownership, offering a decentralized platform on the Flow Blockchain."

  const phrase3 = "Users have the autonomy to create and monetize their content, eliminating the intermediaries that often benefit from creators' work. By enabling the buying and selling of posts, it introduces a unique economy into social networking."

  const phrase4 = "This empowers content creators by allowing them to directly profit from their work. It not only offers a secure and censorship-resistant environment but also revolutionizes the concept of ownership and control in social media, providing a more equitable and transparent user experience."

  return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.head} >
            <h1>
              Flowtter
            </h1>
            <p>
            Introducing the DApp that emerged from my participation in LearnWeb3DAO&apos;s hackathon—a groundbreaking decentralized social media platform built on the Flow Blockchain. This innovative platform allows users to create accounts and post content just like traditional web2 social media platforms. However, it goes a step further by seamlessly integrating decentralized features. Users can not only engage with posts through comments and likes but also, uniquely, purchase posts if the creators choose to sell them. This transformative approach redefines the way we interact with content, offering a decentralized, user-centric, and economically empowering social media experience.
            </p>
            <div style={{display: "flex", padding: "10px"}}>
              <Link href="https://flowtter.vercel.app/" target="_blank" >
                <button className={styles.btn}>Live Site</button>
              </Link>
              <Link href="https://github.com/RupeshWadne/LW3DHACKATHON" target="_blank" >
              <button className={styles.btn}>Github</button>
              </Link>
              
            </div>
          </div>
          <iframe style={{width: "100vw", height: "80vh"}} src="https://www.youtube.com/embed/A0ZZaKCNPZg?si=2xuQKXojLGZuBRHn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
          <Texts phrase={phrase2} />
          
          <Texts phrase={phrase3} />
          <Texts phrase={phrase4} />
        </div>
      </div>
  )
}
