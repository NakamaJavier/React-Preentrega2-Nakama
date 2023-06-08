import React from 'react'
import "./itemdetail.css"

function ItemDetail({data}) {
    return (
        <div className="cardDetail card" style={{ width: '20rem' }}>
                <img src={data.sprites.front_default} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</strong>
                    </h4>
                    <p className="card-text ml8px">
                    <strong>ID: #</strong> {data.order}<br/>
                    <strong>Tipo:</strong> {data.types.map((type)=>type.type.name).join(", ")} <br />
                    <strong>Peso:</strong> {data.weight}<br/>
                    <strong>Altura:</strong> {data.height}
                    </p>
                </div>
            </div>
    )
}

export default ItemDetail