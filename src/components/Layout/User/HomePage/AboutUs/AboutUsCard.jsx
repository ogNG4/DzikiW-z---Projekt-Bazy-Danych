import { Flex, Box, Text } from "@chakra-ui/react";

function AboutUsCard({ title, text }) {
  return (
    <Flex
      direction={"column"}
      bg={"gray.700"}
      minW={"300px"}
      maxW={"450px"}
      minH={"280px"}
      p={"1rem"}
      justifyContent={"space-around"}
      borderRadius={"1rem"}
      border={"1px"}
      borderColor={"gray.600"}
      boxShadow={"dark-lg"}
    >
      <Box>
        <Text
          fontSize={{ base: "1.2rem", md: "1.6rem" }}
          textTransform={"uppercase"}
          letterSpacing={"5px"}
        >
          {title}
        </Text>
      </Box>
      <Box>
        <Text color={"gray.400"}>{text}</Text>
      </Box>
    </Flex>
  );
}

export default AboutUsCard;
