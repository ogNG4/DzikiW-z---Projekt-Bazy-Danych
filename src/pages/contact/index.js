import { useToast } from "@chakra-ui/react";
import ContactForm from "../../components/User/ContactForm/ContactForm";
import { useRouter } from "next/router";
import SectionWrapper from "@/components/UI/SectionWrapper";
import SectionHeader from "@/components/UI/SectionHeader";
import { supabase } from "@/lib/supabase";
import { useUser } from "@/context/UserContext";
export default function Contact() {
  const router = useRouter();
  const toast = useToast();
  const { profile } = useUser();

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
          title: "Pomyślnie wysłano wiadomość",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        console.error(response);
        toast({
          title: "Błąd",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionWrapper>
        <SectionHeader title={"Skontaktuj się z nami"} />
        <ContactForm onSubmit={handleSubmit} profile={profile} />
      </SectionWrapper>
    </>
  );
}
