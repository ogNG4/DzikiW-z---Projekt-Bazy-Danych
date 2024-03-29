
import { supabase } from "../../../lib/supabase";
import { useEffect } from "react";
import AdminCarCard from "@/components/Admin/Cars/CarCard/AdminCarCard";
import Header from "@/components/Admin/UI/Header/Header";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAdmin } from "@/context/AdminContext";

export default function CarsList({ cars }) {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

  return (
    <>
      <Header title={"Lista pojazdów"} />
      <Flex
        direction={"column"}
        w={"100%"}
        p={"2rem"}
        gap={"20px"}
        alignItems={"center"}
      >
        {cars.map((car) => (
          <AdminCarCard key={car.id} car={car} />
        ))}
      </Flex>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { data } = await supabase
      .from("cars")
      .select("*")
      .order("created_at", { ascending: false });

    return {
      props: {
        cars: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
