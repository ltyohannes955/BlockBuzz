import { Flex, Image } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/BlockBuzz-white.svg";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onbording");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Flex
        h={"100vh"}
        w={"100%"}
        justify={"center"}
        align={"center"}
        bg={"#001F37"}
      >
        <Image h={200} w={200} fit="contain" src={Logo} alt="logo" />
      </Flex>
    </>
  );
}
