import { Box } from "@chakra-ui/react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAdmin } from "../../context/AuthContext";

import { Skeleton, Stack } from "@chakra-ui/react";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const isAdmin = useAdmin();

  useEffect(() => {
    if (session) {
      if (isAdmin) {
        router.replace("/admin");
      } else {
        router.replace("/");
      }
    }
  }, [session, router]);

  return (
    <Box minH={"70vh"}>
      <Box
        w={{ base: "90%", md: "70%", lg: "50%", xl: "40%", "2xl": "30%" }}
        mt={"10rem"}
        mx={"auto"}
        bg={"gray.700"}
        p={"2rem"}
        borderRadius={"1rem"}
      >
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Stack>
            <Skeleton height={"20px"} />
            <Skeleton height={"20px"} />
            <Skeleton height={"20px"} />
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Home;
