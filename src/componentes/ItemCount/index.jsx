import { useState } from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'

const ItemCount = ({initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increanse = () => count < stock && setCount( count + 1 )
    const decrease = () => count > initial && setCount( count - 1 )

    return(
        <HStack>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={increanse}>+</Button>
            <Button>Agregar al carrito</Button>
        </HStack>
    )
}

export { ItemCount }