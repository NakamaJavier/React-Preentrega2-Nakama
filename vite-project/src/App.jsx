
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Components
import NavBar from './components/NavBar/NavBar'

// Views
import HomePage from "./views/HomePage"
import AboutPage from "./views/AboutPage"
import ContactPage from "./views/ContactPage"
import ErrorPage from "./views/ErrorPage"
import DetailPage from './views/DetailPage'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <Router>
      <div className='body'>
          <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="/types/:typeValue" element={<ItemListContainer/>}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </Router>
  )

}

export default App
