import { createContext, useContext, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const AdminContext = createContext(false);

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session?.user) {
      supabase
        .from("profiles")
        .select("isAdmin")
        .eq("id", session.user.id)
        .then(({ data, error }) => {
          if (error) {
            console.log(error);
          } else {
            setIsAdmin(data[0]?.isAdmin);
          }
        });
    } else {
   
      setIsAdmin(false);
    }

    console.log(isAdmin)
  }, [session, supabase]);

  return (
    <AdminContext.Provider value={isAdmin}>{children}</AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);