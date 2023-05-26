import { useAdmin } from "@/context/AdminContext";
import { supabase } from "@/lib/supabase";
import {
  Heading,
  Flex,
  Card,
  TableContainer,
  Text,
  VStack,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Box
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { dateToString } from "@/utils/dateToString";

export default function CurrentRents({ rents }) {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);
  return (
    <>
     <Flex direction={'column'} alignItems={'center'}>
        <Heading >Aktualne rezerwacje</Heading>
      
      <Box  w={'50%'}>
        <TableContainer m={'2rem auto'}  w={'100%'} >
          <Table overflow={'scroll'}>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Data</Th>
                <Th>Od</Th>
                <Th>Do</Th>
                <Th>Id pojazdu</Th>
                <Th>Marka</Th>
                <Th>Model</Th>
                <Th>Rocznik</Th>
                <Th>Imię</Th>
                <Th>Nazwisko</Th>
                <Th>Email</Th>
                <Th>Nr Tel</Th>
                <Th>Miasto</Th>
                <Th>Ulica</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rents.map((rent) => (
                <Tr key={rent.id}>
                  <Td>{rent.id}</Td>
                  <Td>{dateToString(rent.created_at)}</Td>
                  <Td>{dateToString(rent.startDate)}</Td>
                  <Td>{dateToString(rent.endDate)}</Td>
                  <Td>{rent.cars.id}</Td>
                  <Td>{rent.cars.brand}</Td>
                  <Td>{rent.cars.model}</Td>
                  <Td>{rent.cars.year}</Td>
                  <Td>{rent.firstName}</Td>
                  <Td>{rent.lastName}</Td>
                  <Td>{rent.profiles.email}</Td>
                  <Td>{rent.phoneNumber}</Td>
                  <Td>{rent.city}</Td>
                  <Td>{rent.street}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        </Box>
        </Flex>
     
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data, error } = await supabase
      .from("rents")
      .select(`*, cars(*), profiles(*)`);
      
    return {
      props: {
        rents: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}