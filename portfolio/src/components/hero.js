import * as React from "react"
import * as styles from "./hero.module.css" 

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.content}>
        <p className={styles.intro}>Hi! </p>
        <h1 className={styles.title}>
          I'm Ian Lester. <br />
          Love anything minimal.
        </h1>
        <p className={styles.description}>
        I live for some coffee and data. 
        </p>
      </div>
    </section>
  )
}

export default Hero