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

export default function NewCarForm({ onSubmit }) {
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
        w={'auto'}
        maxW={'600px'}
        margin={"2rem auto"}
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
          <FormLabel>Zdjęcie</FormLabel>
          <Input type="text" name="img" id="img" />
          <FormLabel>Marka</FormLabel>
          <Select type="text" name="brand" id="brand" placeholder=' ' required>
            <option value="Bmw">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Nissan">Nissan</option>
          </Select>
          <FormLabel>Model</FormLabel>
          <Input type="text" name="model" id="model" required />
          <FormLabel>Pojemność </FormLabel>
          <NumberInput name="capacity" id="capacity" required>
            <NumberInputField placeholder="cm3" />
          </NumberInput>
          <FormLabel>Moc </FormLabel>
          <NumberInput name="power" id="power" required>
            <NumberInputField placeholder='KM' />
          </NumberInput>
          <FormLabel>Typ</FormLabel>
          <Select type="text" name="type" id="type" placeholder='' required>
            <option value="Sportowy">Sportowy</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Combi">Kombi</option>
          </Select>
          <FormLabel>Rocznik</FormLabel>
          <Select type="number" name="year" id="year" placeholder='' required>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </Select>
          <FormLabel>Kolor</FormLabel>
          <Select type="text" name="color" id="color" required>
            <option value="Czarny">Czarny</option>
            <option value="Biały">Biały</option>
            <option value="Czerwony">Czerwony</option>
            <option value="Szary">Szary</option>
            <option value="Zielony">Zielony</option>
            <option value="Żółty">Żółty</option>
          </Select>
          <FormLabel>Cena za dobę</FormLabel>
          <NumberInput name="price" id="price" required>
            <NumberInputField />
          </NumberInput>
          <FormLabel>Skrzynia biegów</FormLabel>
          <Select type="text" name="transmission" id="transmission"  required>
            <option value="automatyczna">Automatyczna</option>
            <option value="manualna">Manualna</option>
          </Select>
          <FormLabel>Opis</FormLabel>
          <Textarea
            type="text"
            name="description"
            id="description"
            rows={10}
            required
          />

          <Button type="submit" bg={"red.400"} margin={"2rem auto"} px={"2rem"} >
            Wyślij
          </Button>
        </FormControl>
      </Flex>
    </Box>
  );
}
