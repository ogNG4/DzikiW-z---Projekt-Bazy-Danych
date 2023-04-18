import { useEffect } from "react";
import { useAdmin } from "@/context/AuthContext";
import { useRouter } from "next/router";

import ContactForm from "../../components/User/ContactForm/ContactForm";

export default function AdminDashboard(){
    const isAdmin = useAdmin();
    const router = useRouter();

    useEffect(() => {
        !isAdmin ? router.replace("/") : null;
    }, []);

    return(
        <>
        <ContactForm/>
        </>
    )
}