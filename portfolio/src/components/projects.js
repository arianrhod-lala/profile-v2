import * as React from "react"
import * as styles from "./projects.module.css"
import { FiGithub, FiExternalLink } from "react-icons/fi";


const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Selected Projects</h2>
      
      <div className={styles.projectsGrid}>
        {/* project card 1 */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Kubo</h3>
            <p className={styles.tagline}>Direct-to-Consumer E-Commerce for agriculture</p>
            <p className={styles.description}>
              An Information System focusing on vulnerability policies and geolocation 
              to bridge the gap for local producers.
            </p>
            <div className={styles.techStack}>
              <span>REACT NATIVE</span>
              <span>FIREBASE</span>
              <span>GEOLOCATION API</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/yourusername/kubo" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://kubo-demo.netlify.app" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {/* placeholder picture */}
             <div className={styles.imagePlaceholder}></div>
          </div>
        </article>

        {/* project card 2 add more if want */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Dialysis Survival Analysis</h3>
            <p className={styles.tagline}>Data Science & Clinical Risk Scores</p>
            <p className={styles.description}>
              Visualizing hazard ratios and clinical correlations across 12,400 
              clinical records to predict patient survival.
            </p>
            <div className={styles.techStack}>
              <span>PYTHON</span>
              <span>TABLEAU</span>
              <span>STATISTICAL MODELING</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/yourusername/kubo" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://kubo-demo.netlify.app" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             <div className={styles.imagePlaceholder}></div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects