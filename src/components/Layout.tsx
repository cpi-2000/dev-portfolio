import {
  Box,
  Flex,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { lightTheme } from "../theme/lightTheme"; 
import { darkTheme } from "../theme/darkTheme";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";

const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const themeColors = colorMode === "dark" ? darkTheme.colors : lightTheme.colors;

  const [activeTab, setActiveTab] = useState("ABOUT");

  return (
    <Flex h="100vh" w="90vw" mx="auto" bg={themeColors.background} color={themeColors.textPrimary}>
      <Box w="25vw" p={4} pr={10}>
        <Text fontSize="xl" fontWeight="bold" color={themeColors.primary}>
          $ YourName.dev
        </Text>
        <Text fontSize="sm" color={themeColors.textSecondary}>
          // Full Stack Developer
        </Text>
        <Flex direction="column" mt={4} gap={1} fontFamily="monospace">
          {["ABOUT", "EXPERIENCE", "PROJECTS"].map((tab) => (
            <Text
            fontSize="md"
              key={tab}
              onClick={() => setActiveTab(tab)}
              cursor="pointer"
              _hover={{ color: themeColors.highlight }}
              color={activeTab === tab ? themeColors.terminal : themeColors.textSecondary}
            >
              $ cd {tab.toLowerCase()}
              {activeTab === tab && (
                <Box as="span" className="blinking-cursor">
                  █
                </Box>
              )}
            </Text>
          ))}
        </Flex>
      </Box>
      <Box flex="1" p={6} position="relative">
        <Flex position="absolute" top={4} right={4} align="center">
          <Text fontSize="sm" color={themeColors.textSecondary} mr={2}>
            {colorMode === "light" ? "Light Mode" : "Dark Mode"}
          </Text>
          <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        </Flex>
        <Box mt={10}>
          <Text fontSize="2xl" fontWeight="bold" color={themeColors.primaryDark}>
            {activeTab}
          </Text>
          <Text color={themeColors.textSecondary}>
          {activeTab === 'ABOUT' && <About colorMode={colorMode} />}
          {activeTab === 'EXPERIENCE' && <Experience colorMode={colorMode} />}
          {activeTab === 'PROJECTS' && <Projects colorMode={colorMode} />}

          </Text>
        </Box>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
