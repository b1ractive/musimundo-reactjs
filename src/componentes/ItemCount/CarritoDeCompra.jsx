import { useState } from "react";
import React from "react";

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const increanse = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return(
        <div className="text-center">
            <button variant="ghost" size="sm" onClick={decrease}>-</button>
            <span>{count}</span>
            <button variant="ghost" size="sm" onClick={increanse}>+</button>
            <div>
                <button className="btn btn-danger" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;