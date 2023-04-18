import {
    FormControl,
    Flex,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
    Text
  } from "@chakra-ui/react";
  
  export default function ContactForm({ onSubmit }) {
    return (
        <Box minH={'75vh'} mt={'10rem'}>
        <Text
          margin={"2rem auto"}
          width={"max-content"}
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight={"500"}
        >
          Skontaktuj się z nami
        </Text>
        <Flex
          w={{ base: "90%", md: "70%", lg: "50%", xl: "40%", "2xl": "30%" }}
          margin={"5rem auto"}
          bg={"gray.700"}
          p={"1.5rem"}
          borderRadius={"1rem"}
        >
          <FormControl
            as="form"
            spacing={"1rem"}
            onSubmit={onSubmit}
            textAlign={"center"}
          >
            <FormLabel>Imię</FormLabel>
            <Input type="text" name="firstName" id="firstName" required />
            <FormLabel>Nazwisko</FormLabel>
            <Input type="text" name="lastName" id="lastName" required />
            <FormLabel>E-mail</FormLabel>
            <Input type="email" name="email" id="email" required   />
            <FormLabel>Numer Telefonu</FormLabel>
            <Input type="number" name="phoneNumber" id="phoneNumber" required  />
            <FormLabel>Wiadomość</FormLabel>
            <Textarea
              type="text"
              name="message"
              id="message"
              rows={10}
              required
            />
            <Button type="submit" bg={"red.400"} margin={"2rem auto"} px={"2rem"}>
              Wyślij
            </Button>
          </FormControl>
        </Flex>
      </Box>
    );
  }