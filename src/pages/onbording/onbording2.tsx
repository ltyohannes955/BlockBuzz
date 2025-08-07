import { Flex, Image, Text } from "@mantine/core";
import image4 from "../../assets/image 4.png";
import image5 from "../../assets/image 4-2.png";
import image6 from "../../assets/image 4-1.png";

export default function Onbording2() {
  return (
    <>
      <Flex h={"100vh"} w={"100%"} direction={"column"} align={"center"}>
        <Image
          style={{ position: "absolute", top: "10%", left: "15%" }}
          src={image4}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Image
          style={{ position: "absolute", top: "20%", right: "15%" }}
          src={image5}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Image
          style={{ position: "absolute", top: "30%", left: "15%" }}
          src={image6}
          fit="contain"
          alt="logo"
          h={200}
          w={200}
        />
        <Flex pos={"absolute"} top={"55%"} direction={"column"} gap={"lg"}>
          <Text c={"#001F37"} fw={"bold"} size="30px" ta={"center"} px={"lg"}>
            Join In. Meet Up. Connect.
          </Text>
          <Text size="12px" c={"grey"} ta={"center"} px={"xl"}>
            RSVP to local events, meet your neighbors, and become part of your
            community. It’s more than just events — it’s connection.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
