import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemlistcontainer.css"
import Product from "../Product/Product";
import useFetch from "../../hooks/useFetch";


function ItemListContainer() {

    // useEffect(()=>{
    // fetch("./productos.json")
    //     .then((response)=>response.json())
    //     .then((data)=> setProducts(data))
    // },[])
    const {data:products,loading}= useFetch ("./productos.json")
    console.log(products);
    return (
        <div className="contenedor d-flex justify-content-start flex-wrap  gap-3">
        {products &&
            products.map((product)=>{
                return(
                    <Product data={product} key={product.id}/>
                )
            })}
        </div>
    )
}

export default ItemListContainer