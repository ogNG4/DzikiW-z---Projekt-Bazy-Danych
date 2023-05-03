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
      <ContactForm />
    </>
  );
}
<<<<<<< HEAD
=======
//siema
>>>>>>> 5a46630b1e99f37acc9dee8f862ad9b596079a52
