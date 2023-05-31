import { useForm } from "react-hook-form";
import {
  FormControl,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import SectionHeader from "@/components/UI/SectionHeader";

export default function EmailForm({ onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
    // console.log(data);
    reset();
  };

  return (
    <>
      <Box minH={"75vh"} mt={"7rem"}>
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
            onSubmit={handleSubmit(submitHandler)}
            textAlign={"center"}
          >
            <FormLabel>Do</FormLabel>
            <Input type="email" {...register("to", { required: true })} />
            <FormLabel>Temat</FormLabel>
            <Input type="text" {...register("subject", { required: true })} />
            <FormLabel>Wiadomosc</FormLabel>
            <Input type="text" {...register("text", { required: true })} />

            <Button
              type="submit"
              bg={"red.400"}
              margin={"2rem auto"}
              px={"2rem"}
            >
              Wyślij
            </Button>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
}
