import { ButtonProps, SxProps, Theme } from "@mui/material";
import { MouseEventHandler } from "react";

export interface GretaButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
