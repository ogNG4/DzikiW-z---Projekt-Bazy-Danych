import { Center } from "@chakra-ui/react"


export default function Header({title}){
    return (<Center m={'2rem'} fontSize={'3rem'}>
            {title}
        </Center>)
}