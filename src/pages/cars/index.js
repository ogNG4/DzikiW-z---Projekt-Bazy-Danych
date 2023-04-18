import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import CarCard from "@/components/UI/CarCard";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../api/getCars");
      const data = await response.json();
      setCars(data);
    }

    fetchData();
  }, []);

  return (
    <Flex
      minH={"100vh"}
      flexDirection={"column"}
      alignItems={"center"}
      my={"8rem"}
      p={'2rem'}
      width={'100%'}
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
      <Grid templateColumns={{base: '1fr', md:'1fr 1fr ', lg:"1fr 1fr 1fr", xl:" 1fr 1fr 1fr 1fr"}} gap={6} mt={"3rem"} p={"1rem"}>
        {cars.map((car) => (
            <CarCard key={car.id} car={car} />
        ))}
            
        </Grid>
    </Flex>
  );
}
