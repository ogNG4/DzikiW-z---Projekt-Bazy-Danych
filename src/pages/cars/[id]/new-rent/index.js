import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { useUser } from "@/context/UserContext";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import NewRentForm from "@/components/User/NewRentForm/NewRentForm";
import { supabase } from "@/lib/supabase";

export default function NewRent() {
  const { profile } = useUser();
  const router = useRouter();
  const session = useSession();

 
  const handleRent = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = {};
    for (let [key, value] of form) {
      formData[key] = value;
    }
  
    const carId = router.query.id;
  
    const rentalData = {
      ...formData,
      carId,
      userId: profile?.id,
    };

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      street: formData.street,
      city: formData.city,
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
