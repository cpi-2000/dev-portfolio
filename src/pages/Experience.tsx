import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";

interface colorModeProps {
  colorMode: "light" | "dark";
}

const Experience: React.FC<colorModeProps> = ({ colorMode }) => {
  const themeColors =
    colorMode === "dark" ? darkTheme.colors : lightTheme.colors;

  return (
    <div>
      <VStack gap={"5"}>
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
            <Text fontSize="md">C:\WINDOWS\system32\cmd</Text>
          </Flex>

          <CardBody>
            <Flex gap={8}>
              <Box
                w={"20%"}
                textAlign={"left"}
                color={themeColors.primary}
                fontSize="md"
                fontFamily="monospace"
              >
                &gt;_ 2023-Present
              </Box>
              <Box w={"80%"} fontSize="md" fontFamily="monospace">
                <VStack align={"start"} spacing={"5"}>
                  <Box
                    textAlign={"left"}
                    fontWeight={"bold"}
                    color={themeColors.primary}
                  >
                    Senior Frontend Engineer •{" "}
                    <a
                      href="https://cpi.com.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CPI
                    </a>
                  </Box>
                  <Box textAlign={"left"} color={themeColors.success}>
                    C:\&gt;_ Build and maintain critical components used to
                    construct Klaviyo’s frontend, across the whole product. Work
                    closely with cross-functional teams, including developers,
                    designers, and product managers, to implement and advocate
                    for best practices in web accessibility...
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </CardBody>
        </Card>

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
            <Text fontSize="md">C:\WINDOWS\system32\cmd</Text>
          </Flex>

          <CardBody>
            <Flex gap={8}>
              <Box
                w={"20%"}
                textAlign={"left"}
                color={themeColors.primary}
                fontSize="md"
                fontFamily="monospace"
              >
                &gt;_ 2023-Present
              </Box>
              <Box w={"80%"} fontSize="md" fontFamily="monospace">
                <VStack align={"start"} spacing={"5"}>
                  <Box
                    textAlign={"left"}
                    fontWeight={"bold"}
                    color={themeColors.primary}
                  >
                    Senior Frontend Engineer
                  </Box>
                  <Box textAlign={"left"} color={themeColors.success}>
                    C:\&gt;_ Build and maintain critical components used to
                    construct Klaviyo’s frontend, across the whole product. Work
                    closely with cross-functional teams, including developers,
                    designers, and product managers, to implement and advocate
                    for best practices in web accessibility...
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
    </div>
  );
};

export default Experience;
