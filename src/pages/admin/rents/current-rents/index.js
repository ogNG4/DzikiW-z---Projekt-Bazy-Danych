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
import SectionHeader from "@/components/UI/SectionHeader";
import AdminRentDetailCard from "@/components/Admin/Rents/AdminRentDetailCard";

export default function CurrentRents({ rents }) {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);
  return (
    <>

        
     <SectionHeader title={'Aktualne rezerwacje'} />
     <Flex direction={'column'} gap={'1rem'} alignItems={'center'}>
     {rents.map((rent) => (
                <AdminRentDetailCard key={rent.id} rent={rent} />
              ))}
     </Flex>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data, error } = await supabase
      .from("rents")
      .select(`*, cars(*), profiles(*)`)
      .order("created_at", { ascending: false });
      
    return {
      props: {
        rents: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}