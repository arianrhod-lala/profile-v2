import * as React from "react"
import * as styles from "./about.module.css"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {/* Using Gatsby's StaticImage for optimization */}
          <StaticImage 
            src="../images/profile-photo.jpg" 
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
            initiatives as the Assistant Academics Head for the TUPM-DOST 
            Scholars' Club.
          </p>
          <p>
            I’m always learning, so I've focused my engineering skills on 
            Cloud Computing with AWS and Data Science. I enjoy building 
            projects that solve real problems, like e-commerce systems for 
            agriculture or survival analysis dashboards.
          </p>
          <p>
            I love street food, hanging out with friends, and I'm always 
            advocating for a good game session or a long walk while traveling.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About