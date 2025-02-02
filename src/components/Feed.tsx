import { Avatar, Divider, Flex, Heading, Tag, Tooltip } from "@chakra-ui/react";
import React from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import Post from "./Post";
import { db } from "../firebaseConfig";
import CreateComponent from "./CreateComponent";

type Props = {
  isExplore: boolean;
  isLibrary: boolean;
  isYourPosts: boolean;
  isSearch: boolean;
  isProfile: boolean;
  isFollower: boolean;
};

const Feed = (props: Props) => {
  const [posts, setPosts] = React.useState<any>("");

  React.useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities: any = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      setPosts(cities);
    });
    return unsubscribe;
  }, []);

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
  ) : props?.isFollower ? (
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Flex gap="2rem" alignItems="center" flexWrap="wrap" marginBottom="1rem">
        <Tooltip label="Your mom" openDelay={400}>
          <Avatar width="16" height="16" cursor="pointer" />
        </Tooltip>
        <Tooltip label="Your uncle" openDelay={400}>
          <Avatar width="16" height="16" cursor="pointer" />
        </Tooltip>
        <Tooltip label="Your dad" openDelay={400}>
          <Avatar width="16" height="16" cursor="pointer" />
        </Tooltip>
        <Tooltip label="Branu" openDelay={400}>
          <Avatar width="16" height="16" cursor="pointer" />
        </Tooltip>
        <Tooltip label="Tim" openDelay={400}>
          <Avatar width="16" height="16" cursor="pointer" />
        </Tooltip>
        <Tooltip label="Tim mom" openDelay={400}>
          <Avatar width="16" height="16" cursor="pointer" />
        </Tooltip>
      </Flex>
      <Heading as="h4" size="md">
        Your followers post
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
      {/* <Flex gap="1rem" width="100%" flexWrap="wrap">
        <Tag>Gaming</Tag>
        <Tag>Programming</Tag>
        <Tag>Movies</Tag>
        <Tag>Music</Tag>
        <Tag>Anime</Tag>
        <Tag>YourMom</Tag>
        <Tag>Idk</Tag>
        <Tag>What</Tag>
        <Tag>Else</Tag>
        <Tag>To</Tag>
        <Tag>Write</Tag>
        <Tag>Lol</Tag>
      </Flex> */}
      <CreateComponent />
      {posts &&
        posts?.length > 0 &&
        posts?.map((p: any) => <Post postData={p} key={p.id} />)}
    </Flex>
  );
};

export default Feed;
