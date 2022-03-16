import React from "react";
import { Flex, Heading, Image, Input, Button } from "@chakra-ui/react";
import { BsImageFill } from "react-icons/bs";

const CreateComponent = () => {
  return (
    <Flex flexDirection="column" gap="2rem" width="100%" height="max-content">
      <Heading as="h4" size="md">
        ** Both image and caption are required and you have to complete the
        validation to create a post so dont be a asshole and no need to dm me on
        discord that its not working **
      </Heading>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
        <Input variant="filled" placeholder="Caption" />
        <Heading as="h4" size="sm" color="gray.500">
          Caption must be between 5 to 100 letters
        </Heading>
      </Flex>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
        <input type="file" accept="image/*" placeholder="Select post image" />
        <Flex alignItems="center" gap="1rem">
          <BsImageFill size="50%" />
          <Heading as="h4" size="md">
            Select image idiot
          </Heading>
        </Flex>
        {/* <Image src="" alt="" width="100%" /> */}
        <Heading as="h4" size="sm" color="gray.500">
          Image is required
        </Heading>
      </Flex>
      <Button colorScheme="purple" marginBottom="1rem">
        Create post
      </Button>
    </Flex>
  );
};

export default CreateComponent;
