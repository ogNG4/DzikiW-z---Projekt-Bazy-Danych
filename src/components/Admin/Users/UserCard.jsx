import { Card, Flex, HStack, Text } from "@chakra-ui/react";


export default function UserCard({profile}){
    return(
        <Card w={'60%'} h={'max-content'} p={'1rem'} justifyContent={'space-between'}>
            <Flex  fontSize={'2xl'} gap={'3rem'}>
                <Flex direction={'column'} gap={'1rem'} fontWeight={'bold'}>
                    <Text>Imię:</Text>
                    <Text>Nazwisko:</Text>
                    <Text>Email:</Text>
                    <Text>Numer telefonu:</Text>
                 </Flex>
                 <Flex direction={'column'} gap={'1rem'} >
                    <Text>{profile.firstName}</Text>
                    <Text>{profile.lastName}</Text>
                    <Text>{profile.email}</Text>
                    <Text>{profile.phoneNumber}</Text>
                 </Flex>

            </Flex>
        </Card>
    );
}