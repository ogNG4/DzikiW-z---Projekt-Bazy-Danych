import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";
import EditCarForm from "@/components/Admin/Forms/EditCarForm/EditCarForm";
import { useToast } from "@chakra-ui/react";
export default function EditCar({ car }) {
  const editCarHandler = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = {};
    for (let [key, value] of form) {
      formData[key] = value;
    }

    try {
      const response = await fetch(`/api/admin/cars/editCar/${car.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(response.ok){
        toast({
            title: 'Pomyślnie wykonano edycję',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-right'
          })
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Edit Car</h1>
      <EditCarForm car={car} onSubmit={editCarHandler} />
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