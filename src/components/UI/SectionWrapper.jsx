import { Box } from "@chakra-ui/react";

export default function SectionWrapper({ children }) {
  return (
    <Box w={"100%"} minH={"100vh"} mt={'8rem'}>
      {children}
    </Box>
  );
}
