import {
  Button,
  Flex,
  Image,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import ellipse from "../../../assets/Ellipse.svg";
import logo from "../../../assets/BlockBuzz-90.png";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  LockIcon,
  Mail02Icon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export default function Login() {
  const navigate = useNavigate();
  const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
    reveal ? (
      <HugeiconsIcon icon={ViewIcon} />
    ) : (
      <HugeiconsIcon icon={ViewOffIcon} />
    );
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = () => {
    if (Email === "" || Password === "") {
      notifications.show({
        title: "Error",
        message: "Please fill in all fields",
        color: "red",
        radius: "lg",
      });
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <Flex justify={"space-between"}>
        <Image w={"70%"} h={"70%"} fit="contain" src={ellipse} />
        <Flex w={"10%"} h={"25%"} mt={"xl"} mr={"md"}>
          <Image src={logo} />
        </Flex>
      </Flex>

      <Flex
        mt={"xl"}
        direction={"column"}
        align={"baseline"}
        px={"lg"}
        gap={"sm"}
      >
        <Text fw={"bold"} c={"#001F37"} size="35px" ta={"center"}>
          Login
        </Text>
        <Text c={"gray"} size="12px">
          Login into your account with your Email
        </Text>
      </Flex>

      <Flex
        justify={"space-between"}
        direction={"column"}
        align={"center"}
        h={"52vh"}
      >
        <Flex mt={"xl"} px={"xl"} direction={"column"} gap={"md"} w={"100%"}>
          <TextInput
            radius={"md"}
            size="md"
            leftSection={<HugeiconsIcon icon={Mail02Icon} />}
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            radius={"md"}
            size="md"
            leftSection={<HugeiconsIcon icon={LockIcon} />}
            visibilityToggleIcon={VisibilityToggleIcon}
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            mt={"sm"}
            size="md"
            justify="space-between"
            rightSection={<HugeiconsIcon icon={ArrowRight01Icon} />}
            color="#001F37"
            radius={"md"}
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </Button>
        </Flex>
        <Text size="sm" ta={"center"} w={"80%"} c="grey" span>
          Don't have an account?{" "}
          <Text
            span
            c={"#001F37"}
            fw={"bold"}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </Text>
        </Text>
      </Flex>
    </>
  );
}
