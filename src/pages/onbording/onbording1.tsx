import { Flex, Image, Text } from "@mantine/core";
import image1 from "../../assets/image 3-1.png";
import image2 from "../../assets/image 3-2.png";
import image4 from "../../assets/image 4.png";

export default function Onbording1() {
  return (
    <>
      <Flex h={"100vh"} w={"100%"} direction={"column"} align={"center"}>
        <Image
          style={{ position: "absolute", top: "10%", left: "15%" }}
          src={image1}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Image
          style={{ position: "absolute", top: "20%", right: "15%" }}
          src={image2}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Image
          style={{ position: "absolute", top: "30%", left: "15%" }}
          src={image4}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Flex pos={"absolute"} top={"55%"} direction={"column"} gap={"lg"}>
          <Text c={"#001F37"} fw={"bold"} size="30px" ta={"center"} px={"lg"}>
            Discover What’s Happening Near You
          </Text>
          <Text size="12px" c={"grey"} ta={"center"} px={"xl"}>
            From neighborhood garage sales to local workshops and pop-up markets
            — explore events happening around you, all in one place.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
