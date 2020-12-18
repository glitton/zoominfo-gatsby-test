import * as React from "react"
export default function Path(props) {
  return (
    <>
      <h1>Client site route for path5/[...splat1]/test</h1>
      <p>1</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}
