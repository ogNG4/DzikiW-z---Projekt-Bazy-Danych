import { Box } from "@chakra-ui/react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa,  } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";

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
        router.push('/')
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
            providers={[]}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Email',
                  password_label: 'Hasło',
                  button_label: 'Zaloguj się',
                  email_input_placeholder: 'Wprowadź swój adres e-mail',
                  password_input_placeholder: 'Wprowadź swoje hasło',
                  link_text: 'Masz już konto? Zaloguj się'
                  
                },
                sign_up: {
                  email_label: 'Email',
                  password_label: 'Hasło',
                  button_label: 'Zarejestruj się',
                  email_input_placeholder: 'Wprowadź swój adres e-mail',
                  password_input_placeholder: 'Wprowadź swoje hasło',
                  link_text: 'Nie masz konta? Zarejestruj się'
                },
                forgotten_password:{
                  link_text: "",
                }
              },
              
            }}

            

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
