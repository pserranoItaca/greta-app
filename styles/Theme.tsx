import { MantineColorsTuple, colorsTuple, createTheme } from "@mantine/core";

const gretaScheme: MantineColorsTuple = [
  "#ffeded",
  "#f7dcdc",
  "#e4b8b8",
  "#d29293",
  "#c37272",
  "#ba5d5d",
  "#b75253",
  "#a14343",
  "#90393a",
  "#812e30",
];

const theme = createTheme({
  autoContrast: true,

  colors: {
    greta: [
      "#ffeded",
      "#f7dcdc",
      "#e4b8b8",
      "#d29293",
      "#c37272",
      "#ba5d5d",
      "#b75253",
      "#a14343",
      "#90393a",
      "#812e30",
    ],
  },
  primaryColor: "greta",
});
export default theme;
