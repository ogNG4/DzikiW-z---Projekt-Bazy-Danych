import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Layout } from "@/components/Layout/Layout";
import { AdminProvider } from "@/context/AuthContext";
export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider>
        <AdminProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </AdminProvider>
      </ChakraProvider>
    </SessionContextProvider>
  );
}
