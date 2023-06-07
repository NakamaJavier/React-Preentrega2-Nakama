import { useState } from "react"
import Button from '@mui/material/Button';
import "./itemcount.css"

function ItemCount() {
    const itemAmountMax=10
    const [itemAmount,setItemAmount] = useState(0)
    useState(()=>{
        
    },[itemAmount])

    const increment = ()=>{
        if(itemAmount<itemAmountMax)
        setItemAmount(prev => prev +1)}
    const decrement = ()=>{
        if(itemAmount>0)
        setItemAmount(prev => prev -1)}
    return (
    <div className="item-count">
            <Button className="decrement-button" variant="outlined" onClick={decrement}>-</Button>
            <span>{itemAmount}</span>
            <Button className="increment-button" variant="outlined" onClick={increment}>+</Button>
    </div>
    )
}

export default ItemCount