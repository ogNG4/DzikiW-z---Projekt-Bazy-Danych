import {
  FormControl,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Text,
  Select,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function NewCarForm({ onSubmit }) {
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
    <Box minH={"75vh"} mt={"5rem"}>
      <Text
        margin={"auto"}
        width={"max-content"}
        fontSize={{ base: "2rem", md: "3rem" }}
        fontWeight={"500"}
      >
        Dodaj pojazd
      </Text>
      <Flex
        w={"auto"}
        maxW={"600px"}
        margin={"2rem auto"}
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
          <FormLabel>Zdjęcie</FormLabel>
          <Input type="text" {...register("img", { required: true })} />
          {errors.img && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}
          <FormLabel>Marka</FormLabel>
          <Input type="text" {...register("brand", { required: true })} />
          {errors.brand && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}
          <FormLabel>Model</FormLabel>
          <Input type="text" {...register("model", { required: true })} />
          {errors.model && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}
          <FormLabel>Pojemność </FormLabel>
          <Input type="number" {...register("capacity", { required: true })} />
          <FormLabel>Moc </FormLabel>
          <Input type="number" {...register("power", { required: true })} />
          <FormLabel>Typ</FormLabel>
          <Select type="text" {...register("type", { required: true })}>
            <option value="Sportowy">Sportowy</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Combi">Kombi</option>
            <option value="Sedan">Sedan</option>
            <option value="Coupe">Coupe</option>
          </Select>
          <FormLabel>Rocznik</FormLabel>
          <Input
            type="number"
            {...register("year", {
              required: true,
              minLength: 9,
              maxLength: 9,
            })}
          />
          {errors.year && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}
          {errors.year && errors.year.type === "minLength" && (
            <Text color={"yellow.200"}>Min 4 cyfry</Text>
          )}
          {errors.year && errors.year.type === "maxLength" && (
            <Text color={"yellow.200"}>Max 4 cyfry</Text>
          )}
          <FormLabel>Kolor</FormLabel>
          <Input type="text" {...register("color", { required: true })} />
          {errors.color && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}
          <FormLabel>Cena za dobę</FormLabel>
          <Input type="number" {...register("price", { required: true })} />
          {errors.price && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}
          <FormLabel>Skrzynia biegów</FormLabel>
          <Select type="text" {...register("transmission", { required: true })}>
            <option value="automatyczna">Automatyczna</option>
            <option value="manualna">Manualna</option>
          </Select>
          <FormLabel>Opis</FormLabel>
          <Textarea
            type="text"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}

          <Button type="submit" bg={"red.400"} margin={"2rem auto"} px={"2rem"}>
            Wyślij
          </Button>
        </FormControl>
      </Flex>
    </Box>
  );
}
