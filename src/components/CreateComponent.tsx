import React, { useState } from "react";
import {
  Flex,
  Heading,
  Image,
  Input,
  Button,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { BsImageFill } from "react-icons/bs";
import { addPost } from "../services/addService";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { useAuth } from "../hooks/authListner";
import { FaRegEdit } from "react-icons/fa";

const CreateComponent = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<any>("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPostUploading, setIsPostUploading] = useState<boolean>(false);
  const toast = useToast();
  const user: any = useAuth();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setImageUrl(URL.createObjectURL(e?.target?.files[0]));
    //@ts-ignore
    setImage(e?.target?.files[0]);
  };

  const handleCreatePost = async () => {
    const postRef = ref(
      storage,
      `posts/${user?.uid}/${image?.name + new Date()?.getMilliseconds()}.jpg`
    );
    uploadBytes(postRef, image)
      .then((snapshot) => {
        setIsPostUploading(true);
        getDownloadURL(postRef)
          .then(async (downloadURL) => {
            const postRes = await addPost({
              caption: caption?.trim(),
              postImage: downloadURL,
              userAvatar: user?.photoURL,
              userName: user?.displayName,
            });
            if (postRes) {
              setCaption("");
              setImage("");
              setImageUrl("");
              setIsPostUploading(false);
              toast({
                title: "Post Uploaded Successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }
          })
          .catch((error) => {
            setCaption("");
            setImage("");
            setImageUrl("");
            setIsPostUploading(false);
            toast({
              title: "An Error Occurred",
              description: error?.message,
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          });
      })
      .catch((error) => {
        setCaption("");
        setImage("");
        setImageUrl("");
        setIsPostUploading(false);
        toast({
          title: "An Error Occurred",
          description: error?.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      flexDirection="column"
      gap="2rem"
      width="100%"
      height="max-content"
      boxShadow="md"
      padding="1rem"
    >
      <Flex gap="0.5rem">
        <FaRegEdit size={"1.5rem"} />
        <Heading as="h4" size="md">
          Create post
        </Heading>
      </Flex>

      <Flex flexDirection="column" gap="0.4rem" width="100%">
        <Textarea
          variant="filled"
          placeholder="Add Caption"
          resize="none"
          onChange={(e: React.ChangeEvent<HTMLInputElement> | any) => {
            setCaption(e.target.value);
          }}
          value={caption}
        />
        {caption.length >= 5 && caption.length <= 100 ? (
          ""
        ) : (
          <Heading as="h4" size="sm" color="gray.500">
            Caption must be between 5 to 100 letters
          </Heading>
        )}
      </Flex>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
        <input
          type="file"
          accept="image/*"
          value={image?.fileName}
          placeholder="Select post image"
          onChange={uploadImage}
        />
        {imageUrl !== "" ? (
          <Image src={imageUrl} alt="" width="10%" />
        ) : (
          <>
            {/* <Flex alignItems="center" gap="1rem">
              <BsImageFill size="10%" />
              <Heading as="h4" size="md">
                Please select image first
              </Heading>
            </Flex> */}
            <Heading as="h4" size="sm" color="gray.500">
              *Image is required
            </Heading>
          </>
        )}
      </Flex>
      {caption.length >= 5 && caption.length <= 100 && imageUrl !== "" ? (
        <Button
          colorScheme="purple"
          marginBottom="1rem"
          onClick={handleCreatePost}
        >
          Create post
        </Button>
      ) : (
        <Button
          colorScheme="purple"
          isLoading={isPostUploading}
          marginBottom="1rem"
          disabled
        >
          Create post
        </Button>
      )}
    </Flex>
  );
};

export default CreateComponent;
