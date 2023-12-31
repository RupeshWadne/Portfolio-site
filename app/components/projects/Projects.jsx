'use client'
import styles from './Projects.module.scss'
import { useState } from 'react'
import Project from '../project/Project'
import Modal from '../modal/Modal';
import Work1 from "../../../public/assets/Pro1.png"
import Work2 from "../../../public/assets/Pro2.png"
import Work3 from "../../../public/assets/Pro3.png"
import Work4 from "../../../public/assets/Pro4.png"
import Work5 from "../../../public/assets/Pro5.png"
import Work6 from "../../../public/assets/Pro6.png"
import Work7 from "../../../public/assets/Pro7.png"
import Work8 from "../../../public/assets/Pro8.png"
import Work9 from "../../../public/assets/Pro1.png"

export const projectsData = [
      
      {
        id: 1,
        image: Work7,
        title: "Fast Reach",
        location: "FastReach",
        category: "Web3",
        color: "#8C8C8C",
      },
      {
        id: 2,
        image: Work8,
        title: "Flowtter",
        location: "Flowtter",
        category: "Web3",
        color: "#000000",
      },
      {
        id: 3,
        image: Work1,
        title: "GOD NFT MARKETPLACE",
        location: "GodNft",
        category: "Web3",
        color: "#000000",
      },
      {
        id: 4,
        image: Work2,
        title: "LENS SOCIAL MEDIA",
        location: "Lens",
        category: "Web3",
        color: "#8C8C8C",
        
      },
      {
        id: 5,
        image: Work3,
        title: "DEVTA DAO",
        category: "Web3",
        color: "#EFE8D3",
        link: "https://devta-dao.vercel.app/"
      },
      {
        id: 6,
        image: Work4,
        title: "AI-Image-Generating",
        category: "Fullstack",
        color: "#000000",
        link: "https://ai-image-generation-app.netlify.app/"
      },
      {
        id: 7,
        image: Work5,
        title: "Memory Game",
        category: "Frontend",
        color: "#8C8C8C",
        link: "https://memory-game-app-react.netlify.app/"
      },
      {
        id: 8,
        image: Work6,
        title: "Modern App",
        category: "Frontend",
        color: "#EFE8D3",
        link: "https://modern-ui-app-react.netlify.app/"
      },
]


export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <h1>PROJECTS</h1>
        {projectsData.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              location={project.location}
              category={project.category}
              link={project.link}
              setModal={setModal}
              key={index}
            />
          )
        })}
      </div>
      <Modal modal={modal} projects={projectsData}/>
    </main>
  )
}
