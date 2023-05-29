
import { Card, Image, Flex, Box } from "@chakra-ui/react"


export default function RentDetailCard({rent}){

    return(
        <Card height={'30vh'} w={'60%'}>
                <Flex w={'100%'} h={'100%'}>
                    <Box h={'100'} bg={'red'}>
                        <Image src={rent.cars.img} alt={rent.cars.brand}  h={'100%'}/>
                    </Box>
                </Flex>
        </Card>
    )
}