import { Center } from '@chakra-ui/react'
import { Item } from '../Item'

const ItemList = ({listProductos}) => {

    return(
        <Center display="flex" flexWrap='wrap'>
            {listProductos.map(producto => <Item key={producto.id} producto={producto} />)}
        </Center>
    )
}

export { ItemList }