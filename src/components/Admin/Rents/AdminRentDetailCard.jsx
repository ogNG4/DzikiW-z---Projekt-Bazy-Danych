import { dateToString } from "@/utils/dateToString";
import { Flex, HStack, Text } from "@chakra-ui/react";


export default function AdminRentDetailCard({rent}){
    return (
        <Flex bg={'gray.700'} w={'60%'} height={'35vh'} borderRadius={'.5rem'} p={'1rem'} gap={'1.5rem'}>
            <Flex direction={'column'}  gap={'1rem'}  >
               <HStack fontSize={'1.4rem'} fontWeight={'500'}>
                <Text>Numer rezerwacji: </Text>
                <Text>{rent.id}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Data: </Text>
                <Text>{dateToString(rent.created_at)}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Data rozpoczęcia: </Text>
                <Text>{dateToString(rent.startDate)}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Data zakończenia: </Text>
                <Text>{dateToString(rent.startDate)}</Text>
               </HStack>
            </Flex>
            <Flex direction={'column'}    gap={'1rem'} >
               <HStack fontSize={'1.4rem'} fontWeight={'500'}>
                <Text>Numer pojazdu: </Text>
                <Text>{rent.carId}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Marka: </Text>
                <Text>{rent.cars.brand}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Model: </Text>
                <Text>{rent.cars.model}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Rocznik: </Text>
                <Text>{rent.cars.year}</Text>
               </HStack>
            </Flex>
            <Flex direction={'column'}    gap={'1rem'} >
               <HStack fontSize={'1.4rem'} fontWeight={'500'}>
                <Text>ID klienta: </Text>
                <Text fontSize={'.8rem'}>{rent.userId}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Email: </Text>
                <Text>{rent.profiles.email}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Numer telefonu: </Text>
                <Text>{rent.profiles.phoneNumber}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Imię: </Text>
                <Text>{rent.firstName}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Nazwisko: </Text>
                <Text>{rent.lastName}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Miasto: </Text>
                <Text>{rent.city}</Text>
               </HStack>
               <HStack >
                <Text fontSize={'1.1rem'} fontWeight={'500'}>Ulica: </Text>
                <Text>{rent.street}</Text>
               </HStack>
            </Flex>
        </Flex>
    )
}