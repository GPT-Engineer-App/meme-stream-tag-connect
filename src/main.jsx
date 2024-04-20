import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: {
    100: "linear-gradient(to right, #004e92, #000428)",
  },
  button: {
    text: "#004e92",
    background: "#ffffff",
  },
};

const theme = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: {
        borderRadius: 0,
        color: "button.text",
        backgroundColor: "button.background",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "background.100",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
