import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, Stack, Tag, Text, Textarea, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FaPlus, FaThumbsUp, FaThumbsDown, FaComment, FaUpload } from "react-icons/fa";

const Index = () => {
  const [memes, setMemes] = useState([]);
  const [newMeme, setNewMeme] = useState({ imageUrl: "", tags: "", description: "" });

  const handleUpload = () => {
    const tagsArray = newMeme.tags.split(",").map((tag) => tag.trim().toLowerCase());
    const meme = {
      ...newMeme,
      id: memes.length + 1,
      tags: tagsArray,
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    setMemes([...memes, meme]);
    setNewMeme({ imageUrl: "", tags: "", description: "" });
  };

  const handleLike = (id) => {
    const updatedMemes = memes.map((meme) => {
      if (meme.id === id) {
        return { ...meme, likes: meme.likes + 1 };
      }
      return meme;
    });
    setMemes(updatedMemes);
  };

  const handleDislike = (id) => {
    const updatedMemes = memes.map((meme) => {
      if (meme.id === id) {
        return { ...meme, dislikes: meme.dislikes + 1 };
      }
      return meme;
    });
    setMemes(updatedMemes);
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Header />

        <Wrap spacing={4} justify="center">
          {memes.length > 0 ? (
            memes.map((meme) => (
              <WrapItem key={meme.id} p={4} boxShadow="md" rounded="md">
                <VStack>
                  <Image src={meme.imageUrl} alt={`Meme ${meme.id}`} boxSize="300px" objectFit="cover" />
                  <Text>{meme.description}</Text>
                  <Wrap>
                    {meme.tags.map((tag) => (
                      <WrapItem key={tag}>
                        <Tag size="lg" variant="solid" colorScheme="blue">
                          {tag}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                  <Flex align="center">
                    <IconButton icon={<FaThumbsUp />} onClick={() => handleLike(meme.id)} aria-label="Like" />
                    <Text mx={2}>{meme.likes}</Text>
                    <IconButton icon={<FaThumbsDown />} onClick={() => handleDislike(meme.id)} aria-label="Dislike" />
                    <Text mx={2}>{meme.dislikes}</Text>
                    <IconButton icon={<FaComment />} aria-label="Comment" />
                  </Flex>
                </VStack>
              </WrapItem>
            ))
          ) : (
            <Text>
              No memes.{" "}
              <Link to="/upload" color="teal.500">
                Want to add one?
              </Link>
            </Text>
          )}
        </Wrap>
      </VStack>
    </Container>
  );
};

export default Index;
