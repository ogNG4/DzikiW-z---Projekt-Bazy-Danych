import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";

export default function Car({ car }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { profile } = useUser();
  const router = useRouter();
  

  const handleRent = async () => {
    if (!startDate || !endDate) {
      // Add validation for the input fields if needed
      return;
    }

    const rentalData = {
      carId: car.id,
      userId: profile?.id,
      startDate,
      endDate,
    };

    try {
      const response = await supabase.from("rents").insert(rentalData);
      if (response.error) {
        console.log(response.error);
      }
       else {
        await supabase
          .from("cars")
          .update({ isRent: true })
          .eq("id", car.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box w={"100%"} minH={"100vh"} mt={"7rem"} p={"2rem"}>
      <Flex direction={"column"} gap={"15px"} fontSize={"2rem"}>
        <HStack>
          <Text>Marka:</Text>
          <Text>{car.brand}</Text>
        </HStack>
        <HStack>
          <Text>Model:</Text>
          <Text>{car.model}</Text>
        </HStack>
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
          <Text>Data rozpoczęcia wypożyczenia:</Text>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </HStack>
        <HStack>
          <Text>Data zakończenia wypożyczenia:</Text>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </HStack>
        <HStack>
          <Button bg="tomato" onClick={handleRent}>
            Wynajmij
          </Button>
        </HStack>
        <Link href={"/cars"}>
          <Button bg={"tomato"}>
            Powrót
ót
            </Button>
            
        </Link>
      </Flex>
    </Box>
  );
}

export async function getStaticPaths() {
  try {
    const { data } = await supabase.from("cars").select("id");

    const paths = data.map((car) => ({
      params: { id: car.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { id } = params;

    const { data } = await supabase
      .from("cars")
      .select("*")
      .eq("id", id)
      .single();

    return {
      props: {
        car: data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}