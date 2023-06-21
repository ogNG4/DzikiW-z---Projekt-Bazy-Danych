import { useState } from "react";
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
  Select,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

export default function CarForm({ onSubmit, car }) {
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
        {car ? "Edytuj pojazd" : "Dodaj pojazd"}
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
          <Input
            type="text"
            {...register("img", { required: true })}
            defaultValue={car ? car.img : ""}
          />
          {errors.img && (
            <Text color={"yellow.200"}>To pole jest wymagane</Text>
          )}
          <FormLabel>Marka</FormLabel>
          <Select
            type="text"
            {...register("brand", { required: true })}
            defaultValue={car ? car.brand : ""}
          >
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Audi">Audi</option>
            <option value="Nissan">Nissan</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Subaru">Subaru</option>
            <option value="Kia">Kia</option>
            <option value="Tesla">Tesla</option>
            <option value="Mazda">Mazda</option>
            <option value="Jeep">Jeep</option>
            <option value="Lexus">Lexus</option>
            <option value="Volvo">Volvo</option>
            <option value="Porsche">Porsche</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Fiat">Fiat</option>
            <option value="Mini">Mini</option>
            <option value="GMC">GMC</option>
            <option value="Ram">Ram</option>
            <option value="Buick">Buick</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Acura">Acura</option>
            <option value="Infiniti">Infiniti</option>
            <option value="Dodge">Dodge</option>
            <option value="Škoda">Škoda</option>
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Renault">Renault</option>
            <option value="Seat">Seat</option>
            <option value="Smart">Smart</option>
            <option value="Dacia">Dacia</option>
            <option value="Opel">Opel</option>
            <option value="Subaru">Subaru</option>
            <option value="Tesla">Tesla</option>
            <option value="Bentley">Bentley</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Maserati">Maserati</option>
            <option value="Bugatti">Bugatti</option>
            <option value="Rolls-Royce">Rolls-Royce</option>
            <option value="McLaren">McLaren</option>
          </Select>
          <FormLabel>Model</FormLabel>
          <Input
            type="text"
            {...register("model", {
              required: "To pole jest wymagane",
              maxLength: { value: 20, message: "Maksymalnie 20 znaków" },
            })}
            defaultValue={car ? car.model : ""}
          />
          {errors.model && (
            <Text color={"yellow.200"}>{errors.model.message}</Text>
          )}
          <FormLabel>Pojemność</FormLabel>
          <Input
            type="number"
            {...register("capacity", {
              required: "To pole jest wymagane",
              maxLength: { value: 6, message: "Maksymalnie 6 znaków" },
            })}
            defaultValue={car ? car.capacity : ""}
          />
          {errors.capacity && (
            <Text color={"yellow.200"}>{errors.capacity.message}</Text>
          )}
          <FormLabel>Moc</FormLabel>
          <Input
            type="number"
            {...register("power", {
              required: "To pole jest wymagane",
              maxLength: { value: 5, message: "Maksymalnie 5 znaków" },
            })}
            defaultValue={car ? car.power : ""}
          />
          {errors.power && (
            <Text color={"yellow.200"}>{errors.power.message}</Text>
          )}
          <FormLabel>Typ</FormLabel>
          <Select
            type="text"
            {...register("type", { required: true })}
            defaultValue={car ? car.type : ""}
          >
            <option value="Sportowy">Sportowy</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Combi">Kombi</option>
            <option value="Sedan">Sedan</option>
            <option value="Coupe">Coupe</option>
            <option value="Kabriolet">Kabriolet</option>
            <option value="Minivan">Minivan</option>
            <option value="SUV">SUV</option>
            <option value="Crossover">Crossover</option>
            <option value="Pickup">Pickup</option>
            <option value="Terenowy">Terenowy</option>
            <option value="VAN">VAN</option>
            <option value="Limuzyna">Limuzyna</option>
            <option value="Mikrosamochód">Mikrosamochód</option>
            <option value="Rodzina">Rodzina</option>
            <option value="Kompaktowy">Kompaktowy</option>
            <option value="Elektryczny">Elektryczny</option>
            <option value="Hybrydowy">Hybrydowy</option>
            <option value="Luksusowy">Luksusowy</option>
            <option value="Off-road">Off-road</option>
            <option value="Retro">Retro</option>
            <option value="Miejski">Miejski</option>
            <option value="Kombivan">Kombivan</option>
            <option value="Trzydrzwiowy">Trzydrzwiowy</option>
            <option value="Pięciodrzwiowy">Pięciodrzwiowy</option>
            <option value="Dwumiejscowy">Dwumiejscowy</option>
            <option value="Transporter">Transporter</option>
            <option value="Napęd na cztery koła">Napęd na cztery koła</option>
            <option value="Klasyczny">Klasyczny</option>
            <option value="Elektryczno-hybrydowy">Elektryczno-hybrydowy</option>
            <option value="SUV coupe">SUV coupe</option>
            <option value="Premium">Premium</option>
            <option value="Ekonomiczny">Ekonomiczny</option>
            <option value="Żołnierski">Żołnierski</option>
            <option value="Nadwozie skrzyniowe">Nadwozie skrzyniowe</option>
            <option value="Nadwozie blaszane">Nadwozie blaszane</option>
            <option value="Samochód służbowy">Samochód służbowy</option>
            <option value="Samochód dla rodziny">Samochód dla rodziny</option>
            <option value="Samochód sportowo-użytkowy">
              Samochód sportowo-użytkowy
            </option>
            <option value="Samochód dla osoby niepełnosprawnej">
              Samochód dla osoby niepełnosprawnej
            </option>
            <option value="Samochód dla handlu">Samochód dla handlu</option>
            <option value="Samochód ratowniczy">Samochód ratowniczy</option>
            <option value="Samochód dla policji">Samochód dla policji</option>
            <option value="Samochód strażacki">Samochód strażacki</option>
            <option value="Samochód dla medycyny">Samochód dla medycyny</option>
            <option value="Samochód dla budownictwa">
              Samochód dla budownictwa
            </option>
            <option value="Samochód dostawczy">Samochód dostawczy</option>
            <option value="Samochód ciężarowy">Samochód ciężarowy</option>
            <option value="Samochód kempingowy">Samochód kempingowy</option>
            <option value="Samochód terenowy">Samochód terenowy</option>
            <option value="Samochód rajdowy">Samochód rajdowy</option>
            <option value="Samochód elektryczno-hydrauliczny">
              Samochód elektryczno-hydrauliczny
            </option>
            <option value="Samochód na wodór">Samochód na wodór</option>
            <option value="Samochód w pełni autonomiczny">
              Samochód w pełni autonomiczny
            </option>
            <option value="Samochód dla motoryzacji">
              Samochód dla motoryzacji
            </option>
            <option value="Samochód dla kolekcjonerów">
              Samochód dla kolekcjonerów
            </option>
            <option value="Samochód dla entuzjastów">
              Samochód dla entuzjastów
            </option>
          </Select>
          <FormLabel>Rocznik</FormLabel>
          <Input
            type="number"
            {...register("year", {
              required: "To pole jest wymagane",
              minLength: { value: 4, message: "Min 4 cyfry" },
              maxLength: { value: 4, message: "Max 4 cyfry" },
              min: { value: 1950, message: "Minimalny rocznik to 1950" },
              max: { value: 2024, message: "Maksymalny rocznik to 2024" },
            })}
            defaultValue={car ? car.year : ""}
          />
          {errors.year && (
            <Text color={"yellow.200"}>{errors.year.message}</Text>
          )}
          <FormLabel>Kolor</FormLabel>
          <Select
            type="text"
            {...register("color", { required: true })}
            defaultValue={car ? car.color : ""}
          >
            <option value="alabastrowy">Alabastrowy</option>
            <option value="amarantowy">Amarantowy</option>
            <option value="ametystowy">Ametystowy</option>
            <option value="antracytowy">Antracytowy</option>
            <option value="atramentowy">Atramentowy</option>
            <option value="barnet">Barnet</option>
            <option value="beżowy">Beżowy</option>
            <option value="biały">Biały</option>
            <option value="biskupi">Biskupi</option>
            <option value="błękitny">Błękitny</option>
            <option value="bordowy">Bordowy</option>
            <option value="brązowy">Brązowy</option>
            <option value="burgund">Burgund</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="cętkowany">Cętkowany</option>
            <option value="cerulean">Cerulean</option>
            <option value="chabrowy">Chabrowy</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="cielisty">Cielisty</option>
            <option value="cynamonowy">Cynamonowy</option>
            <option value="cytrynowy">Cytrynowy</option>
            <option value="czarny">Czarny</option>
            <option value="czerwony">Czerwony</option>
            <option value="fioletowy">Fioletowy</option>
            <option value="flamenco">Flamenco</option>
            <option value="fuksja">Fuksja</option>
            <option value="grafitowy">Grafitowy</option>
            <option value="granatowy">Granatowy</option>
            <option value="hebanowy">Hebanowy</option>
            <option value="indygo">Indygo</option>
            <option value="jasnoniebieski">Jasnoniebieski</option>
            <option value="jasnoróżowy">Jasnoróżowy</option>
            <option value="jedwabisty">Jedwabisty</option>
            <option value="junglowy">Junglowy</option>
            <option value="kakao">Kakao</option>
            <option value="kardynalski">Kardynalski</option>
            <option value="karmazynowy">Karmazynowy</option>
            <option value="khaki">Khaki</option>
            <option value="kobaltowy">Kobaltowy</option>
            <option value="koralowy">Koralowy</option>
            <option value="lazurowy">Lazurowy</option>
            <option value="lawendowy">Lawendowy</option>
            <option value="limonkowy">Limonkowy</option>
            <option value="magenta">Magenta</option>
            <option value="mahoń">Mahoń</option>
            <option value="malinowy">Malinowy</option>
            <option value="mandarynkowy">Mandarynkowy</option>
            <option value="miedziany">Miedziany</option>
            <option value="miętowy">Miętowy</option>
            <option value="morski">Morski</option>
            <option value="narcyzowy">Narcyzowy</option>
            <option value="niebieski">Niebieski</option>
            <option value="oliwkowy">Oliwkowy</option>
            <option value="opalinowy">Opalinowy</option>
            <option value="orzechowy">Orzechowy</option>
            <option value="paryski">Paryski</option>
            <option value="pastelowy">Pastelowy</option>
            <option value="perłowy">Perłowy</option>
            <option value="pistacjowy">Pistacjowy</option>
            <option value="plombowany">Plombowany</option>
            <option value="pomarańczowy">Pomarańczowy</option>
            <option value="przybrudzony">Przybrudzony</option>
            <option value="purpurowy">Purpurowy</option>
            <option value="różowy">Różowy</option>
            <option value="rudy">Rudy</option>
            <option value="salmiakowy">Salmiakowy</option>
            <option value="słonawy">Słonawy</option>
            <option value="srebrny">Srebrny</option>
            <option value="szafirowy">Szafirowy</option>
            <option value="szary">Szary</option>
            <option value="szmaragdowy">Szmaragdowy</option>
            <option value="topazowy">Topazowy</option>
            <option value="truskawkowy">Truskawkowy</option>
            <option value="turkusowy">Turkusowy</option>
            <option value="umbra">Umbra</option>
            <option value="viola">Viola</option>
            <option value="wiśniowy">Wiśniowy</option>
            <option value="włoski">Włoski</option>
            <option value="wrzosowy">Wrzosowy</option>
            <option value="wybielony">Wybielony</option>
            <option value="złocisty">Złocisty</option>
            <option value="złoty">Złoty</option>
            <option value="zgniły">Zgniły</option>
            <option value="zielony">Zielony</option>
            <option value="złotozłoty">Złotozłoty</option>
            <option value="złotobrązowy">Złotobrązowy</option>
            <option value="złotopomarańczowy">Złotopomarańczowy</option>
            <option value="złotosrebrny">Złotosrebrny</option>
            <option value="żółty">Żółty</option>
          </Select>
          <FormLabel>Cena za dobę</FormLabel>
          <Input
            type="number"
            {...register("price", {
              required: "To pole jest wymagane",
              maxLength: { value: 6, message: "Maksymalnie 6 znaków" },
            })}
            defaultValue={car ? car.price : ""}
          />
          {errors.price && (
            <Text color={"yellow.200"}>{errors.price.message}</Text>
          )}
          <FormLabel>Miesięczne koszty utrzymania</FormLabel>
          <Input
            type="number"
            {...register("upkeep", {
              required: "To pole jest wymagane",
              maxLength: { value: 6, message: "Maksymalnie 6 znaków" },
            })}
            defaultValue={car ? car.upkeep : ""}
          />
          {errors.upkeep && (
            <Text color={"yellow.200"}>{errors.upkeep.message}</Text>
          )}
          <FormLabel>Skrzynia biegów</FormLabel>
          <Select
            type="text"
            {...register("transmission", { required: true })}
            defaultValue={car ? car.transmission : ""}
          >
            <option value="automatyczna">Automatyczna</option>
            <option value="manualna">Manualna</option>
          </Select>
          <FormLabel>Opis</FormLabel>
          <Textarea
            type="text"
            {...register("description", {
              required: { value: true, message: "To pole jest wymagane" },
              maxLength: { value: 500, message: "Maksymalnie 500 znaków" },
            })}
            defaultValue={car ? car.description : ""}
          />
          {errors.description && (
            <Text color={"yellow.200"}>{errors.description.message}</Text>
          )}
          <Button type="submit" bg={"red.400"} margin={"2rem auto"} px={"2rem"}>
            Wyślij
          </Button>
        </FormControl>
      </Flex>
    </Box>
  );
}
