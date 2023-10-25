'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.scss'
import Texts from '../components/texts/Texts';

export default function Page() {

  const phrase = "I used Airstack for fetching all the blockchain data related to every entered POAP ID, such as event details and information about all the people who hold them and to know is their XMTP enabled. If XMTP enabled we directly messege the person.";

  const phrase2 = "This DApp addresses the common challenge of fostering meaningful connections at events and conferences. Traditional event networking often involves cumbersome exchanges of contact information, resulting in lost opportunities. By utilizing POAP IDs, this DApp simplifies the process."

  const phrase3 = "It offers a de-centralized platform for event attendees to access a comprehensive database of participants, allowing them to connect and communicate instantly. The integration of XMTP ensures secure, cross-chain messaging, overcoming the barriers of disparate blockchain networks."

  const phrase4 = "Additionally, the DApp introduces a powerful broadcasting feature, resolving the issue of mass communication. It enhances the efficiency and depth of connections while streamlining event networking for participants."

  return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.head} >
            <h1>
              Fast Reach
            </h1>
            <p>
            Introducing a groundbreaking decentralized application (DApp) that redefines event networking and connectivity. This innovative platform leverages POAP (Proof of Attendance Protocol) IDs to provide comprehensive event attendee data and enables seamless networking. With the ability to connect with fellow attendees via direct messaging, the DApp empowers users to establish meaningful connections during and after events. What sets it apart is the integration of XMTP (Cross-Chain Messaging Protocol) for enhanced communication. Furthermore, it offers a unique broadcasting feature, allowing users to share messages with all event participants simultaneously, fostering collaboration and community building like never before.
            </p>
            <div style={{display: "flex", padding: "10px"}}>
              <Link href="https://airstack-xmtp.vercel.app/" target="_blank" >
                <button className={styles.btn}>Live Site</button>
              </Link>
              <Link href="https://github.com/RupeshWadne/Airstack-XMTP" target="_blank" >
              <button className={styles.btn}>Github</button>
              </Link>
              
            </div>
          </div>
          <video style={{borderRadius: "20px"}} autoPlay muted loop>

            <source src="/pro/fastreach.mp4" type="video/mp4"/>

          </video>
          
          <Texts phrase={phrase2} />
          
          <Texts phrase={phrase3} />
          <Texts phrase={phrase4} />
        </div>
      </div>
  )
}
