import SectionHeader from "@/components/UI/SectionHeader";
import SectionWrapper from "@/components/UI/SectionWrapper";
import RentDetailCard from "@/components/User/Rents/RentDetailCard/RentDetailCard";
import { useUser } from "@/context/UserContext";
import { supabase } from "@/lib/supabase";
import { Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyRents({ rents }) {
  const router = useRouter();
  const { profile } = useUser();

  useEffect(() => {
    if (profile?.id !== router.query.profileId) {
      router.replace("/");
    }
  }, [profile]);

  return (
    <>
      <SectionWrapper>
        <SectionHeader title={"Moje rezerwacje"} />
        <Flex direction={"column"} gap={"1rem"} alignItems={"center"}>
          {rents &&
            rents.map((rent) => <RentDetailCard key={rent.id} rent={rent} />)}
            {rents.length == 0 && <p>Brak wyników..</p>}
        </Flex>
      </SectionWrapper>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { profileId } = params;
    const { data } = await supabase
      .from("rents")
      .select(`*, cars(*)`)
      .eq("userId", profileId)
      .eq('status', 'during');

    return {
      props: {
        rents: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
