/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import "./layout.css"
import * as styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
      <footer className={styles.footer}>
            <small style={{ marginBottom: '1.5em', display: 'block' }}>
              COPYRIGHT © 2026 
            </small>
            <small className={styles.poweredBy}>
              POWERED BY 
              <StaticImage 
                src="../images/gatsby-icon.png" 
                alt="Gatsby Logo"
                width={16}
                height={16}
                className={styles.footerIcon}
              />
              <strong>Gatsby</strong>
            </small>
          </footer>
        </div>
  )
}

export default Layout