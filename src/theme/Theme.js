import { extendTheme } from "native-base";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#fef2f7",
      100: "#fbd5e4",
      200: "#f8a6c4",
      300: "#f477a4",
      400: "#f2518c",
      500: "#f64585", // Principal tono primario
      600: "#e43978",
      700: "#b92c5f",
      800: "#8f224b",
      900: "#731b3c",
    },
    darkPrimary: {
      50: "#2d0f15", 
      100: "#45101c",
      200: "#701326",
      300: "#9d1a3b",
      400: "#c02652",
      500: "#e64575",
      600: "#f96c9c",
      700: "#faa3ba",
      800: "#fbccd7",
      900: "#fde8ee",
    },
    secondary: {
      50: "#f9f4fb",
      100: "#e9d9ed",
      200: "#d5afd9",
      300: "#c285c6",
      400: "#b465b6",
      500: "#9f4093", // Principal tono secundario
      600: "#8c3783",
      700: "#6e2b67",
      800: "#53204d",
      900: "#40183c",
    },
    darkSecondary: {
      50: "#201122",
      100: "#2e1634",
      200: "#4c2355",
      300: "#693073",
      400: "#80408b",
      500: "#9f5aaf",
      600: "#c373b0",
      700: "#d49ec7",
      800: "#ebcfe1",
      900: "#f6eaf1",
    },
    accent: {
      50: "#fef5fc",
      100: "#fbdff8",
      200: "#f6bff0",
      300: "#f09fe8",
      400: "#e97edc",
      500: "#d466c6", // Tono acento principal
      600: "#b452a2",
      700: "#91407f",
      800: "#6f305e",
      900: "#552547",
    },
    darkAccent: {
      50: "#1a0e19",
      100: "#2a172b",
      200: "#421f44",
      300: "#5b2760",
      400: "#732e7d",
      500: "#9f4093",
      600: "#d466c6",
      700: "#e68ee0",
      800: "#f9d1f5",
      900: "#fceaf9",
    },
    highlight: {
      50: "#fff8f8",
      100: "#ffecec",
      200: "#ffd7d6",
      300: "#ffc2c1",
      400: "#ffb0ad",
      500: "#ffb9b8", // Tono highlight principal
      600: "#e39999",
      700: "#c07b7a",
      800: "#9d5e5e",
      900: "#804848",
    },
    darkHighlight: {
      50: "#231717",
      100: "#362222",
      200: "#5a3838",
      300: "#7e4e4e",
      400: "#a16666",
      500: "#d18d8d",
      600: "#e39999",
      700: "#ffc2c1",
      800: "#ffdcdc",
      900: "#fff5f5",
    },
    background: {
      default: "#2F2F2F", // Fondo para modo oscuro
      light: "#F6E2F3",   // Sección más clara
    },
    text: {
      primary: "#ffffff",
      secondary: "#cfcfcf",
      muted: "#9e9e9e",
    },
  },
});

export default customTheme;
