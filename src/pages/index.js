import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Built on {process.env.__BUILD_DATE__}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <Link to="/about/">About</Link> <br />
    <Link to="/paths/">Paths</Link> <br />
    <Link to="/path1/">Path 1</Link> <br />
    <Link to="/path2/path2/123/456">Path 2</Link> <br />
    <Link to="/path3/123/456/">Path 3</Link> <br />
    <Link to="/path4/123/">Path 4</Link> <br />
    <Link to="/use-cases/campaign-event/emoji.tinder.com">Use cases</Link>{" "}
    <br />
  </Layout>
)

export default IndexPage
