import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Image } from "@chakra-ui/next-js";
import { dateToString } from "@/utils/dateToString";

export default function NewRentForm({
  onSubmit,
  profile,
  availableDates,
  car,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const onSubmitHandler = (data) => {
    onSubmit({ ...data, count });
    setShowModal(true);
  };

  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    const isStartDateAvailable = availableDates.every((date) => {
      const startDateOverlap =
        selectedStartDate <= date.endDate &&
        selectedStartDate >= date.startDate;
      const endDateOverlap =
        endDate <= date.endDate && endDate >= date.startDate;
      const insideRange =
        selectedStartDate >= date.startDate && endDate <= date.endDate;
      return !startDateOverlap && !endDateOverlap && !insideRange;
    });

    if (isStartDateAvailable) {
      setStartDate(selectedStartDate);
    } else {
      console.log("Wybrana data rozpoczęcia rezerwacji jest niedostępna.");
    }
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    const isEndDateAvailable = availableDates.every((date) => {
      const startDateOverlap =
        startDate <= date.endDate && startDate >= date.startDate;
      const endDateOverlap =
        selectedEndDate <= date.endDate && selectedEndDate >= date.startDate;
      const insideRange =
        startDate >= date.startDate && selectedEndDate <= date.endDate;
      return !startDateOverlap && !endDateOverlap && !insideRange;
    });

    if (isEndDateAvailable) {
      setEndDate(selectedEndDate);
    } else {
      console.log("Wybrana data zakończenia rezerwacji jest niedostępna.");
    }
  };

  const handleConfirmReservation = () => {
    handleSubmit(onSubmitHandler)();
    setShowModal(false);
  };
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = today.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const minStartDate = `${year}-${month}-${day}`;

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      const countValue = days * car.price;
      setCount(countValue);
    }
  }, [startDate, endDate, car.price]);

  return (
    <Box minH={"75vh"} mt={"5rem"}>
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
              type="date"
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
              type="date"
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
            <Text>{availableDates.carPrice}</Text>
            <Button
              type="button" // Changed to type="button"
              bg={"red.400"}
              margin={"2rem auto"}
              px={"2rem"}
              onClick={() => setShowModal(true)}
            >
              Wyślij
            </Button>
            {showModal && (
              <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Potwierdź rezerwację</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex gap={"1rem"}>
                      <Box bg={"blue"} w={"max-content"}>
                        {/* <Image src={car.img} width={200} height={150} /> */}
                      </Box>
                      <Flex direction={"column"}>
                        <HStack>
                          <Text fontWeight={"500"}>Marka:</Text>
                          <Text>{car.brand}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight={"500"}>Model:</Text>
                          <Text>{car.model}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight={"500"}>Od:</Text>
                          <Text>{dateToString(startDate)}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight={"500"}>Do:</Text>
                          <Text>{dateToString(endDate)}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight={"500"}>Koszt:</Text>
                          <Text>{count} ZŁ</Text>
                        </HStack>
                      </Flex>
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                    <Button bg={"red.400"} onClick={handleConfirmReservation}>
                      Potwierdź
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </FormControl>
        )}
      </Flex>
    </Box>
  );
}
