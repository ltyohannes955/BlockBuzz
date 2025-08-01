import { Button, Flex } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Flex>
        Home
        <Button onClick={() => navigate("/myEvents")}>Create Event</Button>
        <Button
          onClick={() =>
            notifications.show({
              title: "Default notification",
              message: "Do not forget to star Mantine on GitHub! 🌟",
            })
          }
        >
          Show notification
        </Button>
      </Flex>
    </>
  );
}
