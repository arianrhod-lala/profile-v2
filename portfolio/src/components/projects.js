import * as React from "react"
import * as styles from "./projects.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { FiGithub, FiExternalLink } from "react-icons/fi";


const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>Selected Projects</h2>
      
      <div className={styles.projectsGrid}>
        {/* small cat game */}
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
              <a href="https://www.pico-8-edu.com/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {}
              <StaticImage 
                src="../images/cat-game.png" 
                alt="Ian Lester"
                placeholder="blurred"
                className={styles.image}
              />
          </div>
        </article>

        {/* dialysis dashboard*/}
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

        {/* hugo technology department ai chatbot management system */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Hugo AI Chatbot</h3>
            <p className={styles.tagline}>Fullstack</p>
            <p className={styles.description}>
              Developed a RAG-powered chatbot for the AWS Student Builder Group (AWSCC) website.
            </p>
            <div className={styles.techStack}>
              <span>FastAPI</span>
              <span>ML</span>
              <span>SUPABASE</span>
              <span>PGVECTOR</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/Hugo-Technology-Department/team-omega-project" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://www.figma.com/design/5GkNc7BgAMRMRAmw3iw6pF/Untitled?node-id=0-1&p=f&t=6rngWOvs6lrV7q2Z-0" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {}
              <StaticImage 
                src="../images/hugo.png" 
                alt="Ian Lester"
                placeholder="blurred"
                className={styles.image}
              />
          </div>
        </article>

        {/* isp/telco synthetic data analysis */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>ISP/Telco Customer Churn</h3>
            <p className={styles.tagline}>Data engineering and analysis</p>
            <p className={styles.description}>
              A synthetic Philippine ISP customer dataset built equation-first, then analyzed blind to test whether real churn drivers are recoverable from data alone..
            </p>
            <div className={styles.techStack}>
              <span>PYTHON</span>
              <span>PANDAS</span>
              <span>SCIKIT-LEARN</span>
              <span>MATPLOTLIB</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/arianrhod-lala/eskwelabs-synthetic-data" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://arianrhod-lala.github.io/eskwelabs-synthetic-data/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {}
              <StaticImage 
                src="../images/isptelco.png" 
                alt="Ian Lester"
                placeholder="blurred"
                className={styles.image}
              />
          </div>
        </article>

        {/* flyrank ml project */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Google Search Ranking & Discoverability CTR Lane</h3>
            <p className={styles.tagline}>Machine Learning</p>
            <p className={styles.description}>
              Engineered an end-to-end search intelligence ML pipeline using Random Forest regression to predict expected CTR and prioritize high-ROI content refresh opportunities from search telemetry data.
            </p>
            <div className={styles.techStack}>
              <span>PYTHON</span>
              <span>SQL</span>
              <span>SCIKIT-LEARN</span>
              <span>MATPLOTLIB</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/arianrhod-lala/flyrank-ml" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://arianrhod-lala.github.io/flyrank-ml/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {}
              <StaticImage 
                src="../images/flyrank-ml.png" 
                alt="Ian Lester"
                placeholder="blurred"
                className={styles.image}
              />
          </div>
        </article>

      {/* cozy house */}
        <article className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Cozy Shack</h3>
            <p className={styles.tagline}>3D</p>
            <p className={styles.description}>
              Tried making a cozy room inspired by the game virtual cottage.
            </p>
            <div className={styles.techStack}>
              <span>NEXTJS</span>
              <span>REACT</span>
              <span>THREEJS</span>
              <span>JSX</span>
            </div>
            {/* project links */}
            <div className={styles.projectLinks}>
              <a href="https://github.com/arianrhod-lala/profile-v3" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://profileroom.netlify.app/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
             {}
              <StaticImage 
                src="../images/cozy.png" 
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