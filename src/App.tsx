import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignIn from './components/Auth/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SignIn/>
    </div>
  )
}

export default App
