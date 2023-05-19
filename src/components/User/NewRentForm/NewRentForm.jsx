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
import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function NewRentForm({ onSubmit, profile }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  
  
 
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
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
         {profile &&
        <FormControl
          as="form"
          spacing={"1rem"}
          onSubmit={onSubmit}
          textAlign={"center"}
        >
          <FormLabel>Od</FormLabel>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            onChange={handleStartDateChange}
            max={endDate}
            required
          />
          <FormLabel>Do</FormLabel>
          <Input
            type="date"
            name="endDate"
            id="endDate"
            onChange={handleEndDateChange}
            min={startDate}
            required
          />
          <FormLabel>Imię</FormLabel>
         
          <Input
            type="text"
            name="firstName"
            id="firstName"
            defaultValue={profile.firstName}
            
          />
          <FormLabel>Nazwisko</FormLabel>
          <Input type="text" name="lastName" id="lastName" required defaultValue={profile.lastName}  />
          <FormLabel>Miejsowość</FormLabel>
          <Input type="text" name="city" id="city" required  defaultValue={profile.city}/>
          <FormLabel>Ulica i numer </FormLabel>
          <Input type="text" name="street" id="street" required defaultValue={profile.street} />
          <FormLabel>Numer telefonu</FormLabel>
          <Input type="number" name="phoneNumber" id="phoneNumber" required  defaultValue={profile.phoneNumber}/>

          <Button type="submit" bg={"red.400"} margin={"2rem auto"} px={"2rem"}>
            Wyślij
          </Button>
        </FormControl>}
      </Flex>
    </Box>
  );
}
