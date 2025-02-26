import { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const [name, setName] = useState('John')

  return (
    <>
        <h1>Hello {name}</h1>
        <button onClick={() => setName('Mark')}> Change Name</button>
        <ChildComponent name={name}/>
    </>
  )
}

export default ParentComponent