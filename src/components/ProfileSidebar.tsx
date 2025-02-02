import React from "react";
import { Avatar, Button, Flex, Heading, Tooltip } from "@chakra-ui/react";
import { MdShare } from "react-icons/md";
import { useAuth } from "../hooks/authListner";
import { differenceInDays } from "date-fns";

const ProfileSidebar = () => {
  const user: any = useAuth();
  const joiningDays = differenceInDays(
    new Date(user?.metadata?.creationTime),
    new Date()
  );

  return (
    <Flex
      width="100%"
      height="max-content"
      flexDirection="column"
      boxShadow="lg"
      alignItems="center"
      position="sticky"
      top="23%"
      gap="1rem"
    >
      <Tooltip label="Idiot" openDelay={200}>
        <Avatar
          src={user ? user?.photoURL : ""}
          width="40"
          height="40"
          cursor="pointer"
          marginTop="1rem"
        />
      </Tooltip>
      <Heading as="h3" size="lg" marginRight="2rem" marginLeft="2rem">
        {user?.displayName}
      </Heading>
      {/* <Heading as="h3" size="md" marginRight="2rem" marginLeft="2rem">
        I like to eat shit
      </Heading> */}
      <Flex alignItems="center" width="100%" gap="2rem" justifyContent="center">
        <Flex alignItems="center" flexDirection="column" gap="0.4rem">
          <Heading as="h4" size="md">
            Followers
          </Heading>
          <Heading as="h4" size="sm">
            0
          </Heading>
        </Flex>
        <Flex alignItems="center" flexDirection="column" gap="0.4rem">
          <Heading as="h4" size="md">
            Following
          </Heading>
          <Heading as="h4" size="sm">
            0
          </Heading>
        </Flex>
      </Flex>
      <Flex alignItems="center" gap="1rem">
        <Button colorScheme="purple" variant="solid" leftIcon={<MdShare />}>
          Share
        </Button>
      </Flex>
      <Heading marginBottom="1rem" as="h4" size="sm">
        Joined {joiningDays} days ago
      </Heading>
    </Flex>
  );
};

export default ProfileSidebar;
