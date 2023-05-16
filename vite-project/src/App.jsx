import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <NavBar/>
      </div>
  )
}

export default App
