import React from "react"
import { useLocation } from "@reach/router"

const Paths = () => {
  const location = useLocation()
  return (
    <h2>
      Paths
      <br />
      {location.pathname}
      {location.search}
    </h2>
  )
}

export default Paths
