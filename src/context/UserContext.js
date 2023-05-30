import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const session = useSession();
  // const supabase = useSupabaseClient();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!session?.user?.id) {
        return;
      }

      try {
        const response = await fetch(`/api/user/get-user/${session.user.id}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        setProfile(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [session?.user?.id, profile]);

  return (
    <UserContext.Provider value={{ profile }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
