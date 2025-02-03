import { useState } from 'react'

function ChildComponent(props) {

  return (
    <>
        <h1>Child props name: {props.name}</h1>
    </>
  )
}

export default ChildComponent