'use client';
import { useState } from 'react'
import {
  ThirdwebProvider,
  metamaskWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

import Button from "./components/button/Button";
import { useRef } from 'react';
import styles from './page.module.css'
import Header from './components/header/Header';
import StickyCursor from './components/stickyCousor/StickyCursor';
import Hero from './components/Hero/Hero';
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Links from './components/links/Links';
import Bg from "./components/bg/Bg"
import Footer from './components/footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from "./components/nav/Nav"


const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
}

const activeChain = "mumbai";
const clientId = process.env.CLIENT_ID

export default function Home() {
  const stickyElement = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={clientId}
      switchToActiveChain={true}
      supportedWallets={[
        metamaskWallet(),
        embeddedWallet(),
      ]}
    >
      <main className={styles.main}>

        <Header ref={stickyElement} />
        <StickyCursor stickyElement={stickyElement} />
        <Hero />
        <div className={styles.header}>
          <motion.div
            className={styles.menu}
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>
              {isActive && <Nav />}
            </AnimatePresence>
          </motion.div>
          <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
        </div>
        <About />
        <Skills />
        {/* <Bg /> */}
        <Projects />
        <Links />
        <Footer />
      </main>
    </ThirdwebProvider>
  )
}