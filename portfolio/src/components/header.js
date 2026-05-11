import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <nav className={styles.navList}>
          <ul>
            <li>
              <a title="projects" href="/#projects">Projects</a>
            </li>
            <li>
              <a title="certifications" href="/#certifications">Certifications</a>
            </li>
            <li>
              <a title="about" href="/#about">About</a>
            </li>
            <li>
              <a title="contact" href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={styles.thumbnail}>
          <StaticImage 
            src="../images/logo.png" 
            alt="Ian Lester"
            width={100}
            height={100}
            className={styles.profileImage}
          />
        </div>
      </header>
    </div>
  )
}

export default Header