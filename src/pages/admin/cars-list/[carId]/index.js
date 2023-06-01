import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";
import CarForm from "@/components/Admin/Forms/CarForm/CarForm";
import { useToast } from "@chakra-ui/react";
import { useAdmin } from "@/context/AdminContext";
import { useEffect } from "react";

export default function EditCar({ car }) {
  const isAdmin = useAdmin();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

  const handleSubmit = async (data) => {
    try {
      const response = await fetch(`/api/admin/cars/editCar/${car.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/admin/cars-list");
        toast({
          title: "Pomyślnie wykonano edycję",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "Błąd",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Edit Car</h1>
      <CarForm car={car} onSubmit={handleSubmit} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { carId } = params;
    const { data } = await supabase
      .from("cars")
      .select("*")
      .eq("id", carId)
      .single();

    return {
      props: {
        car: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
