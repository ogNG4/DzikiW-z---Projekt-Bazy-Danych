import { chakra, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import Image from "next/image";

import logoImg from "../../../../public/assets/boar.svg";

const LogoImg = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["height", "width", "quality", "src", "alt" ].includes(prop),
});

export function Logo() {
  return (
    <Link href={"/"} _hover={{ textDecoration: "none" }}>
      <Flex
        fontSize={{ base: "1.3rem", md: "2rem" }}
        alignItems={"center"}
        fontWeight={"bold"}
      >
        <Text color={"white"}>Dziki</Text>
        <Text color={"red.400"}>Wóz</Text>
        <Spacer />
        <LogoImg
          zIndex={1}
          width={{ base: "30px", md: "40px" }}
          height={{ base: "30px", md: "40px" }}
          quality={70}
          pos="relative"
          objectFit="cover"
          src={logoImg}
          alt="logo"
          
        />
      </Flex>
    </Link>
  );
}
