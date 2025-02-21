import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";
import { formatTimestamp } from "../utils/utility";

interface colorModeProps {
  colorMode: "light" | "dark";
}

const Projects: React.FC<colorModeProps> = ({ colorMode }) => {
  const themeColors =
    colorMode === "dark" ? darkTheme.colors : lightTheme.colors;
  const dateToday = formatTimestamp(new Date());

  return (
    <div>
      <Card
        p={2}
        borderRadius="sm"
        boxShadow="2px 2px 5px rgba(221, 212, 212, 0.94)"
        cursor="pointer"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "2xl",
        }}
      >
        <Flex gap={2} p={4} pb={"0"}>
          <Box w="12px" h="12px" bg="red.500" borderRadius="full" />
          <Box w="12px" h="12px" bg="yellow.400" borderRadius="full" />
          <Box w="12px" h="12px" bg="blue.500" borderRadius="full" />
        </Flex>

        <CardBody>
          <Text
            fontSize="l"
            fontWeight="bold"
            fontFamily="monospace"
            color={themeColors.primary}
          >
            Last login : {dateToday}
            <br />~ % This is projects page and is under maintenance...
          </Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default Projects;
