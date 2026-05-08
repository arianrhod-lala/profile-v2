import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Stack from "../components/stack"
import Projects from "../components/projects"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
        <Stack />
          <Projects />
    </Layout>
  )
}

export default IndexPage
