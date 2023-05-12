import { Box, Flex, HStack, Image, Text, Button, Card, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function CarCard({ car }) {
  return (
    <Card h={'auto'} maxH={'35vh'} w={"auto"} overflow={'hidden'}>
      <Flex direction={"column"} h={"100%"}>
        <Box h={"60%"} overflow={"hidden"} position={"relative"}>
          <Image src={car.img} objectFit={"cover"} boxSize={"100%"} />
          <Text
            position={"absolute"}
            top={1}
            right={1}
            textTransform={"uppercase"}
            letterSpacing={"2px"}
            borderRadius={"2px"}
            p={"0 15px"}
            fontWeight={"500"}
            bg={"black"}
          >
            {car.type}
          </Text>
          <Flex
            direction={"column"}
            position={"absolute"}
            bottom={1}
            left={2}
            fontWeight={"500"}
            textTransform={"uppercase"}
            letterSpacing={"2px"}
            
          >
            <Text fontSize={'1.3rem'}>{car.brand}</Text>
            <Text>{car.model}</Text>
          </Flex>
        </Box>
        <Flex p={'10px'} fontWeight={'500'} alignItems={'center'} gap={'15px'}>
          <Flex direction={'column'} textAlign={'left'} >
            <Text>Moc: {car.power} KM</Text>
            <Text>Pojemność: {car.capacity} cm3</Text>
            <Text>Cena za dobę: {car.price} PLN</Text>
            <Text>Dostępny od: 21.05.2023</Text>
          </Flex>
          <Link  href={`/cars/${car.id}`}>
          <Button bg={'tomato'}>
              Szczegóły
          </Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
