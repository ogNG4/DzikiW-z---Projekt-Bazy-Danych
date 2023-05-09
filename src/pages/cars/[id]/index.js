import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Car({ car }) {
  return (
    <Box w={"100%"} minH={"100vh"} mt={"7rem"} p={"2rem"}>
      <Flex direction={"column"}  gap={'15px'} fontSize={'2rem'}>
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
          <Text>{car.color} </Text>
        </HStack>
        <HStack>
          <Text>Typ:</Text>
          <Text>{car.type} </Text>
        </HStack>
        <HStack>
          <Text>Skrzynia biegów:</Text>
          <Text>{car.transmission} </Text>
        </HStack>
        <HStack>
          <Text>Rocznik:</Text>
          <Text>{car.year} </Text>
        </HStack>
        <HStack>
          <Text>Opis:</Text>
          <Text>{car.description} </Text>
        </HStack>
        <HStack>
          <Text>Cena za dobę:</Text>
          <Text>{car.price} ZŁ </Text>
        </HStack>
        <Link href={'/cars'}>
            <Button bg={'tomato'}>
                Powrót
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