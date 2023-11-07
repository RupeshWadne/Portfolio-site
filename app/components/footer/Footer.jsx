import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h1 className={styles.heading}>
                rupeshwadne96k@gmail.com
            </h1>
            <p style={{color: "white"}}>design-credits:@OlivierLarose</p>

            <div className={styles.links}>
                <img src="twitterx.png" alt="" />
                <img src="github1.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
