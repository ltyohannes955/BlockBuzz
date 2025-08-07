import { Flex, Image, Text } from "@mantine/core";
import image3 from "../../assets/image 3.png";
import image6 from "../../assets/image 4-1.png";
import image7 from "../../assets/image 5.png";

export default function Onbording3() {
  return (
    <>
      <Flex h={"100vh"} w={"100%"} direction={"column"} align={"center"}>
        <Image
          style={{ position: "absolute", top: "10%", left: "15%" }}
          src={image3}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Image
          style={{ position: "absolute", top: "20%", right: "15%" }}
          src={image6}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Image
          style={{ position: "absolute", top: "30%", left: "15%" }}
          src={image7}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Flex pos={"absolute"} top={"55%"} direction={"column"} gap={"lg"}>
          <Text c={"#001F37"} fw={"bold"} size="30px" ta={"center"} px={"lg"}>
            Post Your Own Events
          </Text>
          <Text size="12px" c={"grey"} ta={"center"} px={"xl"}>
            Hosting something awesome? Post your event in seconds and reach
            people nearby. Get the word out with just a few taps.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
