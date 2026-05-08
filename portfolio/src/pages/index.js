import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Stack from "../components/stack"
import Projects from "../components/projects"
import About from "../components/about"
import Certifications from "../components/certifications"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
        <Stack />
          <Projects />
            <Certifications />
              <About/>
    </Layout>
  )
}

export default IndexPage
