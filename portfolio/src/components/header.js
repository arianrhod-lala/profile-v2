import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.css"
import scrollToSection from "./scroll"
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <nav className={styles.navList}>
          <ul>
            <li>
              <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>Projects</a>
            </li>
            <li>
              <a href="#certifications" onClick={(e) => scrollToSection(e, "certifications")}>Certifications</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a>
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