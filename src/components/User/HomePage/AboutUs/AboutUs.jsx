import { Text, Flex, Image, Button, Box, Grid } from "@chakra-ui/react";
import AboutUsCard from "./AboutUsCard";

const ABOUT_US = [
  {
    title: "Wygoda",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias recusandae unde debitis. Nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Serwis 24/7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias recusandae unde debitis. Nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Bezpieczeństwo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias recusandae unde debitis. Nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
 
];
function AboutUs() {
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"} my={"5rem"} >
        <Box w={"max-content"}>
          <Text
            fontSize={{ base: "1.6rem", md: "2.7rem" }}
            fontWeight={"400"}
            textTransform={"uppercase"}
            letterSpacing={"5px"}
          >
            Dlaczego my?
          </Text>
        </Box>
        <Grid templateColumns={{base: '1fr', md:'1fr 1fr 1fr'}} gap={6} mt={"3rem"} p={"1rem"}>
    
            {ABOUT_US.map((item) => (
                <AboutUsCard key={item.title} title={item.title} text={item.text} />
            ))}
        </Grid>
      </Flex>
    </>
  );
}

export default AboutUs;
