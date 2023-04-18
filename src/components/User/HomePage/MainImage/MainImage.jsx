import { Text, Flex, Image, Button, Box } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

function MainImage() {
  return (
    <Flex
      w={"100%"}
      m={"0 auto"}
      height={{ base: "40vh", lg: "50vh", xl: "65vh" }}
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        src="/mainImg.jpg"
        objectFit={"cover"}
        w={"100%"}
        h={"100%"}
        opacity={0.6}
        filter={"auto"}
        blur={"2px"}
      />

      <Flex
        position={"absolute"}
        fontWeight={"bold"}
        flexDirection={"column"}
        w={"90%"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Flex gap={"10px"} fontSize={{ base: "2.4rem", md: "5rem" }}>
          <Text>Dziki </Text>
          <Text color={"red.400"}>Wóz </Text>
        </Flex>
        <Text fontSize={{ base: "1.2rem", md: "2rem" }} fontWeight={"400"}>
          Dzikie przeżycia za kierownicą - wypożycz swój wóz już dziś!
        </Text>
      </Flex>

      <Box position={"absolute"} bottom={{ base: "2rem", md: "5rem" }}>
        <Link href="/cars">
          <Button
            bg={"red.400"}
            fontSize={{ base: ".8rem", md: "1.2rem" }}
            p={{ base: "none", md: "1.5rem 2rem" }}
            textTransform={"uppercase"}
            letterSpacing={"4px"}
            fontWeight={"500"}
          >
            Przeglądaj ofertę
            <ArrowRightIcon ml={"10px"} />
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default MainImage;
