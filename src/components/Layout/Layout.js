import { useEffect, useState } from "react";
import { AdminLayout } from "./AdminLayout/AdminLayout";
import { UserLayout } from "./UserLayout/UserLayout";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAdmin } from "@/context/AdminContext";
import { Flex, Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  const isAdmin = useAdmin();

  if (isAdmin) {
    return (
      <Flex>
        <AdminLayout />
        <Box as="main" flex={"1"}>
          {children}
        </Box>
      </Flex>
    );
  } else {
    return <UserLayout>{children}</UserLayout>;
  }
};
