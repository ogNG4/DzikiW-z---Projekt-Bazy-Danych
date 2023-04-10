import {
  useColorMode,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Switch,
  useColorModeValue,
  useDisclosure,
  HStack,
  Stack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import { Link } from "@chakra-ui/next-js";

export function UserNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={8}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"} fontSize={"lg"}>
        <Link href="/">Dziki wóz</Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link href="/">O nas</Link>
            <Link href="/flota">Flota</Link>
            <Link href="/">Kontakt</Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          {/* <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"md"}
                bg={"gray.600"}
                src={
                  "https://pixabay.com/images/id-973460/"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuDivider />
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu> */}

          <Button
            onClick={() => router.push("/login")}
            color={"gray.300"}
            bg={"green.500"} 
            size={{ base: "sm", md: "md" }}
          >
            <Text>Zaloguj się</Text>
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link href="/">About</Link>
            <Link href="/">About</Link>
            <Link href="/">About</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
