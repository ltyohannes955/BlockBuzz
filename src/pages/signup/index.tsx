import {
  Button,
  Flex,
  Image,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import ellipse from "../../assets/Ellipse.svg";
import logo from "../../assets/BlockBuzz-90.png";
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

export default function Signup() {
  const navigate = useNavigate();
  const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
    reveal ? (
      <HugeiconsIcon icon={ViewIcon} />
    ) : (
      <HugeiconsIcon icon={ViewOffIcon} />
    );

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

      <Flex justify={"center"}>
        <Flex mt={"xl"} px={"xl"} direction={"column"} gap={"md"}>
          <Flex justify={"space-between"} gap={"lg"}>
            <TextInput
              radius={"md"}
              size="md"
              leftSection={<HugeiconsIcon icon={UserIcon} />}
              placeholder="First Name"
            />
            <TextInput
              radius={"md"}
              size="md"
              leftSection={<HugeiconsIcon icon={UserIcon} />}
              placeholder="Last Name"
            />
          </Flex>
          <TextInput
            radius={"md"}
            size="md"
            leftSection={<HugeiconsIcon icon={Mail02Icon} />}
            placeholder="Email"
          />
          <PasswordInput
            radius={"md"}
            size="md"
            leftSection={<HugeiconsIcon icon={LockIcon} />}
            visibilityToggleIcon={VisibilityToggleIcon}
            placeholder="Password"
          />
          <PasswordInput
            radius={"md"}
            size="md"
            leftSection={<HugeiconsIcon icon={LockIcon} />}
            visibilityToggleIcon={VisibilityToggleIcon}
            placeholder="Confirm Password"
          />
          <Button
            mt={"sm"}
            size="md"
            justify="space-between"
            rightSection={<HugeiconsIcon icon={ArrowRight01Icon} />}
            color="#001F37"
            radius={"md"}
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign up
          </Button>
        </Flex>
        <Text
          size="sm"
          ta={"center"}
          w={"80%"}
          pos={"absolute"}
          bottom={"2%"}
          c="grey"
          onClick={() => {
            navigate("/home");
          }}
          span
        >
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
