import React from "react";
import ItemCount from "../ItemCount/CarritoDeCompra";

export const ItemListCount = () => {
    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

    return(
        <div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListCount;