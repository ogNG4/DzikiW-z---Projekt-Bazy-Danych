import AboutUs from "./AboutUs/AboutUs";
import MainImage from "./MainImage/MainImage";

import { Box } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box minHeight={'100vh'}>
      <MainImage />
      <AboutUs />
    </Box>
  );
}

export default HomePage;
