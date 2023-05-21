import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Buen dia!"/>
      </main>
    </>
  )
}

export default App
