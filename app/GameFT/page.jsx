'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.scss'
import Texts from '../components/texts/Texts'

export default function Page() {
  const phrase =
    'I used Airstack for fetching all the blockchain data related to every entered POAP ID, such as event details and information about all the people who hold them and to know is their XMTP enabled. If XMTP enabled we directly messege the person.'

  const phrase2 =
    'This DApp addresses the common challenge of fostering meaningful connections at events and conferences. Traditional event networking often involves cumbersome exchanges of contact information, resulting in lost opportunities. By utilizing POAP IDs, this DApp simplifies the process.'

  const phrase3 =
    'It offers a de-centralized platform for event attendees to access a comprehensive database of participants, allowing them to connect and communicate instantly. The integration of XMTP ensures secure, cross-chain messaging, overcoming the barriers of disparate blockchain networks.'

  const phrase4 =
    'Additionally, the DApp introduces a powerful broadcasting feature, resolving the issue of mass communication. It enhances the efficiency and depth of connections while streamlining event networking for participants.'

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h1>GameFT(ETHIndia2023)</h1>
          <p>
            Welcome to GameFT-6551, First-Ever Exclusive erc-6551 Marketplace
            Now bundle your In-game assets with your game identity! Innovative Token Standard:- ERC-6551 transforms NFTs into intelligent contracts
            with smart wallet capabilities. Dynamic Gaming Ecosystem:- Immerse
            yourself in a diverse gaming world where ERC-6551 NFT Profiles act
            as gateways to various games. Customizable Profiles:- Personalize
            your ERC-6551 NFT Profiles with unique ERC-20, ERC-721, or ERC-1155
            assets. Token-Gating Features:- Unlock exclusive features by
            utilizing token-gating, enhancing your gaming experience. Future of
            Blockchain Gaming:- Dive into the cutting-edge GameFi Marketplace,
            where innovation converges with play.
          </p>
          <div style={{ display: 'flex', padding: '10px' }}>
            <Link href="https://game-ft-6551.vercel.app/" target="_blank">
              <button className={styles.btn}>Live Site</button>
            </Link>
            <Link
              href="https://github.com/RupeshWadne/GameFT-ETHIndia"
              target="_blank"
            >
              <button className={styles.btn}>Github</button>
            </Link>
          </div>
        </div>
        <iframe style={{width: "100%", height: "80vh"}} src="https://www.youtube.com/embed/_-jEt-aNobM?si=cZhHW_qBwfzP3V9B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        {/* <Texts phrase={phrase2} />

        <Texts phrase={phrase3} />
        <Texts phrase={phrase4} /> */}
      </div>
    </div>
  )
}
