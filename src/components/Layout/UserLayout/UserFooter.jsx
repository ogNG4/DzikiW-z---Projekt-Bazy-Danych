import { Grid, Text, Flex, Box, GridItem } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { PhoneIcon, AtSignIcon } from "@chakra-ui/icons";
function UserFooter() {
  return (
    <Grid 
    templateColumns={{base: '1fr', md:'1fr 1fr '}}
      w={"100%"}
      bg={"gray.900"}
      as={"footer"}
      p={"2rem"}
      minH={"350px"}
    
    >
      <GridItem>
        <Flex
          direction={"column"}
          justifyContent={"space-around"}
          minH={"350px"}
        >
          <Logo />
          <Box fontSize={{ base: "1rem", md: "1.2rem" }}>
            <Text>DzikiWóz Polska </Text>
            <Text>ul. Długa 1</Text>
            <Text>00-000 Warszawa</Text>
          </Box>

          <Box fontSize={{ base: "1rem", md: "1.2rem" }}>
            <Text>
              {" "}
              <AtSignIcon color={"red.400"} /> kontakt@email.com{" "}
            </Text>
          </Box>
          <Box fontSize={{ base: "1rem", md: "1.2rem" }}>
            <Text>Rezerwacje: </Text>
            <Text>
              <PhoneIcon color={"red.400"} />
              123 456 789
            </Text>
          </Box>
        </Flex>
      </GridItem>

      <GridItem>
        <Flex w={{base:"100%" , md: "90%"}} h={"100%"}  alignItems={'center'}>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.6024701341976!2d21.006940115797438!3d52.25060387976412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6fbf6adc43%3A0x2a7ece5235346977!2sD%C5%82uga%201%2C%2000-263%20Warszawa!5e0!3m2!1spl!2spl!4v1681315586807!5m2!1spl!2spl"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default UserFooter;
