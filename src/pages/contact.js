import ContactForm from "@/components/ContactForm/ContactForm";
import {
  FormControl,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function Contact() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const formData = {};

    for (let [key, value] of form) {
      formData[key] = value;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
    <Text margin={'2rem auto'} width={"max-content"} fontSize={{base:'2rem', md: '3rem'}} fontWeight={'500'}>Skontaktuj się z nami</Text>
    <Flex
      w={{ base: "90%", md: "70%", lg: "50%", xl: "40%", "2xl": "30%" }}
      margin={"5rem auto"}
      bg={"gray.700"}
      p={"1.5rem"}
      borderRadius={"1rem"}
    >
      
      <FormControl as="form" spacing={"1rem"} onSubmit={handleSubmit} textAlign={'center'}>
        <FormLabel>Imię</FormLabel>
        <Input type="text" name="firstName" id="firstName" required />
        <FormLabel>Nazwisko</FormLabel>
        <Input type="text" name="lastName" id="lastName" required />
        <FormLabel>E-mail</FormLabel>
        <Input type="email" name="email" id="email" required />
        <FormLabel>Numer Telefonu</FormLabel>
        <Input type="number" name="phoneNumber" id="phoneNumber" required />
        <FormLabel>Wiadomość</FormLabel>
        <Textarea type="text" name="message" id="message" rows={10} required />
        <Button type="submit" bg={"red.400"} margin={'2rem auto'} px={'2rem'} >
          Wyślij
        </Button>
      </FormControl>
    </Flex>
    </Box>
  );
}
