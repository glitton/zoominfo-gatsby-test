import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const [time, setTime] = useState(``)
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch(`/api/time`, {
        method: "POST",
      }).then(res => res.json())
      setTime(
        `${new Date(res["date"]).toLocaleDateString("en-US")} ${new Date(
          res["date"]
        ).toLocaleTimeString("en-US")}`
      )
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi Dustin McCraw,</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Built on {process.env.__BUILD_DATE__}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <h1>The time right now is {time}</h1>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <Link to="/about/">About</Link> <br />
      <Link to="/paths/">Paths</Link> <br />
      <Link to="/path1/">Path 1</Link> <br />
      <Link to="/path2/path2/123/456">Path 2</Link> <br />
      <Link to="/path3/123/456/">Path 3</Link> <br />
      <Link to="/path4/123/">Path 4</Link> <br />
      <Link to="/packages/">Packages -> Plugins</Link> <br />
      <Link to="/use-cases/campaign-event/emoji.tinder.com">
        Use cases
      </Link>{" "}
      <br />
      <p>Build 2</p>
    </Layout>
  )
}

export default IndexPage
