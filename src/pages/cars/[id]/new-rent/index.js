import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { useUser } from "@/context/UserContext";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import NewRentForm from "@/components/User/Rents/NewRentForm/NewRentForm";
import { supabase } from "@/lib/supabase";
import SectionWrapper from "@/components/UI/SectionWrapper";
import SectionHeader from "@/components/UI/SectionHeader";

export default function NewRentPage({ availableDates, carData }) {
  const { profile } = useUser();
  const router = useRouter();

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
      <SectionWrapper>
        <SectionHeader title={"Wypożycz samochód"} />
        <NewRentForm
          onSubmit={handleRent}
          profile={profile}
          availableDates={availableDates}
          car={carData}
        />
      </SectionWrapper>
    </>
  );
}
export async function getServerSideProps({ params, req }) {
  try {
    const { id } = params;

    const { data: rentData } = await supabase
      .from("rents")
      .select(`startDate, endDate`)
      .eq("carId", id);

    const { data: carData } = await supabase
      .from("cars")
      .select('model, brand, price, img')
      .eq("id", id)
      .single();

    const availableDates = rentData.map((rent) => ({
      startDate: rent.startDate,
      endDate: rent.endDate,
    }));

    return {
      props: {
        availableDates,
        carData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
