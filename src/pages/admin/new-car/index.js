import NewCarForm from "../../../components/Admin/Forms/NewCarForm/NewCarForm";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAdmin } from "@/context/AdminContext";
import { useToast } from "@chakra-ui/react";

export default function NewCar() {
  const isAdmin = useAdmin();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

  const newCarSubmitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = {};
    for (let [key, value] of form) {
      formData[key] = value;
    }
    try {
      const response = await fetch("../api/admin/new-car", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: 'Pomyślnie dodano samochód',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        })
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <NewCarForm onSubmit={newCarSubmitHandler} />
    </>
  );
}
