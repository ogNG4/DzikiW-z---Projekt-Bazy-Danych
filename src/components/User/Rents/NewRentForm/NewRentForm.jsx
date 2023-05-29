import { useForm } from "react-hook-form";
import {
  FormControl,
  Flex,
  FormLabel,
  Input,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useSession } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function NewRentForm({ onSubmit, profile, availableDates }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    const isStartDateAvailable = availableDates.every(
      (date) =>
        selectedStartDate < date.startDate || selectedStartDate > date.endDate
    );

    if (isStartDateAvailable) {
      setStartDate(selectedStartDate);
    } else {
      console.log("Wybrana data rozpoczęcia rezerwacji jest niedostępna.");
    }
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    const isEndDateAvailable = availableDates.every(
      (date) =>
        selectedEndDate < date.startDate || selectedEndDate > date.endDate
    );

    if (isEndDateAvailable) {
      setEndDate(selectedEndDate);
    } else {
      console.log("Wybrana data zakończenia rezerwacji jest niedostępna.");
    }
  };

  return (
    <Box minH={"75vh"} mt={"5rem"}>
      <Text
        margin={"auto"}
        width={"max-content"}
        fontSize={{ base: "2rem", md: "3rem" }}
        fontWeight={"500"}
      >
        Wynajmij pojazd
      </Text>
      <Flex
        w={"auto"}
        maxW={"600px"}
        margin={"2rem auto"}
        bg={"gray.700"}
        p={"1.5rem"}
        borderRadius={"1rem"}
      >
        {profile && (
          <FormControl
            as="form"
            spacing={"1rem"}
            onSubmit={handleSubmit(onSubmitHandler)}
            textAlign={"center"}
          >
            <FormLabel>Od</FormLabel>
            <Input
              type="datetime-local"
              {...register("startDate", { required: true })}
              value={startDate}
              onChange={handleStartDateChange}
              max={endDate}
              min={new Date().toISOString().slice(0, 16)}
            />
            {errors.startDate && errors.startDate.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            <FormLabel>Do</FormLabel>
            <Input
              type="datetime-local"
              {...register("endDate", { required: true })}
              value={endDate}
              onChange={handleEndDateChange}
              min={startDate}
            />
            {errors.endDate && errors.endDate.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            <FormLabel>Imię</FormLabel>
            <Input
              type="text"
              {...register("firstName", { required: true })}
              defaultValue={profile.firstName}
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            <FormLabel>Nazwisko</FormLabel>
            <Input
              type="text"
              {...register("lastName", { required: true })}
              defaultValue={profile.lastName}
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            <FormLabel>Miejsowość</FormLabel>
            <Input
              type="text"
              {...register("city", { required: true })}
              defaultValue={profile.city}
            />
            {errors.city && errors.city.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            <FormLabel>Ulica i numer</FormLabel>
            <Input
              type="text"
              {...register("street", { required: true })}
              defaultValue={profile.street}
            />
            {errors.street && errors.street.type === "required" && (
              <Text color={"yellow.200"}>To pole jest wymagane</Text>
            )}
            <FormLabel>Numer telefonu</FormLabel>
            <Input
              type="number"
              {...register("phoneNumber", {
                required: true,
                minLength: 9,
                maxLength: 9,
              })}
              defaultValue={profile.phoneNumber}
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
            <Button
              type="submit"
              bg={"red.400"}
              margin={"2rem auto"}
              px={"2rem"}
            >
              Wyślij
            </Button>
          </FormControl>
        )}
      </Flex>
    </Box>
  );
}
