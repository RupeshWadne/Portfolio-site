import styles from './Skills.module.scss'
import gsap from 'gsap'

const projects = [
  {
    title: 'HTML & CSS',
    color: '#F06318',
  },
  {
    title: 'Javascript',
    color: '#DCF018',
  },
  {
    title: 'React.js (Next)',
    color: '#18F0E8',
  },
  {
    title: 'Solidity',
    color: '#8C0CF0',
  },
  {
    title: 'Cadence',
    color: '#F0183C',
  },
  {
    title: 'Typescript',
    color: '#0C34F0',
  },
  {
    title: 'Tailwind CSS, Framer Motion',
    color: '#0CBCF0',
  },
  {
    title: 'Ethers.js, Viem',
    color: '#F0BA18',
  },
  {
    title: 'Thirdweb, Lens, Flow',
    color: '#91F018',
  },
  {
    title: 'Airstack, XMTP, Lit',
    color: '#f01872',
  },
]

export default function Skills() {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: '-2vw',
      backgroundColor: projects[index].color,
      duration: 0.3,
    })
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: '0',
      backgroundColor: 'white',
      duration: 0.3,
      delay: 0.1,
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        <p className={styles.sub}>My Tools and Skills</p>
        {projects.map((project, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index)
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index)
              }}
              key={index}
            >
              <p>{project.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
