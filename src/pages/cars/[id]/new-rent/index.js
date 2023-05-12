import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { useUser } from "@/context/UserContext";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function NewRent() {
    const [startDate, setStartDate] = useState("");
    const minEndDate = startDate ? new Date(startDate) : null;
    if (minEndDate) minEndDate.setDate(minEndDate.getDate() + 1);
    const [endDate, setEndDate] = useState("");
  const { profile } = useUser();
  const router = useRouter();
  const session = useSession();

  const handleRent = async () => {
    if (!startDate || !endDate) {
      // Dodaj walidację pól wejściowych, jeśli jest to wymagane
      return;
    }

    const carId = router.query.id; // // Pobranie identyfikatora samochodu z routera

    const rentalData = {
      carId,
      userId: profile?.id,
      startDate,
      endDate,
    };

    try {
      const response = await fetch("/api/user/new-rent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rentalData),
      });

      if (response.ok) {
        // Wypożyczenie utworzone pomyślnie
        router.push("/cars"); // Przekierowanie na stronę sukcesu
      } else {
        console.log("Failed to create rental");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HStack m={"20rem auto"}>
        <Text>Data rozpoczęcia wypożyczenia:</Text>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </HStack>
      <HStack>
        <Text>Data zakończenia wypożyczenia:</Text>
        <input
  type="date"
  value={endDate}
  min={minEndDate ? minEndDate.toISOString().split("T")[0] : ""}
  onChange={(e) => setEndDate(e.target.value)}
/>
      </HStack>
      <HStack>
        <Button bg="tomato" onClick={handleRent}>
          Wynajmij
        </Button>
      </HStack>
    </>
  );
}
