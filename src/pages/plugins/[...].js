import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Plugins = props => (
  <Layout>
    <Seo title="Plugins" />
    <h1>Plugins</h1>
    <p>Welcome to the plugins page</p>
    <h1>Client site route for /plugins/*</h1>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Plugins
