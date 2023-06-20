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
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Link } from "@chakra-ui/next-js";



export function AdminNavbar() {
 
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
      position={"sticky"}
      top={"0"}
      left={"0"}
      zIndex={"10"}
    >
      <Flex flexDirection={"column"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Accordion allowToggle mt={"3rem"} marginBottom={"2rem"}>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Flota
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/admin/cars-list">Lista pojazdów</Link>
                <Link href="/admin/new-car">Dodaj pojazd</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Rezerwacje
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/admin/rents/current-rents">Aktualne rezerwacje</Link>
                <Link href="/admin/rents/completed-rents">Zakończone rezerwacje</Link>
                <Link href="/admin/rents/canceled-rents">Anulowane rezerwacje</Link>
                <Link href="/admin/rents/rents-history">Historia rezerwacji</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Wiadomości
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/admin/unread-messages">
                  Wiadomości nieodczytane
                </Link>
                <Link href="/">Wiadomości odczytane</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Użytkownicy
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Flex flexDirection={"column"}>
                <Link href="/admin/users">
                  Klienci
                </Link>
                <Link href="/admin/admins">Administratorzy</Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

         
        </Accordion>
        <Box>
          <Button bg={"red.400"} onClick={logoutHandler}>
            Wyloguj się
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
