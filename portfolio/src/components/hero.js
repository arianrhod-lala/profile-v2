import * as React from "react"
import * as styles from "./hero.module.css" 

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.content}>
        <h3 className={styles.intro}>Hi! </h3>
        <h1 className={styles.title}>
          I'm Ian Lester. <br />
          Love anything minimal.
        </h1>
        <h3 className={styles.description}>
        I live for some coffee and data. 
        </h3>
      </div>
    </section>
  )
}

export default Hero