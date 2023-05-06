import { Card, Text, Flex, Box, HStack } from "@chakra-ui/react";
import MessageCardDetails from "./MessageCardDetails";

export default function MessageCard({ message }) {
  const date = new Date(message.created_at);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear().toString()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

  return (
    <Card w={"50%"} h={'auto'}>
      <Flex justifyContent={"space-between"} p={"1rem"} gap={"20px"} >
        <Flex direction={"column"} h={'100%'}  justifyContent={'center'} w={'40%'}>
          <MessageCardDetails name={"Data:"} value={formattedDate} />
          <MessageCardDetails name={"Imię:"} value={message.firstName} />
          <MessageCardDetails name={"Nazwisko:"} value={message.lastName} />
          <MessageCardDetails name={"Email:"} value={message.email} />
          <MessageCardDetails
            name={"Numer telefonu:"}
            value={message.phoneNumber}
          />
        </Flex>
        <Box bg={'gray.600'} w={'60%'}>
            <Text>
                {message.message}
            </Text>
        </Box>
      </Flex>
    </Card>
  );
}
