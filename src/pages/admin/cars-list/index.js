import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../../../lib/supabase";
import { useEffect } from "react";
import AdminCarCard from "@/components/Admin/Cars/CarCard/AdminCarCard";
import Header from "@/components/Admin/UI/Header/Header";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function CarsList({ cars }) {
  // const router = useRouter();
  // const handleDelete = async () => {
  //   const response = await fetch(`/api/admin/cars/deleteCar/${cars.id}`, { method: "DELETE" });
  //   if (response.ok) {
   
  //     router.reload();
        
  //   } else {
  //     console.error(response.statusText);
  //   }
  // };

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
          <AdminCarCard
            key={car.id}
            car={car}
            // handleDelete={handleDelete}
           
          />
        ))}
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await supabase.from("cars").select("*").order('created_at',{ascending: false});

    return {
      props: {
        cars: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
