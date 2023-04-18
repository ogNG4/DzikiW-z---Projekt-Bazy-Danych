import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { supabase } from "@/lib/supabase";

import CarCard from "@/components/UI/CarCard";

export default function Cars({ cars }) {
  return (
    <Flex
      minH={"100vh"}
      flexDirection={"column"}
      alignItems={"center"}
      my={"8rem"}
      p={"2rem"}
      width={"100%"}
    >
      <Box w={"max-content"}>
        <Text
          fontSize={{ base: "1.6rem", md: "2.7rem" }}
          fontWeight={"400"}
          textTransform={"uppercase"}
          letterSpacing={"5px"}
        >
          Flota
        </Text>
      </Box>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr ",
          lg: "1fr 1fr 1fr",
          xl: " 1fr 1fr 1fr 1fr",
        }}
        gap={6}
        mt={"3rem"}
        p={"1rem"}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Grid>
    </Flex>
  );
}

export async function getStaticProps() {
  try {
    const { data, error } = await supabase.from("cars").select("*");

    return {
      props: {
        cars: data,
      },

      revalidate: 60,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}
