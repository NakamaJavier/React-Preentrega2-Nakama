import "./item.css"
function Item({ data }) {
    return (
        <div className="card cardHover" style={{ width: '20rem' }}>
            <img src={data.sprites.front_default} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">
                    <strong>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</strong>
                </h4>
            </div>
        </div>
    );
}

export default Item