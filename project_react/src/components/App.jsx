import { useState } from 'react'
import '../styles/App.css'

function App () {
  const [username, setUserName] = useState ('Bruno')
  return (
    <div className='App'>
      <h2>{username}</h2>
    </div>
  )
}

export default App
