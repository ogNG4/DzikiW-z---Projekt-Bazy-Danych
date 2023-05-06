import {
  useColorMode,
  Box,
  Flex,
  IconButton,
  Button,
  useColorModeValue,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {  useSupabaseClient } from "@supabase/auth-helpers-react";
import { Link } from "@chakra-ui/next-js";

import { Logo } from "../Logo/Logo";

export function AdminNavbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const logoutHandler = () => {
    supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      p={8}
      w={"30%"}
      maxW={"350px"}
      h={"100vh"}
      borderRight={"1px solid gray"}
      position={'sticky'}
      top={'0'}
      left={'0'}
      zIndex={'10'}
      
      
    >
      <Flex flexDirection={"column"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Accordion allowToggle mt={"3rem"} marginBottom={'2rem'}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Flota
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/admin/cars-list">Lista pojazdów</Link>
                <Link href="/admin/newCar">Dodaj pojazd</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Rezerwacje
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/">Aktualne rezerwacje</Link>
                <Link href="/">Zakończone rezerwacje</Link>
                <Link href="/">Historia rezerwacji</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Wiadomości
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/admin/unread-messages">Wiadomości nieodczytane</Link>
                <Link href="/">Wiadomości odczytane</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Finanse
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/admin">Samochód</Link>
                <Link href="/admin">Flota</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button bg={'red.400'} onClick={logoutHandler}>Wyloguj się</Button>
      </Flex>
    </Box>
  );
}
