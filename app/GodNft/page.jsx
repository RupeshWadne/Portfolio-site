'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.scss'
import Texts from '../components/texts/Texts';

export default function Page() {

  const phrase2 = "This divine NFT marketplace boasts an array of exceptional features. Firstly, it enables NFT minting, allowing artists to bring their celestial creations to life in the digital realm."

  const phrase3 = "Moreover, it leverages IPFS for secure and decentralized data storage, preserving the essence of NFTs for eternity. Users can effortlessly buy and sell these divine collectibles, creating a thriving ecosystem."

  const phrase4 = "What sets it apart is the ethereal theme, focusing on God NFTs, making it a unique and spiritual experience. This marketplace not only connects art and technology but also enables creators to explore and showcase their spiritual visions, carving out a niche in the ever-expanding world of NFTs."

  return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.head} >
            <h1>
              God NFT Marketplace
            </h1>
            <p>
            Enter the divine realm of NFTs, a project born from the fascination with the digital art and collectibles revolution. The God NFT Marketplace offers a celestial platform for acquiring and trading exclusive God-themed NFTs. This ethereal marketplace not only supports the buying and selling of NFTs but also empowers creators with minting capabilities, making their divine creations tangible in the digital realm. With the seamless integration of IPFS, artists can effortlessly upload and share their NFT-related data, ensuring the immortality of their digital deities. Step into a world where art and spirituality converge, where NFTs embody the divine, and where creativity knows no bounds.
            </p>
            <div style={{display: "flex", padding: "10px"}}>
              <Link href="https://god-nft-marketplace.vercel.app/marketplace" target="_blank" >
                <button className={styles.btn}>Live Site</button>
              </Link>
              <Link href="https://github.com/RupeshWadne/God-NFT-Marketplace" target="_blank" >
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
