import { Button, ButtonProps, styled } from "@mui/material";
import { GretaButtonProps } from "./Button.types";
import { styles } from "./Button.module";

const GretaButton = ({ children, href, onClick }: GretaButtonProps) => {
  return (
    <Button onClick={onClick} href={href} sx={styles}>
      {children}
    </Button>
  );
};
export default GretaButton;
