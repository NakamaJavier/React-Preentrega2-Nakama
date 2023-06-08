import { useEffect, useState } from "react";
import "./itemlistcontainer.css"
import Product from "../Product/Product";
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom"

function ItemListContainer() {


    const {data:products,loading}= useFetch ("https://pokeapi.co/api/v2/pokemon/")
    if(loading) return <div>Loading...</div>
    console.log(products?.results)
    return (
        
        <div className="contenedor d-flex justify-content-start flex-wrap  gap-3">
        {products &&
            products.map((product,indice)=>{
                return(
                    <div  key={indice}>
                        <Link to={`/detail/${indice}`}>
                            <Product data={product}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemListContainer