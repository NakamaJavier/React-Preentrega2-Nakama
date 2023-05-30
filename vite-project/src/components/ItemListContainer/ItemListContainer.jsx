import "./itemlistcontainer.css"

function ItemListContainer({ greeting }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="/img/bienvenido.webp" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{ greeting }</h5>
            <p className="card-text">
                Sea bienvenido a la página
            </p>
            </div>
        </div>
    );
}

export default ItemListContainer