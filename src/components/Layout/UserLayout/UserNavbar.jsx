import {
  useColorMode,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
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
  
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Link } from "@chakra-ui/next-js";

import { Logo } from "../Logo/Logo";
import { useUser } from "@/context/UserContext";


export function UserNavbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const supabase = useSupabaseClient();
  const session = useSession();
  const {profile} = useUser();

  const logoutHandler = () => {
    supabase.auth.signOut();
    router.push('/');
  };



  return (
    <>
    
    <Box  bg={useColorModeValue("gray.100", "gray.900")}  px={{base: '1.5rem', xl: '10rem'}} position={'fixed'} top={0} zIndex={'12'} width={'100%'} mb={'10rem'}>
      <Flex h={'6rem'} alignItems={"center"} justifyContent={"space-between"}  >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Logo />
        <HStack spacing={8} alignItems={"center"} fontSize={"lg"}>
          <HStack as={"nav"} spacing={{sm:'4rem', md: '6rem', lg: '8rem'}} display={{ base: "none", md: "flex" }} fontWeight={'500'} fontSize={'1.7rem'} >
            <Link href="/">O nas</Link>
            <Link href="/cars">Flota</Link>
            <Link href="/contact">Kontakt</Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
      {  session ?    (

        <>
        <Text fontSize={'lg'} mr={'10px'}>Witaj {profile?.firstName} !</Text>
        
      <Menu>
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
             { profile && <MenuItem ><Link href={`/my-rents/${profile.id}/`}>Moje rezerwacje</Link></MenuItem>}
              <MenuDivider />
              { profile && <MenuItem ><Link href={`/finished-rents/${profile.id}/`}>Zakończone rezerwacje</Link></MenuItem>}
              <MenuDivider />
              <MenuItem>
              <Button as={'a'} onClick={logoutHandler }>Wyloguj się</Button>
              </MenuItem>
            </MenuList>
          </Menu> </>) : (<Button
            onClick={() => router.replace("/login")}
            color={"gray.300"}
            bg={"red.400"}
            size={{ base: "sm", md: "md" }}
          >
            <Text >Zaloguj się</Text>
          </Button>)}

          
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
          <Link href="/">O nas</Link>
            <Link href="/cars">Flota</Link>
            <Link href="/contact">Kontakt</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
    </>
  );
}
