import { Avatar, Divider, Flex, Heading, Tag } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";

type Props = {
  isExplore: boolean;
  isLibrary: boolean;
  isYourPosts: boolean;
  isSearch: boolean;
  isProfile: boolean;
};

const Feed = (props: Props) => {
  return props?.isExplore ? (
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Heading as="h4" size="md">
        Trending posts
      </Heading>
      <Post />
      <Post />
      <Post />
      <Post />
    </Flex>
  ) : props.isLibrary ? (
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Heading as="h4" size="md">
        Liked posts
      </Heading>
      <Post />
      <Post />
      <Divider />
      <Heading as="h4" size="md">
        Saved posts
      </Heading>
      <Post />
      <Post />
    </Flex>
  ) : props?.isYourPosts ? (
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Heading as="h4" size="md">
        Your shitty posts
      </Heading>
      <Post />
      <Post />
      <Post />
      <Post />
    </Flex>
  ) : props?.isSearch ? (
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Heading as="h4" size="md">
        Search results
      </Heading>
      <Post />
      <Post />
      <Post />
      <Post />
    </Flex>
  ) : props?.isProfile ? (
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Heading as="h4" size="md">
        Idiot shitty posts
      </Heading>
      <Post />
      <Post />
      <Post />
      <Post />
    </Flex>
  ) : (
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
