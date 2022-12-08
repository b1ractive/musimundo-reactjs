import React, {useEffect, useState} from "react";

const ItemsPromesas = () => {

    const [productos, setProductos] = useState ([]);

    const productosArray = [
        {id:1, name:"Lenovo", description:"", stock:10},
        {id:2, name:"HP", description:"", stock:3},
        {id:3, name:"Asus", description:"", stock:7},
        {id:4, name:"Exo", description:"", stock:5}

    ];

    useEffect(() => {
        setTimeout(setProductos(productosArray), 3000);
    }, [])

    return (
        <div>
            <h1>Items Promesas</h1>
            <p><button id="btnCargar">CargarJSON</button></p>
            <ul>
                {productos.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )

}

export default ItemsPromesas;