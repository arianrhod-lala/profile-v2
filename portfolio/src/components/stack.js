import * as React from "react"
import * as styles from "./stack.module.css"
import { FaHtml5, FaPython, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa" 
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi" 
import { RiGatsbyFill, RiSupabaseLine } from "react-icons/ri"
import { IoLogoTableau, IoLogoVercel } from "react-icons/io5"
import { SiStrapi, SiMongodb } from "react-icons/si"
import { DiPhotoshop, DiIllustrator, DiMysql, DiPostgresql } from "react-icons/di"

const Stack = () => {
    return (
        <section className={styles.stackSection}>
            <h2 className={styles.sectionTitle}>My Stack</h2>
            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.techCard}`}>
                    <h3>Technologies</h3>
                    <ul>
                        <li><BiLogoJavascript className={styles.icon} />Javascript</li>
                        <li><BiLogoTypescript className={styles.icon} />Typescript</li>
                        <li><FaPython className={styles.icon} />Python</li>
                        <li><FaHtml5 className={styles.icon} />html</li>
                        <li><FaCss3Alt className={styles.icon} />css</li>
                    </ul>
                </div>
            
                <div className={`${styles.card} ${styles.frameworkCard}`}>
                    <h3>Frameworks</h3>
                    <ul>
                        <li><FaReact className={styles.icon} />React</li>
                        <li><FaNodeJs className={styles.icon} />Node.js</li>
                        <li><RiGatsbyFill className={styles.icon} />Gatsby.js</li>
                    </ul>
                </div>
            
                <div className={`${styles.card} ${styles.toolCard}`}>
                    <h3>Tools</h3>
                    <ul>
                        <li><FaAws className={styles.icon} />AWS</li>
                        <li><FaGitAlt className={styles.icon} />Git</li>
                        <li><FaDocker className={styles.icon} />Docker</li>
                        <li><IoLogoTableau className={styles.icon} />Tableau</li>
                        <li><SiStrapi className={styles.icon} />Strapi</li>
                        <li><IoLogoVercel className={styles.icon} />Vercel</li>
                        <li><FaFigma className={styles.icon} />Figma</li>
                        <li><DiPhotoshop className={styles.icon} />Photoshop</li>
                        <li><DiIllustrator className={styles.icon} />Illustrator</li>
                    </ul>
                </div>

                <div className={`${styles.card} ${styles.focusCard}`}>
                    <h3>Database</h3>
                    <ul>
                        <li><DiMysql className={styles.icon} />SQL</li>
                        <li><DiPostgresql className={styles.icon} />PostgreSQL</li>
                        <li><SiMongodb className={styles.icon} />MongoDB</li>
                        <li><RiSupabaseLine className={styles.icon} />Supabase</li>
                    </ul>
                </div>
            </div>   
        </section>
    )
}

export default Stack