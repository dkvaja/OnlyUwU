import { Avatar, Flex, Heading, Tag } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Flex gap="1rem" width="100%" flexWrap="wrap">
        <Tag>Gaming</Tag>
        <Tag>Programming</Tag>
        <Tag>Movies</Tag>
        <Tag>Music</Tag>
        <Tag>Anime</Tag>
        <Tag>Po*n</Tag>
        <Tag>YourMom</Tag>
        <Tag>Idk</Tag>
        <Tag>What</Tag>
        <Tag>Else</Tag>
        <Tag>To</Tag>
        <Tag>Write</Tag>
        <Tag>Lol</Tag>
      </Flex>
      <Post />
      <Post />
      <Post />
      <Post />
    </Flex>
  );
};

export default Feed;
