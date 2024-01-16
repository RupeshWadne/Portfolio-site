'use client'
import Link from 'next/link'
import styles from './Links.module.css'
import { motion } from 'framer-motion';
import { useState } from 'react';

const anim = {
  initial: {width: 0},
  open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
  closed: {width: 0}
}

export default function Links() {

  const projects = [
    {
      title1: "Smart",
      title2: "Tweets",
      src: "twitter.png",
      link: "https://twitter.com/sala_techie"
    },
    {
      title1: "Rate My",
      title2: "Code",
      src: "github1.png",
      link: "https://github.com/RupeshWadne"
    },
    {
      title1: "Lets",
      title2: "Connects",
      src: "linkedin1.webp",
      link: "https://www.linkedin.com/in/rupesh-wadne/"
    },
    {
      title1: "My",
      title2: "Blogs",
      src: "hashnode1.png",
      link: "https://shubhamwadne.hashnode.dev/"
    },
    {
      title1: "+91",
      title2: "9657875857",
      src: "whatsapp.webp",
      link: "https://api.whatsapp.com/send?phone=919657875857&text=Hello,%20more%20information!"
    }
  ]

  return (
    <main id="Contact" className={styles.main}>
      <div className={styles.gallery}>
          {
            projects.map( project => {
              return <Project key={project.title2} project={project}/>
            })
          }
      </div>
    </main>
  )
}


function Project({project}) {

    const [isActive, setIsActive] = useState(false);

    const { title1, title2, src, link } = project;
    return (
        <Link href={link} target="_blank">
        <div onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className={styles.project}>
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <img style={{width: "60px"}} src={src}></img>
            </motion.div>
            <p>{title2}</p>
        </div>
        </Link>
    )
}