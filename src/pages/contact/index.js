
import { useToast } from "@chakra-ui/react";
import ContactForm from "../../components/User/ContactForm/ContactForm";
import { useRouter } from "next/router";
export default function Contact() {
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (data) => {
  try {
    const response = await fetch("../api/user/contact", {
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
        title: 'Pomyślnie wysłano wiadomość',
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
    <ContactForm onSubmit={handleSubmit}/>
    </>
  );
}