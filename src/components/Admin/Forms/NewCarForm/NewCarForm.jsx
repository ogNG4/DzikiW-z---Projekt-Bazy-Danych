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


export default function NewCarForm({onSubmit}){
    return (
        <Box minH={'75vh'} mt={'10rem'}>
        <Text
          margin={"2rem auto"}
          width={"max-content"}
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight={"500"}
        >
          Dodaj pojazd
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
            <FormLabel>Marka</FormLabel>
            <Input type="text" name="brand" id="brand" required />
            <FormLabel>Model</FormLabel>
            <Input type="text" name="model" id="model" required />
            <FormLabel>Pojemność</FormLabel>
            <Input type="number" name="capacity" id="capacity" required   />
            <FormLabel>Moc</FormLabel>
            <Input type="number" name="power" id="power" required  />
            <FormLabel>Kolor</FormLabel>
            <Input type="text" name="color" id="color" required  />
          
            <Button type="submit" bg={"red.400"} margin={"2rem auto"} px={"2rem"}>
              Wyślij
            </Button>
          </FormControl>
        </Flex>
      </Box>
    )
}