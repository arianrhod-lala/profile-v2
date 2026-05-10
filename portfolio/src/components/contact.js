import * as React from "react"
import * as styles from "./contact.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Contact = () => {
    return (
        <section className={styles.contactSection} id="contact">
                <h2 className={styles.title}>Get in Touch</h2>

                <div className={styles.container}>
                <p className={styles.description}>
                I am currently looking for internships where I can apply
                my skills and experience in building websites. My inbox is open to anyone
                even if you only want to say hi! 
                </p>
                <div className={styles.buttonGroup}>
                    <a href="mailto:h352774@gmail.com" className={styles.btnGhost}>
                        Email Me
                    </a>
                    <a href="https://calendar.google.com/calendar/u/0/r/appointment" target="_blank" rel="noreferrer" className={styles.btnFull}>
                        Schedule a Chat 
                    </a>
                </div>
            </div>
    </section>
    )
}

export default Contact