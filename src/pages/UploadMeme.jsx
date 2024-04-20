import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const UploadMeme = () => {
  const [newMeme, setNewMeme] = useState({ imageUrl: "", tags: "", description: "" });

  const handleUpload = () => {};

  return (
    <Container maxW="container.xl">
      <Header />
      <FormControl>
        <FormLabel htmlFor="image-url">Image URL</FormLabel>
        <Input id="image-url" type="text" placeholder="Enter image URL" value={newMeme.imageUrl} onChange={(e) => setNewMeme({ ...newMeme, imageUrl: e.target.value })} />
        <FormLabel htmlFor="tags">Tags</FormLabel>
        <Input id="tags" type="text" placeholder="Enter tags separated by commas" value={newMeme.tags} onChange={(e) => setNewMeme({ ...newMeme, tags: e.target.value })} />
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea id="description" placeholder="Enter description" value={newMeme.description} onChange={(e) => setNewMeme({ ...newMeme, description: e.target.value })} />
        <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={handleUpload} mr={4}>
          Upload Meme
        </Button>
        <Button as={Link} to="/" colorScheme="red">
          Cancel
        </Button>
      </FormControl>
    </Container>
  );
};

export default UploadMeme;
