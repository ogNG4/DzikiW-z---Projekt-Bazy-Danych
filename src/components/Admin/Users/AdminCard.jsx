import { Card, Flex, HStack, Text } from "@chakra-ui/react";

export default function AdminCard({ profile }) {
  return (
    <Card
      w={"40%"}
      h={"max-content"}
      p={"1rem"}
      justifyContent={"space-between"}
    >
      <Flex fontSize={"2xl"} gap={"3rem"}>
        <Flex direction={"column"} gap={"1rem"} fontWeight={"bold"}>
          <Text>Email:</Text>
        </Flex>
        <Flex direction={"column"} gap={"1rem"}>
          <Text>{profile.email}</Text>
        </Flex>
      </Flex>
    </Card>
  );
}