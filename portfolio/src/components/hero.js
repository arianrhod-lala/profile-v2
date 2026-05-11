import * as React from "react"
import * as styles from "./hero.module.css" 
import { FaGithub, FaLinkedin} from "react-icons/fa"

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.content}>
        <h3 className={styles.intro}>Hi!</h3>
        <h1 className={styles.title}>
          I'm Ian Lester. <br />
          Love anything minimal.
        </h1>
        <h3 className={styles.description}>
        I live for some coffee and data. 
        </h3>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://github.com/arianrhod-lala" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://github.com/arianrhod-lala" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <div className={styles.buttonGroup}>
          <a href="mailto:h352774@gmail.com" className={styles.btnGhost}>
            Email Me
          </a>
          <a href="https://calendly.com/" target="_blank" rel="noreferrer" className={styles.btnFull}>
            Schedule a Chat
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Hero