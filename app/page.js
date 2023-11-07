'use client';
import { useRef } from 'react';
import styles from './page.module.scss'
import Header from './components/header/Header';
import StickyCursor from './components/stickyCousor/StickyCursor';
import Hero from './components/Hero/Hero';
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Links from './components/links/Links';
import Bg from "./components/bg/Bg"
import Footer from './components/footer/Footer';

export default function Home() {
  const stickyElement = useRef(null);
  
  return (
    <main className={styles.main}>
      <Header ref={stickyElement}/>
      <StickyCursor stickyElement={stickyElement}/>
      <Hero />
      <About />
      <Skills />
      <Bg />
      <Projects />
      <Links />
      <Footer />
    </main>
  )
}