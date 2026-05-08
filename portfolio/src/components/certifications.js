import * as React from "react"
import * as styles from "./certifications.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Certifications = () => {
  return (
    <section className={styles.certSection}>
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <div className={styles.certGrid}>
        
        <div className={styles.badgeCard}>
          <StaticImage 
            src="../images/asana-cert.png" 
            alt="Asana Certified"
            placeholder="blurred"
            className={styles.badgeImage}
          />
        </div>

        <div className={styles.badgeCard}>
          <StaticImage 
            src="../images/aws-cert.png" 
            alt="AWS Certified"
            placeholder="blurred"
            className={styles.badgeImage}
          />
        </div>

        <div className={styles.badgeCard}>
          <StaticImage 
            src="../images/datacamp-cert.png" 
            alt="Datacamp Associate Data Scientist"
            placeholder="blurred"
            className={styles.badgeImage}
          />
        </div>

      </div>
    </section>
  )
}

export default Certifications