import HomePage from "../components/User/HomePage/HomePage";
import { UserLayout } from "@/components/Layout/UserLayout/UserLayout";
import { useEffect } from "react";
import { useAdmin } from "@/context/AdminContext";
import { useRouter } from "next/router";

export default function Home() {
  const isAdmin = useAdmin();
  const router = useRouter();

  useEffect(() => {
    isAdmin ? router.push("/admin") : null;
  }, []);

  return <HomePage />;
}
