import { Box } from "@chakra-ui/react";
import { Auth } from '@supabase/ui'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <Box w={'50%'} margin={'20rem auto'} bg={'gray.700'} p={'2rem'} borderRadius={'1rem'}>
      {!session ? (
        <Auth supabaseClient={supabase} />
      ) : (
        <p>Account page will go here.</p>
      )}

</Box>
    
  
  )
}

export default Home