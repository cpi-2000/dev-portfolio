import { Center, Image, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import cpiDevsIcon from "../assets/cpi-devs.svg";

const spin = keyframes`0% { transform: rotate(0); } 100% { transform: rotate(360deg); }`;
const dots = keyframes`0% { content: "Loading"; } 33% { content: "Loading."; } 66% { content: "Loading.."; } 100% { content: "Loading..."; }`;

const Loading = () => (
  <Center h="70vh" w="100vw" flexDir="column">
    <Image
      src={cpiDevsIcon}
      boxSize="50px"
      animation={`${spin} 1s linear infinite`}
    />
    <Text
      fontSize="lg"
      color="gray.600"
      mt={4}
      _after={{ content: '"Loading"', animation: `${dots} 1.5s infinite` }}
    />
  </Center>
);

export default Loading;
