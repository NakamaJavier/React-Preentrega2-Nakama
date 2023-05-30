import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark" style={{ backgroundColor: "#06395e" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="./index.html">VarShoes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Comprar</a>
                            </li>
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