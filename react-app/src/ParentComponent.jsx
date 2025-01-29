import { useState } from 'react'

function ParentComponent() {
  const [name, setName] = useState('John')

  return (
    <>
        <h1>Hello {name}</h1>
        <button onClick={() => setName('Mark')}> Change Name</button>
    </>
  )
}

export default ParentComponent