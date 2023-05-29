import { Heading } from "@chakra-ui/react";



export default function SectionHeader({title}) {
    return(
        <Heading textTransform={'uppercase'} fontWeight={'500'} fontSize={'6xl'} m={'2rem auto'} w={'max-content'}>
            {title}
        </Heading>
    )
}