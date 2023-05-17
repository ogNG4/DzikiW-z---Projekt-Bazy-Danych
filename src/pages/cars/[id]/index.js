import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  Label,
  ModalBody,
} from "@chakra-ui/react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";

export default function Car({ car }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { profile } = useUser();
  const router = useRouter();
  const session = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <Box w={"100%"} minH={"100vh"} mt={"7rem"} p={"2rem"}>
      <Flex direction={"column"} gap={"15px"} fontSize={"2rem"}>
        <Heading margin={"1rem auto"}>
          <HStack
            textTransform={"uppercase"}
            fontWeight={"500"}
            letterSpacing={"5px"}
            fontSize={"5xl"}
          >
            <Text>{car.brand}</Text>
            <Text>{car.model}</Text>
          </HStack>
          <Divider />
        </Heading>
        <Box
          w={{ base: "90%", lg: "20%" }}
          margin={"0 auto"}
          h={"auto"}
          overflow={"hidden"}
        >
          <Image src={car.img} objectFit={"cover"} boxSize={"100%"} />
        </Box>
        <HStack>
          <Text>Moc:</Text>
          <Text>{car.power} KM</Text>
        </HStack>
        <HStack>
          <Text>Pojemność:</Text>
          <Text>{car.capacity} CM3</Text>
        </HStack>
        <HStack>
          <Text>Kolor:</Text>
          <Text>{car.color}</Text>
        </HStack>
        <HStack>
          <Text>Typ:</Text>
          <Text>{car.type}</Text>
        </HStack>
        <HStack>
          <Text>Skrzynia biegów:</Text>
          <Text>{car.transmission}</Text>
        </HStack>
        <HStack>
          <Text>Rocznik:</Text>
          <Text>{car.year}</Text>
        </HStack>
        <HStack>
          <Text>Opis:</Text>
          <Text>{car.description}</Text>
        </HStack>
        <HStack>
          <Text>Cena za dobę:</Text>
          <Text>{car.price} ZŁ</Text>
        </HStack>
       
        <HStack>
          <Button
            bg="tomato"
            onClick={()=>{session? router.push(`/cars/${car.id}/new-rent`) : router.push("/login")}}
          >
            Wynajmij
          </Button>
        </HStack>

        <Link href={"/cars"}>
          <Button bg={"tomato"}>Powrót</Button>
        </Link>
      </Flex>
    </Box>
  );
}



export async function getServerSideProps({ params }) {
  try {
    const { id} = params;
    const { data } = await supabase
      .from("cars")
      .select("*")
      .eq("id", id)
      .single();

    return {
      props: {
        car: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}