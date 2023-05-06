import { HStack, Text } from "@chakra-ui/react";
export default function MessageCardDetails({name, value}){
    const fontProps = { fontSize: '1.2rem', fontWeight: '500' };
   return(
    <HStack  >
    <Text style={fontProps}>{name}</Text>
    <Text>{value}</Text>
   </HStack>
   ) 
}