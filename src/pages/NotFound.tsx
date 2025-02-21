import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center>
      <VStack>
        <Heading as="h1" fontSize="10rem" color="textMuted">
          404
        </Heading>
        <Text fontSize="5xl" as="b" color="textMuted">
          Page Not Found
        </Text>
        <Button as={Link} to="/" leftIcon={<ArrowBackIcon />}>
          GO TO LANDING PAGE
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;
