import {
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdExplore, MdPhotoLibrary } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoMdCreate, IoMdImages } from "react-icons/io";
import { RiUserFollowFill } from "react-icons/ri";

import { useAuth } from "../hooks/authListner";

const RightSidebar = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const user: any = useAuth();
  return (
    <Flex
      position="sticky"
      top="5.4rem"
      height="max-content"
      flexDirection="column"
    >
      <Tooltip label="Creator of this shit" openDelay={300}>
        <Flex
          className="profilestuff"
          cursor="pointer"
          alignItems="center"
          width="100%"
          padding="1rem"
          borderRadius="1rem"
          gap="0.2rem"
          boxShadow="md"
        >
          <Flex borderRadius="50%">
            <Image src={user?.photoURL} alt="" width="90%" height="90%" />
          </Flex>
          <Flex flexDirection="column" alignItems="start">
            <Heading as="h5" size="lg">
              {user?.displayName}
            </Heading>
            <Text>@{user?.displayName}</Text>
          </Flex>
        </Flex>
      </Tooltip>
      <Flex
        borderRadius="1rem"
        boxShadow="md"
        marginTop="2rem"
        width="100%"
        flexDirection="column"
      >
        {window.location.pathname === "/" ? (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            borderTopRightRadius="1rem"
            borderTopLeftRadius="1rem"
            backgroundColor={colorMode === "light" ? "#cfcfcf57" : "#27272983"}
            onClick={() => {
              navigate("/");
            }}
          >
            <FaHome
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Home
            </Heading>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            borderTopLeftRadius="1rem"
            _hover={{
              backgroundColor:
                colorMode === "light" ? "#cfcfcf57" : "#27272983",
            }}
            borderTopRightRadius="1rem"
            onClick={() => {
              navigate("/");
            }}
          >
            <FaHome
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Home
            </Heading>
          </Flex>
        )}
        {window.location.pathname === "/explore" ? (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            backgroundColor={colorMode === "light" ? "#cfcfcf57" : "#27272983"}
            onClick={() => {
              navigate("/explore");
            }}
          >
            <MdExplore
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Explore
            </Heading>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            _hover={{
              backgroundColor:
                colorMode === "light" ? "#cfcfcf57" : "#27272983",
            }}
            onClick={() => {
              navigate("/explore");
            }}
          >
            <MdExplore
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Explore
            </Heading>
          </Flex>
        )}
        {window.location.pathname === "/library" ? (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            backgroundColor={colorMode === "light" ? "#cfcfcf57" : "#27272983"}
            onClick={() => {
              navigate("/library");
            }}
          >
            <MdPhotoLibrary
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Library
            </Heading>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            _hover={{
              backgroundColor:
                colorMode === "light" ? "#cfcfcf57" : "#27272983",
            }}
            onClick={() => {
              navigate("/library");
            }}
          >
            <MdPhotoLibrary
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Library
            </Heading>
          </Flex>
        )}
        {window.location.pathname === "/your_posts" ? (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            backgroundColor={colorMode === "light" ? "#cfcfcf57" : "#27272983"}
            onClick={() => {
              navigate("/your_posts");
            }}
          >
            <IoMdImages
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Your videos
            </Heading>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            _hover={{
              backgroundColor:
                colorMode === "light" ? "#cfcfcf57" : "#27272983",
            }}
            onClick={() => {
              navigate("/your_posts");
            }}
          >
            <IoMdImages
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Your posts
            </Heading>
          </Flex>
        )}
        {window.location.pathname === "/followers" ? (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            backgroundColor={colorMode === "light" ? "#cfcfcf57" : "#27272983"}
            onClick={() => {
              navigate("/followers");
            }}
          >
            <RiUserFollowFill
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Followers
            </Heading>
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            cursor="pointer"
            height="4rem"
            transition="all 300ms ease"
            gap="1rem"
            _hover={{
              backgroundColor:
                colorMode === "light" ? "#cfcfcf57" : "#27272983",
            }}
            onClick={() => {
              navigate("/followers");
            }}
          >
            <RiUserFollowFill
              size="1.4rem"
              style={{
                marginLeft: "1rem",
              }}
            />
            <Heading as="h5" size="md">
              Followers
            </Heading>
          </Flex>
        )}
      </Flex>
      <Tooltip openDelay={400} label="Create shit">
        <Button
          leftIcon={<IoMdCreate />}
          colorScheme="purple"
          variant="solid"
          marginTop="2rem"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </Button>
      </Tooltip>
    </Flex>
  );
};

export default RightSidebar;
