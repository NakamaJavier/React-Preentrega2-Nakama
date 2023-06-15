import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom"


function NavBar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark" style={{ backgroundColor: "#06395e" }}>
                <div className="container-fluid">
                    <Link to="/" className="nav-item"> 
                    <span className="navbar-brand" >PokeVar</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/" className="nav-item">
                                <span className="nav-link" aria-current="page" >Pokedex</span>
                            </Link>
                            {/* <Link to="/about" className="nav-item">
                                <span className="nav-link" >Nosotros</span>
                            </Link> */}
                            <li className="nav-item dropdown ">
                                <span className="nav-link bg-primary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Types:
                                </span>
                                <ul className="dropdown-menu bg-primary">
                                <Link to="/types/bug" className="dropdown-item">
                                    <span className="dropdown-item">Bug</span>
                                </Link>
                                <Link to="/types/dragon" className="dropdown-item">
                                    <span className="dropdown-item">Dragon</span>
                                </Link>
                                <Link to="/types/electric" className="dropdown-item">
                                    <span className="dropdown-item">Electric</span>
                                </Link>
                                <Link to="/types/fairy" className="dropdown-item">
                                    <span className="dropdown-item">Fairy</span>
                                </Link>
                                <Link to="/types/fighting" className="dropdown-item">
                                    <span className="dropdown-item">Fighting</span>
                                </Link>
                                <Link to="/types/fire" className="dropdown-item">
                                    <span className="dropdown-item">Fire</span>
                                </Link>
                                <Link to="/types/flying" className="dropdown-item">
                                    <span className="dropdown-item">Flying</span>
                                </Link>
                                <Link to="/types/ghost" className="dropdown-item">
                                    <span className="dropdown-item">Ghost</span>
                                </Link>
                                <Link to="/types/grass" className="dropdown-item">
                                    <span className="dropdown-item">Grass</span>
                                </Link>
                                <Link to="/types/ground" className="dropdown-item">
                                    <span className="dropdown-item">Ground</span>
                                </Link>
                                <Link to="/types/ice" className="dropdown-item">
                                    <span className="dropdown-item">Ice</span>
                                </Link>
                                <Link to="/types/normal" className="dropdown-item">
                                    <span className="dropdown-item">Normal</span>
                                </Link>
                                <Link to="/types/poison" className="dropdown-item">
                                    <span className="dropdown-item">Poison</span>
                                </Link>
                                <Link to="/types/pychic" className="dropdown-item">
                                    <span className="dropdown-item">Pychic</span>
                                </Link>
                                <Link to="/types/rock" className="dropdown-item">
                                    <span className="dropdown-item">Rock</span>
                                </Link>
                                <Link to="/types/steel" className="dropdown-item">
                                    <span className="dropdown-item">Steel</span>
                                </Link>
                                </ul>
                            </li>
                            {/* <Link to="/contact" className="nav-item">
                                <span className="nav-link" >Contacto</span>
                            </Link> */}
                        </ul>
                        <button id="btnCarrito" type="button" className="btn cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <CartWidget/>
                        </button>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar