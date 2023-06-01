import { useState, useEffect } from "react";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { supabase } from "@/lib/supabase";
import CarCard from "@/components/User/Cars/CarDetailCard/CarDetailCard";
import SortForm from "@/components/User/CarsFilters/SortForm";
import { useRouter } from "next/router";
import SectionHeader from "@/components/UI/SectionHeader";
import Pagination from "@/components/Pagination/Pagination";
import { paginate } from "@/utils/paginate";

export default function Cars({ cars }) {
  // console.log(cars);
  const [sortOption, setSortOption] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 10;
  // const paginatedPosts = paginate(cars, currentPage, pageSize);
 
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
 

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortFunctions = new Map([
    ["power-desc", (a, b) => b.power - a.power],
    ["power-asc", (a, b) => a.power - b.power],
    ["year-desc", (a, b) => b.year - a.year],
    ["year-asc", (a, b) => a.year - b.year],
    ["price-desc", (a, b) => b.price - a.price],
    ["price-asc", (a, b) => a.price - b.price],
  ]);

  // const sortedCars = paginatedPosts.sort(sortFunctions.get(sortOption) || (() => 0));
  const sortedCars = cars.sort(sortFunctions.get(sortOption) || (() => 0));

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
        <SectionHeader title={"Nasze samochody"} />
      </Box>
      <SortForm handleSortChange={handleSortChange} />
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
        {sortedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        {/* <Pagination
        items={cars.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
        /> */}
      </Grid>
    </Flex>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await supabase
      .from("cars")
      .select("*")
      .order("brand", { ascending: false });

    return {
      props: {
        cars: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
