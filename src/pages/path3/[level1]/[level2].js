import * as React from "react"
export default function Path(props) {
  return (
    <>
      <h1>Client site route for path3/[level1]/[level2]</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}
