import {useState, useEffect} from 'react'
import { productos } from '../../Data/productos'
import { customFetch } from '../../Data/customFetch'
import { ItemList } from '../ItemList/index'

const ItemListContainer = () => {

    const [listProductos, setListProductos] = useState([])

    useEffect(() =>{
        customFetch(productos)
            .then(res => {
                setListProductos(res)
            })
    }, [])

    return(
        <div>
            <ItemList listProductos={listProductos} />
        </div>
    )
}

export { ItemListContainer }