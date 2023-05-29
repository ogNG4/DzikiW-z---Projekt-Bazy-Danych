import NewCarForm from "../../../components/Admin/Forms/NewCarForm/NewCarForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import { useToast } from "@chakra-ui/react";

export default function NewCar() {
  const isAdmin = useAdmin();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

  const handleSubmit = async (data) => {
    try {
      const response = await fetch("../api/admin/new-car", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        router.push("/");
        toast({
          title: 'Pomyślnie dodano samochoód',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <NewCarForm onSubmit={handleSubmit} />
    </>
  );
}
