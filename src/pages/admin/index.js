import { useEffect } from "react";
import { useAdmin } from "@/context/AdminContext";
import { useRouter } from "next/router";

import ContactForm from "../../components/User/ContactForm/ContactForm";

export default function AdminDashboard() {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    !isAdmin ? router.replace("/") : null;
  }, []);

  return (
    <>
      <h1>Admin Panel</h1>
    </>
  );
}
//siema
