
import "./cartwidget.css"

function CartWidget() {
    return (
        <div>
            <i className="fa-sharp fa-solid fa-cart-shopping fa-lg" style={{ color: '#ffffff' }}></i>
            <span className="start-f translate-middle badge rounded-pill bg-danger top-f">
                0
            </span>
        </div>
    )
}

export default CartWidget