import React from "react";
import {
  Flex,
  Heading,
  Avatar,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { ref, deleteObject } from "firebase/storage";
import { DeleteIcon } from "@chakra-ui/icons";
import { BiDotsVerticalRounded, BiCommentDetail } from "react-icons/bi";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";
import { formatRelative } from "date-fns";
import { useAuth } from "../hooks/authListner";
import { deletePost } from "../services/deleteService";
import { storage } from "../firebaseConfig";

const Post = ({ postData = "" }: any) => {
  const user: any = useAuth();
  const toast = useToast();

  const handleDeletePost = async (postId: string, postImage: string) => {
    if (!postId) return;
    const isPostDeleted = await deletePost(postId);
    if (isPostDeleted) {
      toast({
        title: "Post Deleted Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      flexDirection="column"
      padding="1rem"
      width="100%"
      boxShadow="lg"
      borderRadius="md"
      gap="1rem"
      marginBottom="0.7rem"
    >
      <Flex flexDirection="row" width="100%" alignItems="center">
        <Avatar cursor="pointer" src={postData?.userAvatar} />
        <Flex
          flexDirection="column"
          width="100%"
          marginLeft="1rem"
          gap="0.2rem"
        >
          <Heading as="h3" size="md">
            {postData?.userName}
          </Heading>
          <Heading as="h4" size="sm" color="gray.600">
            {postData?.createdAt &&
              formatRelative(postData?.createdAt?.toDate(), new Date())}
          </Heading>
        </Flex>
        <Menu placement="auto-start">
          <MenuButton
            as={IconButton}
            aria-label="Post Options"
            icon={<BiDotsVerticalRounded size="1.6rem" />}
            variant="outline"
          />
          <MenuList>
            {postData?.createdBy === user?.uid && (
              <MenuItem
                icon={<DeleteIcon />}
                onClick={() =>
                  handleDeletePost(postData?.id, postData?.postImage)
                }
              >
                Delete Post
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
      <Heading as="h5" size="sm">
        {postData?.caption}
      </Heading>
      <Image src={postData?.postImage} alt="" borderRadius="lg" />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex gap="1.3rem">
          <Flex alignItems="center" gap="0.4rem">
            <IconButton aria-label="Like" isRound={true}>
              <BsHeart size="1.5rem" cursor="pointer" />
            </IconButton>
            <Heading as="h5" size="sm" color="gray.600">
              {postData?.like}
            </Heading>
          </Flex>
          <Flex alignItems="center" gap="0.4rem">
            <IconButton aria-label="Comment" isRound={true}>
              <BiCommentDetail size="1.5rem" cursor="pointer" />
            </IconButton>
            <Heading as="h5" size="sm" color="gray.600">
              {postData?.comments?.length}
            </Heading>
          </Flex>
          <Flex alignItems="center" gap="0.4rem">
            <IconButton aria-label="Comment" isRound={true}>
              <MdOutlineReportProblem size="1.5rem" cursor="pointer" />
            </IconButton>
          </Flex>
        </Flex>
        <IconButton aria-label="Comment" isRound={true}>
          <BsBookmark size="1.5rem" cursor="pointer" />
        </IconButton>
      </Flex>
      <Heading
        as="h5"
        size="sm"
        color="gray.500"
        cursor="pointer"
        _hover={{
          textDecorationLine: "underline",
        }}
      >
        View all comments
      </Heading>
    </Flex>
  );
};

export default Post;
