import * as React from "react"
import * as styles from "./projects.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { FiGithub, FiExternalLink } from "react-icons/fi";


const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>Selected Projects</h2>
      
      <div className={styles.projectsGrid}>
        {/* project card 1 */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Cat Game</h3>
            <p className={styles.tagline}>Fun weekend project</p>
            <p className={styles.description}>
              Smol donut eating game as a cat.
            </p>
            <div className={styles.techStack}>
              <span>LUA</span>
              <span>PICO-8</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/arianrhod-lala/cat-game" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://kubo-demo.netlify.app" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {/* placeholder picture */}
             <div className={styles.image}></div>
          </div>
        </article>

        {/* project card 2 add more if want */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Dialysis Survival Analysis</h3>
            <p className={styles.tagline}>Data Science</p>
            <p className={styles.description}>
              Visualizing hazard ratios and clinical correlations across 12,400 
              clinical records to predict patient survival.
            </p>
            <div className={styles.techStack}>
              <span>PYTHON</span>
              <span>JAVASCRIPT</span>
              <span>STATISTICAL MODELING</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/arianrhod-lala/dialysis_dashboard" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://arianrhod-lala.github.io/dialysis_dashboard/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {}
              <StaticImage 
                src="../images/dialysis-dashboard.png" 
                alt="Ian Lester"
                placeholder="blurred"
                className={styles.image}
              />
          </div>
        </article>

        {/* project card 3 add more if want */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Gym Management System</h3>
            <p className={styles.tagline}>Fullstack</p>
            <p className={styles.description}>
              Provided a system for a local gym within the city.
            </p>
            <div className={styles.techStack}>
              <span>REACT</span>
              <span>NODE</span>
              <span>SUPABASE</span>
              <span>VERCEL</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/arianrhod-lala/gym-management" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://gym-management-red-tau.vercel.app/home" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {}
              <StaticImage 
                src="../images/dialysis-dashboard.png" 
                alt="Ian Lester"
                placeholder="blurred"
                className={styles.image}
              />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects