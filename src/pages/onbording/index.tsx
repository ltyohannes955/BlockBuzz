import { Button, Flex, Image, Text } from "@mantine/core";
import { useState } from "react";
import image1 from "../../assets/image 3-1.png";
import image2 from "../../assets/image 3-2.png";
import image3 from "../../assets/image 3.png";
import image4 from "../../assets/image 4.png";
import image5 from "../../assets/image 4-2.png";
import image6 from "../../assets/image 4-1.png";
import image7 from "../../assets/image 5.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";

export default function Onbording() {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
  const content = [
    {
      title: "Discover What’s Happening Near You",
      description:
        "From neighborhood garage sales to local workshops and pop-up markets — explore events happening around you, all in one place.",
    },
    {
      title: "Join In. Meet Up. Connect.",
      description:
        "RSVP to local events, meet your neighbors, and become part of your community. It’s more than just events — it’s connection.",
    },
    {
      title: "Post Your Own Events",
      description:
        "Hosting something awesome? Post your event in seconds and reach people nearby. Get the word out with just a few taps.",
    },
  ];
  return (
    <>
      <Flex h={"100vh"} w={"100%"} direction={"column"} align={"center"}>
        <Flex w={"100%"} justify={"flex-end"} p={"md"}>
          <Button variant="subtle">
            <Text fw={"bold"} c={"#001F37"}>
              Skip
            </Text>
          </Button>
        </Flex>

        {pageCount == 1 ? (
          <>
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
              <Text
                c={"#001F37"}
                fw={"bold"}
                size="30px"
                ta={"center"}
                px={"lg"}
              >
                Discover What’s Happening Near You
              </Text>
              <Text size="12px" c={"grey"} ta={"center"} px={"xl"}>
                From neighborhood garage sales to local workshops and pop-up
                markets — explore events happening around you, all in one place.
              </Text>
            </Flex>
          </>
        ) : (
          <></>
        )}

        <Button
          size="lg"
          w={"80%"}
          justify="space-between"
          rightSection={<HugeiconsIcon icon={ArrowRight01Icon} />}
          pos={"absolute"}
          bottom={"5%"}
          color="#001F37"
          onClick={() => {
            if (pageCount == 3) {
              navigate("/home");
            } else {
              setPageCount(pageCount + 1);
            }
          }}
        >
          {pageCount == 3 ? "Get Started" : "Next"}
        </Button>
      </Flex>
    </>
  );
}
