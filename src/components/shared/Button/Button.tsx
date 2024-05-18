import { Button as MantineButton } from "@mantine/core";
import { ButtonProps } from "./Button.types";

const Button = ({ ...props }: ButtonProps) => {
  return <MantineButton {...props}>{props.children}</MantineButton>;
};
export default Button;
