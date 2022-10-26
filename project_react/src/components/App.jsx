import { useEffect, useState } from 'react'
import '../styles/App.css'

function App () {
  const [username, setUserName] = useState('Bruno')
  const handleChangeName = () => setUserName('Jared')

  useEffect(() => {
    console.log('First')
  }, [])

  return (
    <div className='App'>
      <h2>{username}</h2>
      <button onClick={handleChangeName}>Cambiar</button>
    </div>
  )
}

export default App
