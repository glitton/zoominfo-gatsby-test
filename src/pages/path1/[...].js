import * as React from "react"
export default function Path(props) {
  return (
    <>
      <h1>Client site route for /path/[...]</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}
