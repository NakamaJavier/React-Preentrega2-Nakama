import "./product.css"

function Product({ data }) {
    const opciones1 = ['Opción 1', 'Opción 2', 'Opción 3']; // Ejemplo de opciones1
    return (
        <div className="card cardHover" style={{ width: '20rem' }}>
            <img src={data.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">
                    <strong>{data.nombre}</strong>
                </h4>
                <p className="card-text ml8px">
                    <strong>Marca:</strong> {data.marca} <br /> <strong>Precio:</strong> ${data.precio}
                </p>
                {/* <div className="text-center">
                    <a href="#" id={`producto-${data.id}`} data-id={data.id} className="btn btn-primary btnAdd">
                        Añadir <i className="fa-solid fa-cart-plus"></i>
                    </a>
                    <div className="menues">
                        <select className="menu1" id={`menu1-${data.id}`} data-id={data.id}>
                            <option value="0">Talle</option>
                            {opciones1.map((opcion, index) => (
                                <option key={index} value={opcion}>
                                    {opcion}
                                </option>
                            ))}
                        </select>
                        <select className="menu2" id={`menu2-${data.id}`} disabled>
                            <option value="0">Cantidad</option>
                        </select>
                        <label id={`cantidadMax-${data.id}`} htmlFor={`menu2-${data.id}`}></label>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Product