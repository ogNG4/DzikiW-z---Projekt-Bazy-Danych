import { useEffect, useState } from "react";
import { AdminLayout } from "./AdminLayout/AdminLayout";
import { UserLayout } from "./UserLayout/UserLayout";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAdmin } from "@/context/AuthContext";

export const Layout = ({ children }) => {
    const isAdmin = useAdmin();

  if (isAdmin) {
    return <AdminLayout>{children}</AdminLayout>;
  } else {
    return <UserLayout>{children}</UserLayout>;
  }
};
