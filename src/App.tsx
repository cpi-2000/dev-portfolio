import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import theme from "./theme";
import { router } from "./router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
