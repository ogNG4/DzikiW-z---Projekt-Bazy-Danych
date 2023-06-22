import { useAdmin } from "@/context/AdminContext";
import { supabase } from "@/lib/supabase";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import SectionHeader from "@/components/UI/SectionHeader";
import UserCard from "@/components/Admin/Users/UserCard";

export default function Users({ profiles }) {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

  return (
    <Flex direction="column" gap="1rem" alignItems="center">
      <SectionHeader title="Użytkownicy" />
      {profiles.map((profile) => (
        <UserCard key={profile.id} profile={profile} />
      ))}
    </Flex>
  );
}

export async function getServerSideProps() {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("isAdmin", false);
    return {
      props: {
        profiles: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}