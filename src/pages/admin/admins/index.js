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
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useEffect } from "react";
import SectionHeader from "@/components/UI/SectionHeader";


export default function Admins({ profiles }) {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);
  return (
    <>
      <SectionHeader title={"administratorzy"} />
      <Flex direction={"column"} gap={"1rem"} alignItems={"center"}>
        {profiles.map((profile) => (
            <Flex direction={"column"} alignItems={"center"}>
                <Box>{profile.email}</Box>
            </Flex>
        ))}
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("isAdmin",true)
    return {
      props: {
        profiles: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
