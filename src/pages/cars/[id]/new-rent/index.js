import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { useUser } from "@/context/UserContext";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import NewRentForm from "@/components/User/NewRentForm/NewRentForm";
import { supabase } from "@/lib/supabase";

export default function NewRentPage() {
  const { profile } = useUser();
  const router = useRouter();
  const session = useSession();

  const handleRent = async (data) => {
    const carId = router.query.id;

    const rentalData = {
      ...data,
      carId,
      userId: profile?.id,
    };

    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      street: data.street,
      city: data.city,
    };

    try {
      await fetch(`/api/user/update-user/${profile?.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const response = await fetch("/api/user/new-rent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rentalData),
      });

      if (response.ok) {
        router.replace("/cars");
      } else {
        console.log("Failed to create rental");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NewRentForm onSubmit={handleRent} profile={profile} />
    </>
  );
}
