import { Card, Text, Flex, Box } from "@chakra-ui/react";

export default function MessageCard({ message }) {
    const date = new Date(message.created_at);
<<<<<<< HEAD
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
=======
    const formattedDate = ${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')};
>>>>>>> 8616ef7afcb3828db243b630ac44bb8515708ea4

    return (
        <Card w={'60%'} minH={'20vh'}>
            <Flex justifyContent={'space-between'} p={'1rem'} gap={'20px'}>
                <Flex direction={'column'} >
                    <Text>Imię: {message.firstName}</Text>
                    <Text>Nazwisko: {message.lastName}</Text>
                    <Text>Email: {message.email}</Text>
                    <Text>Numer telefonu: {message.phoneNumber}</Text>
                    <Text>Data: {formattedDate}</Text>
                </Flex>
                <Box  flex={'1'}>
                    <Text>{message.message}</Text>
                </Box>
            </Flex>
        </Card>
    )
}