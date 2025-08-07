import { Button, Flex, Text } from "@mantine/core";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import Onbording1 from "./onbording1";
import Onbording2 from "./onbording2";
import Onbording3 from "./onbording3";

export default function Onbording() {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
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
            <Onbording1 />
          </>
        ) : pageCount === 2 ? (
          <>
            <Onbording2 />
          </>
        ) : (
          <Onbording3 />
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
              navigate("/signup");
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
