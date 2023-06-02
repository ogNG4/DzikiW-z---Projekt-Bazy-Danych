import { useUser } from "@/context/UserContext";
import { dateToString } from "@/utils/dateToString";
import { Card, Image, Flex, Box, Text, VStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RentDetailCard({ rent }) {
  const router = useRouter();
  const isCurrentRentsPage = router.pathname === `/my-rents/[profileId]`;

  const handleUpdate = async () => {
    router.reload();
    const response = await fetch(`/api/user/cancel-rent/${rent.id}`, {
      method: "POST",
    });
    if (response.ok) {
    } else {
      console.error(response);
    }
  };

  const isCancelable = () => {
    const startDate = new Date(rent.startDate);
    const currentDate = new Date();
    const timeDiff = startDate.getTime() - currentDate.getTime();
    const hoursDiff = timeDiff / (1000 * 3600); // przeliczenie na godziny
    return hoursDiff > 24;
  };

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
        {isCurrentRentsPage && isCancelable() && (
          <Button ml={"auto"} bg={"red.400"} onClick={handleUpdate}>
            <Text fontSize={"1.2rem"} fontWeight={"500"}>
              Anuluj
            </Text>
          </Button>
        )}
      </Flex>
      <Flex gap={"1rem"}>
        <VStack align={"left"}>
          <Text fontSize={"1.2rem"} fontWeight={"500"}>
            Marka:
          </Text>
          <Text>{rent.cars.brand}</Text>
        </VStack>
        <VStack>
          <Text fontSize={"1.2rem"} fontWeight={"500"}>
            Model:
          </Text>
          <Text>{rent.cars.model}</Text>
        </VStack>
        <VStack align={"left"}>
          <Text fontSize={"1.2rem"} fontWeight={"500"}>
            Kwota:
          </Text>
          <Text>{rent.count} ZŁ</Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
