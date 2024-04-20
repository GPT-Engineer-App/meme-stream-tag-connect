import { Link } from "react-router-dom";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <Flex justify="space-between" align="center" w="100%">
      <Heading as="h1" size="xl">
        MemeStream
      </Heading>
      <Button as={Link} to="/upload" colorScheme="teal" leftIcon={<FaPlus />}>
        Add Meme
      </Button>
    </Flex>
  );
};

export default Header;
