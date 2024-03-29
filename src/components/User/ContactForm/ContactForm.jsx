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
import { useSession } from "@supabase/auth-helpers-react";

export default function ContactForm({ onSubmit, profile }) {
  const session = useSession();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
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
            <FormLabel>Imię</FormLabel>
            <Input
              type="text"
              {...register("firstName", {
                required: true,
                minLength: 2,
                maxLength: 18,
              })}
              defaultValue={session ? profile?.firstName : ""}
            />
            {errors.firstName && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <Text color={"yellow.200"}>
                Imie jest za krótkie (min 2 znaki)
              </Text>
            )}
            {errors.firstName && errors.firstName.type === "maxLength" && (
              <Text color={"yellow.200"}>
                Imie jest za długie (max 18 znaków)
              </Text>
            )}

            <FormLabel>Nazwisko</FormLabel>
            <Input
              type="text"
              {...register("lastName", {
                required: true,
                minLength: 2,
                maxLength: 18,
              })}
              defaultValue={session ? profile?.lastName : ""}
            />
            {errors.lastName && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            {errors.lastName && errors.lastName.type === "minLength" && (
              <Text color={"yellow.200"}>
                Nazwisko jest za krótkie (min 2 znaki)
              </Text>
            )}
            {errors.lastName && errors.lastName.type === "maxLength" && (
              <Text color={"yellow.200"}>
                Nazwisko jest za długie (max 18 znaków)
              </Text>
            )}

            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              {...register("email", {
                required: "To pole jest wymagane",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Niepoprawny adres e-mail",
                },
              })}
              defaultValue={session ? profile?.email : ""}
            />
            {errors.email && (
              <Text color={"yellow.200"}>
                {errors.email.type === "pattern"
                  ? "Niepoprawny adres e-mail"
                  : errors.email.message}
              </Text>
            )}

            <FormLabel>Numer Telefonu</FormLabel>
            <Input
              type="number"
              {...register("phoneNumber", {
                required: true,
                minLength: 9,
                maxLength: 9,
              })}
              defaultValue={session ? profile?.phoneNumber : ""}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
              <Text color={"yellow.200"}>Numer jest za krótki</Text>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
              <Text color={"yellow.200"}>Numer jest za długi</Text>
            )}

            <FormLabel>Wiadomość</FormLabel>
            <Textarea
              type="text"
              {...register("message", { required: true, maxLength: 300 })}
              rows={10}
            />
            {errors.message && errors.message.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            {errors.message && errors.message.type === "maxLength" && (
              <Text color={"yellow.200"}>Maksymalnie 300 znaków</Text>
            )}

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
