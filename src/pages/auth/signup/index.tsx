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
  UserIcon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export default function Signup() {
  const navigate = useNavigate();
  const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
    reveal ? (
      <HugeiconsIcon icon={ViewIcon} />
    ) : (
      <HugeiconsIcon icon={ViewOffIcon} />
    );
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const handleSignUp = () => {
    if (!FirstName || !LastName || !Email || !Password || !ConfirmPassword) {
      notifications.show({
        title: "Error",
        message: "Please fill in all fields",
        color: "red",
        radius: "lg",
      });
      return;
    }

    if (FirstName.trim().length < 2) {
      notifications.show({
        title: "Error",
        message: "First Name must be at least 2 characters",
        color: "red",
        radius: "lg",
      });
      return;
    }

    if (LastName.trim().length < 2) {
      notifications.show({
        title: "Error",
        message: "Last Name must be at least 2 characters",
        color: "red",
        radius: "lg",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      notifications.show({
        title: "Error",
        message: "Please enter a valid email address",
        color: "red",
        radius: "lg",
      });
      return;
    }

    if (Password.length < 6) {
      notifications.show({
        title: "Error",
        message: "Password must be at least 6 characters",
        color: "red",
        radius: "lg",
      });
      return;
    }

    if (Password !== ConfirmPassword) {
      notifications.show({
        title: "Error",
        message: "Passwords do not match",
        color: "red",
        radius: "lg",
      });
      return;
    }

    navigate("/login");
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
          Sign up
        </Text>
        <Text c={"gray"} size="12px">
          Sign up into your account with your Email
        </Text>
      </Flex>

      <Flex
        justify={"space-between"}
        direction={"column"}
        align={"center"}
        h={"52vh"}
      >
        <Flex mt={"xl"} px={"xl"} direction={"column"} gap={"md"}>
          <Flex justify={"space-between"} gap={"lg"}>
            <TextInput
              radius={"md"}
              size="md"
              leftSection={<HugeiconsIcon icon={UserIcon} />}
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextInput
              radius={"md"}
              size="md"
              leftSection={<HugeiconsIcon icon={UserIcon} />}
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Flex>
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
          <PasswordInput
            radius={"md"}
            size="md"
            leftSection={<HugeiconsIcon icon={LockIcon} />}
            visibilityToggleIcon={VisibilityToggleIcon}
            placeholder="Confirm Password"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            mt={"sm"}
            size="md"
            justify="space-between"
            rightSection={<HugeiconsIcon icon={ArrowRight01Icon} />}
            color="#001F37"
            radius={"md"}
            onClick={() => {
              handleSignUp();
            }}
          >
            Sign up
          </Button>
        </Flex>
        <Text size="sm" ta={"center"} w={"80%"} c="grey" span>
          Already have an account?{" "}
          <Text
            span
            c={"#001F37"}
            fw={"bold"}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Text>
        </Text>
      </Flex>
    </>
  );
}
