
import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return <div>
      <input value={firstName} onChange={(e) =>setFirstName(e.target.value)} ></input>
      <input value={lastName} onChange={(e) => setLastName(e.target.value)}></input>

      <div>{firstName} {lastName}</div>
  </div>
    
  
}


  

export default App
