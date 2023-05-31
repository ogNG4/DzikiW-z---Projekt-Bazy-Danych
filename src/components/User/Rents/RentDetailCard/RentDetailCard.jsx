import { dateToString } from "@/utils/dateToString";
import { Card, Image, Flex, Box, Text, VStack, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function RentDetailCard({ rent }) {
  return (
    
      <Flex
        direction={"column"}
        w={"50%"}
        minH={"35vh"}
        p={"1rem"}
        justifyContent={"space-between"}
        bg={"gray.700"}
        borderRadius={".5rem"}
        border={"1px solid gray"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"2rem"} fontWeight={"600"}>
            Numer rezerwacji: {rent.id}{" "}
          </Text>
          <Link href={`/cars/${rent.cars.id}`}>
            <Text
              ml={"1rem"}
              fontSize={"1.5rem"}
              fontWeight={"600"}
              color={"tomato"}
            >
              Zobacz pojazd
            </Text>
          </Link>
        </Flex>
        <Flex gap={"1rem"}>
          <VStack align={"left"}>
            <Text fontSize={"1.2rem"} fontWeight={"500"}>
              Data:
            </Text>
            <Text>{dateToString(rent.created_at)}</Text>
          </VStack>
          <VStack align={"left"}>
            <Text fontSize={"1.2rem"} fontWeight={"500"}>
              Od:
            </Text>
            <Text>{dateToString(rent.startDate)}</Text>
          </VStack>
          <VStack align={"left"}>
            <Text fontSize={"1.2rem"} fontWeight={"500"}>
              Do:
            </Text>
            <Text>{dateToString(rent.endDate)}</Text>
          </VStack>
          <Button>
            <Text fontSize={"1.2rem"} fontWeight={"500"}>
              Usuń
            </Text>
          </Button>
        </Flex>
        <Flex gap={"1rem"}>
          <VStack align={"left"}>
            <Text fontSize={"1.2rem"} fontWeight={"500"}>
              Marka:
            </Text>
            <Text>{rent.cars.brand}</Text>
          </VStack>
          <VStack align={"left"}>
            <Text fontSize={"1.2rem"} fontWeight={"500"}>
              Model:
            </Text>
            <Text>{rent.cars.model}</Text>
          </VStack>
          
        </Flex>
      </Flex>
    
  );
}
