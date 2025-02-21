import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";
import { formatTimestamp } from "../utils/utility";

interface colorModeProps {
  colorMode: "light" | "dark";
}

const About: React.FC<colorModeProps> = ({ colorMode }) => {
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
        <Flex gap={2} p={4} pt={"0"} pb={"0"}>
          <Box w="12px" h="12px" bg="red.500" borderRadius="full" />
          <Box w="12px" h="12px" bg="yellow.400" borderRadius="full" />
          <Box w="12px" h="12px" bg="blue.500" borderRadius="full" />
        </Flex>

        <CardBody>
          {/* <Text fontSize="md" fontFamily="monospace" color={themeColors.primary} > */}
          <Text as="span" color={themeColors.primary}>
            Last login : {dateToday}
          </Text>
          <Text
            fontSize="md"
            fontFamily="monospace"
            color={themeColors.success}
            textAlign={"left"}
          >
            <br />
            ~ % I’m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability...
            <br />
            <br />~ % Currently, I'm a Senior Front-End Engineer at Klaviyo,
            specializing in accessibility. I contribute to the creation and
            maintenance of UI components that power Klaviyo’s frontend, ensuring
            our platform meets web accessibility standards and best practices to
            deliver an inclusive user experience...
          </Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
