import React from 'react'
import styles from './Header.module.css'
import resumeSvg from "../../Assets/resume4.svg"


function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>

        <p className={styles.heading}>
            A <span>Resume</span> that Stands Out!
        </p>
        <p className={styles.heading}>
            Make your Own one! The Resume 
            <span> You deserve </span>
        </p>

      </div>

      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>

    </div>
  )
}

export default Header