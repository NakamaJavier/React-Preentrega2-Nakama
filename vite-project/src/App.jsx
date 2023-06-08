
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

// Views
import Home from "./views/HomePage"
import About from "./views/AboutPage"
import Contact from "./views/ContactPage"
import ErrorPage from "./views/ErrorPage"
import DetailPage from './views/DetailPage'

function App() {

  return (
    <Router>
      <div className='body'>
          <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        <ItemListContainer/>
      </div>
    </Router>
  )

}

export default App
