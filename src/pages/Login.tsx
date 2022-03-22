import React from "react";
import LoginNavbar from "../components/LoginNavbar";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { registerUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res: any = await registerUser();
    res?.success && navigate("/", { replace: true });
  };

  return (
    <Flex overflow="hidden" flexDirection="column" height="100vh" width="100vw">
      <LoginNavbar />
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="73vh"
        overflow="hidden"
      >
        <Flex flexDirection="column" gap="1.4rem">
          <Flex flexDirection="column" alignItems="center">
            <Heading as="h4" size="xl">
              Make Friends with
            </Heading>
            <Heading as="h4" size="xl">
              ChatWithMe
            </Heading>
          </Flex>
          <Button
            leftIcon={<FcGoogle />}
            colorScheme="purple"
            variant="outline"
            size="lg"
            borderRadius={24}
            onClick={handleLogin}
          >
            Join with Google
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
