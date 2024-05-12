import { SxProps, Theme } from "@mui/material";

export const styles: SxProps<Theme> = {
  fontFamily: "sans-serif",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#bd6464",
  borderRadius: 45,
  padding: 2,
  "&:hover": {
    backgroundColor: "#d6a8a8",
  },
};
