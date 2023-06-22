import { Card, Text, Flex, Box, HStack, Button } from "@chakra-ui/react";
import MessageCardDetails from "./MessageCardDetails";
import { useRouter } from "next/router";

export default function MessageCard({ message }) {
  const router = useRouter();
  const date = new Date(message.created_at);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear().toString()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

  const isUnreadMessage = router.pathname === "/admin/unread-messages";

  const hadleChangeMessageStatus = async () => {
    router.reload();
    const response = await fetch(
      `/api/admin/messages/check-message/${message.id}`,
      {
        method: "POST",
      }
    );
    if (response.ok) {
    } else {
      console.error(response);
    }
  };

  const handleDelete = async () => {
    router.reload();
    const response = await fetch(
      `/api/admin/messages/delete-message/${message.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
    } else {
      console.error(response);
    }
  };
  return (
    <Card w={"50%"} h={"auto"}>
      <Flex justifyContent={"space-between"} p={"1rem"} gap={"20px"}>
        <Flex
          direction={"column"}
          h={"100%"}
          justifyContent={"center"}
          w={"40%"}
        >
          <MessageCardDetails name={"Data:"} value={formattedDate} />
          <MessageCardDetails name={"Imię:"} value={message.firstName} />
          <MessageCardDetails name={"Nazwisko:"} value={message.lastName} />
          <MessageCardDetails name={"Email:"} value={message.email} />
          <MessageCardDetails
            name={"Numer telefonu:"}
            value={message.phoneNumber}
          />
        </Flex>
        <Box bg={"gray.600"} w={"60%"}>
          <Text>{message.message}</Text>
        </Box>
        <Flex direction={"column"} gap={".5rem"}>
          {isUnreadMessage && (
            <Button
              fontSize={"2rem"}
              bg={"transparent"}
              onClick={hadleChangeMessageStatus}
            >
              ✔
            </Button>
          )}
          <Button fontSize={"2rem"} bg={"transparent"} onClick={handleDelete}>
            ❌
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
