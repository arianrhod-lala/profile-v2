import * as React from "react"
import * as styles from "./about.module.css"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {}
          <StaticImage 
            src="../images/profile.png" 
            alt="Ian Lester"
            placeholder="blurred"
            className={styles.profileImg}
          />
        </div>
        
        <div className={styles.textContent}>
          <h2 className={styles.title}>About Me</h2>
          <p>
            Currently based in Manila, I am a 3rd-year BSIT student at TUP Manila 
            and a DOST Scholar. I’ve spent the last few years leading academic 
            initiatives both inside and outside the university.
          </p>
          <p>
            I’m always learning, so I've focused my skills on 
            Data Science and Analytics, while I enjoy building things
            that I like doing.
          </p>
          <p>
            I love going out, hanging out with friends, and I'm always 
            advocating for a good game session or a long walk while traveling. 
            (p.s. picture taken from a digicam!)
          </p>
        </div>
      </div>
    </section>
  )
}

export default About