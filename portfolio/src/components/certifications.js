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
            src="../images/asana-admin.png" 
            alt="Asana Administrator"
            placeholder="blurred"
            className={styles.badgeImage}
          />
        </div>

        <div className={styles.badgeCard}>
          <StaticImage 
            src="../images/asana-workflow.png" 
            alt="Asana Workflow"
            placeholder="blurred"
            className={styles.badgeImage}
          />
        </div>

        <div className={styles.badgeCard}>
          <StaticImage 
            src="../images/datacamp-cert.png" 
            alt="Datacamp Associate Data Scientist"
            placeholder="blurred"
            className={styles.DatacampImage}
          />
        </div>

      </div>
    </section>
  )
}

export default Certifications