import MessageCard from "@/components/Admin/Messages/MessageCard";
import { supabase } from "@/lib/supabase";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAdmin } from "@/context/AdminContext";
import { useRouter } from "next/router";

export default function ReadMessages({ messages }) {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

  return (
    <Box>
      <Center m={"2rem"} fontSize={"3rem"}>
        Wiadomości odczytane
      </Center>
      <Flex
        direction={"column"}
        w={"100%"}
        gap={"20px"}
        alignItems={"center"}
        p={"2rem"}
      >
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("status", "read")
      .order("created_at", { ascending: false });

    return {
      props: {
        messages: data,
      },

    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}