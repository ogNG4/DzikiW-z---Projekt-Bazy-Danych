
import { useToast } from "@chakra-ui/react";
import ContactForm from "../../components/User/ContactForm/ContactForm";
import { useRouter } from "next/router";
export default function Contact() {
  const router = useRouter();
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const formData = {};

    for (let [key, value] of form) {
      formData[key] = value;
    }

    try {
      const response = await fetch("../api/user/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/");
        toast({
          title: 'Pomyślnie wysłano wiadomość',
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
    <ContactForm onSubmit={handleSubmit}/>
    </>
  );
}