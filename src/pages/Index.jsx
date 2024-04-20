import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="xl">
            MemeStream
          </Heading>
          <Button as={Link} to="/upload" colorScheme="teal" leftIcon={<FaPlus />}>
            Add Meme
          </Button>
        </Flex>
        <FormControl>
          <FormLabel htmlFor="image-url">Image URL</FormLabel>
          <Input id="image-url" type="text" placeholder="Enter image URL" value={newMeme.imageUrl} onChange={(e) => setNewMeme({ ...newMeme, imageUrl: e.target.value })} />
          <FormLabel htmlFor="tags">Tags</FormLabel>
          <Input id="tags" type="text" placeholder="Enter tags separated by commas" value={newMeme.tags} onChange={(e) => setNewMeme({ ...newMeme, tags: e.target.value })} />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea id="description" placeholder="Enter description" value={newMeme.description} onChange={(e) => setNewMeme({ ...newMeme, description: e.target.value })} />
          <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={handleUpload}>
            Upload Meme
          </Button>
        </FormControl>
        <Wrap spacing={4} justify="center">
          {memes.map((meme) => (
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
          ))}
        </Wrap>
      </VStack>
    </Container>
  );
};

export default Index;
