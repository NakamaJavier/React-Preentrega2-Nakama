
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react'

function App() {

  return (
    <div className='body'>
        <NavBar/>
        <ItemListContainer/>
    </div>
  )

}

export default App
