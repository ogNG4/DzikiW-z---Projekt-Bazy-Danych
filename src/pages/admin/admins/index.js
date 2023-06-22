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

import { useEffect, useState } from "react";
import SectionHeader from "@/components/UI/SectionHeader";


export default function Admins({ profiles }) {
  const isAdmin = useAdmin();
  const router = useRouter();
  
  const [highlightedId, setHighlightedId] = useState(null);
    const handleMouseEnter = (profileId) => {
      setHighlightedId(profileId);
    };
  
    const handleMouseLeave = () => {
      setHighlightedId(null);
    };
  
  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

    return (
      <Flex direction="column" gap="1rem" alignItems="center">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center">
        Administratorzy
      </Text>
      {profiles.map((profile) => (
        <Flex
          key={profile.id}
          bg="gray.200"
          p="1rem"
          borderRadius=".5rem"
          alignItems="flex-start"
          w="100%"
          cursor="pointer"
          _hover={{ bg: "gray.300" }}
          onMouseEnter={() => handleMouseEnter(profile.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Flex direction="column" w="50%">
            <Text
              fontSize="xl"
              fontWeight={highlightedId === profile.id ? "bold" : "normal"}
              color={highlightedId === profile.id ? "black" : "gray.700"}
            >
              Nazwa administratora:
            </Text>
            <Text
              fontSize="xl"
              fontWeight={highlightedId === profile.id ? "bold" : "normal"}
              color={highlightedId === profile.id ? "black" : "gray.700"}
            >
              Adres e-mail:
            </Text>
          </Flex>
          <Flex direction="column" w="50%">
            <Text
              fontSize="xl"
              fontWeight={highlightedId === profile.id ? "bold" : "normal"}
              color={highlightedId === profile.id ? "black" : "gray.700"}
            >
              {highlightedId === profile.id ? profile.firstName : ""}
            </Text>
            <Text
              fontSize="xl"
              fontWeight={highlightedId === profile.id ? "bold" : "normal"}
              color={highlightedId === profile.id ? "black" : "gray.700"}
            >
              {highlightedId === profile.id ? profile.email : ""}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

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
