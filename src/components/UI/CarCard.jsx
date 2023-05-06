import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
export default function CarCard({ car }) {
  return (
    <Box bg={"whiteAlpha.100"} h={"auto"} w={"100%"}>
      <Flex flexDirection={"column"}>
        <Box w={"100%"} h={"45%"} position={"relative"}>
          <Image src="/bmw.jpg" />
          <Text
            position={"absolute"}
            top={".8rem"}
            right={".5rem"}
            bg={"blackAlpha.900"}
            fontSize={"1.2rem"}
            px={".5rem"}
            textTransform={"uppercase"}
            letterSpacing={"2px"}
            fontWeight={"500"}
            color={"white"}
          >
            {car.type}
          </Text>

          <Flex
            position={"absolute"}
            bottom={".8rem"}
            left={".5rem"}
            direction={"column"}
          >
            <Text
              fontSize={"2.2rem"}
              px={".5rem"}
              textTransform={"uppercase"}
              letterSpacing={"2px"}
              fontWeight={"500"}
            >
              {car.brand}
            </Text>
            <Text
              fontSize={"1.2rem"}
              px={".5rem"}
              textTransform={"uppercase"}
              letterSpacing={"2px"}
              fontWeight={"500"}
            >
              {car.model}
            </Text>
          </Flex>
        </Box>

        <Flex direction={"column"} fontSize={"1.2rem"} fontWeight={"500"} p={'.5rem'}>
          <HStack>
            <Text>Cena za dobę:</Text>
            <Text>{car.price} zł</Text>
          </HStack>
          <HStack>
            <Text>Moc:</Text>
            <Text>{car.power} KM</Text>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
