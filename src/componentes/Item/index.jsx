import { VStack, Button, Text, Image } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount'

const Item = ({ producto }) => {

    console.log(producto)

    const { image, name, price } = producto

    return(
        <VStack>
            <Image src={image} />
            <Text>{name}</Text>
            <Text><b>${price}</b></Text>
            <Button>Ver más</Button>
            <ItemCount initial={1} stock={10} onAdd={() => {}}/>
        </VStack>
    )
}

export { Item }