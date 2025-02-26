import { useState } from 'react'
import './App.css'
import './ParentComponent'
import ParentComponent from './ParentComponent'
import HideParagraph from './HideParagraph'

function App(props) {

  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
  ]

  const { user } = props
  const newEmails = 2

  let button = <button>Login</button>

  if (user) {
    button = <button>Logout</button>
  }
  
  return (
    <>
      <h1>A new React App</h1>
      {/* <h2>Loading..</h2> */}
      <p>The currently active users list:</p>
      <ul>
      {
        users.map(function(user){
          // returns Nathan, then John, then Jane
          return (
            <li key={user.id}> 
              {user.name} as the {user.role} 
            </li>
          )
        })
      }
      {newEmails > 0 &&
        <h2>
          You have {newEmails} new emails in your inbox.
        </h2>
      }
      </ul>
      <ParentComponent/>
      { user? <button>Logout</button> : <button>Login</button> }

      <HideParagraph/>

    </>

  )
}

export default App
