import { Badge, Box, Card, Flex, Group, Image, Text } from "@mantine/core";
import image1 from "../../assets/image 6.png";
import { Carousel } from "@mantine/carousel";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Money01Icon } from "@hugeicons/core-free-icons";

export default function Upcoming() {
  return (
    <>
      <Flex direction={"column"} w={"100%"} px={"xl"} gap={"md"}>
        <Flex justify={"space-between"} align={"center"}>
          <Text c={"#001F37"} fw={"bold"}>
            Upcoming
          </Text>

          <Text c={"grey"} size="12px">
            See All
          </Text>
        </Flex>

        <Carousel
          withControls={false}
          withIndicators
          styles={{
            indicator: {
              backgroundColor: "#001F37", // Default indicator color
              width: 8,
              height: 8,
              transition: "width 250ms ease",
              "&[data-active]": {
                backgroundColor: "#FF5733", // Active indicator color
                width: 16,
              },
            },
          }}
        >
          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Carousel withIndicators withControls={true} height={200}>
                  <Carousel.Slide>
                    <Image src={image1} height={200} alt="Norway" />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <Image src={image1} height={200} alt="Norway" />
                  </Carousel.Slide>
                </Carousel>
                <Box pos={"absolute"} top={8} right={8} bg={"white"} bdrs={8}>
                  <Text c={"#001F37"} fw={"bold"} px={15} py={4} ta={"center"}>
                    29 <br />
                    <Text span>Feb</Text>
                  </Text>
                </Box>
              </Card.Section>

              <Group justify="space-between" align={"center"} mt="md" mb="xs">
                <Text fw={"bold"} c={"#001F37"}>
                  Jass Night <br />
                  <Text span size="12px">
                    <HugeiconsIcon icon={Location01Icon} size={12} /> Bole
                    Millennium
                  </Text>
                </Text>
                <Badge color="#001F37">
                  <Flex gap={4} justify={"center"} align={"center"}>
                    <HugeiconsIcon icon={Money01Icon} size={"12"} />{" "}
                    <Text size="10px" fw={"lighter"}>
                      Free
                    </Text>
                  </Flex>
                </Badge>
              </Group>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Carousel withIndicators withControls={true} height={200}>
                  <Carousel.Slide>
                    <Image src={image1} height={200} alt="Norway" />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <Image src={image1} height={200} alt="Norway" />
                  </Carousel.Slide>
                </Carousel>
                <Box pos={"absolute"} top={8} right={8} bg={"white"} bdrs={8}>
                  <Text c={"#001F37"} fw={"bold"} px={15} py={4} ta={"center"}>
                    29 <br />
                    <Text span>Feb</Text>
                  </Text>
                </Box>
              </Card.Section>

              <Group justify="space-between" align={"center"} mt="md" mb="xs">
                <Text fw={"bold"} c={"#001F37"}>
                  Jass Night <br />
                  <Text span size="12px">
                    <HugeiconsIcon icon={Location01Icon} size={12} /> Bole
                    Millennium
                  </Text>
                </Text>
                <Badge color="#001F37">
                  <Flex gap={4} justify={"center"} align={"center"}>
                    <HugeiconsIcon icon={Money01Icon} size={"12"} />{" "}
                    <Text size="10px" fw={"lighter"}>
                      200
                    </Text>
                  </Flex>
                </Badge>
              </Group>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </Flex>
    </>
  );
}
