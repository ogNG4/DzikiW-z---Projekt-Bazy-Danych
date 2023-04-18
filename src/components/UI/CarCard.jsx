import { Box, Flex, Image, Text } from "@chakra-ui/react";
export default function CarCard({ car }) {
  return (
    <Box
      bg={"whiteAlpha.100"}
      h={{ base: "30vh", md: "35vh", lg: "50vh" }}
      w={"100%"}
    >
      <Flex flexDirection={"column"}>
        <Box w={"100%"} h={"45%"} position={"relative"} >
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

          <Flex position={"absolute"} bottom={".8rem"} left={".5rem"} direction={'column'}>
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

        <Flex>
            <Box w={"50%"} h={"55%"} p={"1rem"}>
                <Text fontSize={"1.2rem"} fontWeight={"500"}>Cena za dzień</Text>
                <Text fontSize={"1.2rem"} fontWeight={"500"}>{car.price} zł</Text>
            </Box>
            <Box w={"50%"} h={"55%"} p={"1rem"}>
                <Text fontSize={"1.2rem"} fontWeight={"500"}>Moc</Text>
                <Text fontSize={"1.2rem"} fontWeight={"500"}>{car.power} KM</Text>
            </Box>
            <Box w={"50%"} h={"55%"} p={"1rem"}>
                <Text fontSize={"1.2rem"} fontWeight={"500"}>Rocznik</Text>
                <Text fontSize={"1.2rem"} fontWeight={"500"}>{car.year} </Text>
            </Box>

        </Flex>
      </Flex>
    </Box>
  );
}
