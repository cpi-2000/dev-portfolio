import { extendTheme } from "@chakra-ui/react";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import "@fontsource/fira-code/index.css";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const globalStyles = {
  styles: {
    global: (props: any) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? darkTheme.colors.background
            : lightTheme.colors.background,
        color:
          props.colorMode === "dark"
            ? darkTheme.colors.textPrimary
            : lightTheme.colors.textPrimary,
      },
    }),
  },
};

const theme = extendTheme({
  config,
  ...globalStyles,
  colors: {
    light: lightTheme.colors,
    dark: darkTheme.colors,
  },
  fonts: {
    heading: `"Fira Code", "Courier New", monospace`,
    body: `"Fira Code", "Courier New", monospace`,
    mono: `"Fira Code", "Courier New", monospace`,
  },
});

export default theme;

// import { extendTheme, ThemeConfig } from "@chakra-ui/react";
// import { lightTheme } from "./lightTheme";
// import { darkTheme } from "./darkTheme";
// import "@fontsource/fira-code/index.css";

// const config: ThemeConfig = {
//   initialColorMode: "light",
//   useSystemColorMode: true,
// };

// type ThemeColorKeys = keyof typeof lightTheme.colors;

// const colors = Object.keys(lightTheme.colors).reduce((acc, key) => {
//   const typedKey = key as ThemeColorKeys;
//   acc[typedKey] = {
//     light: lightTheme.colors[typedKey],
//     dark: darkTheme.colors[typedKey],
//   };
//   return acc;
// }, {} as Record<ThemeColorKeys, { light: string; dark: string }>);

// const globalStyles = {
//   styles: {
//     global: (props: { colorMode: "light" | "dark" }) => ({
//       body: {
//         bg: colors.background[props.colorMode],
//         color: colors.textPrimary[props.colorMode],
//       },
//     }),
//   },
// };

// const theme = extendTheme({
//   config,
//   ...globalStyles,
//   colors,
//   fonts: {
//     heading: `"Fira Code", "Courier New", monospace`,
//     body: `"Fira Code", "Courier New", monospace`,
//     mono: `"Fira Code", "Courier New", monospace`,
//   },
// });

// export default theme;
