import { Container, TextField, colors } from "@mui/material";
import { TextInputButtonProps } from "./TextInput.types";
import styles from "./TextInputButton.module.scss";
import { GretaButton, GretaText } from "@/components";

export const TextInputButton = ({
  title = "",
  variant = "outlined",
  textColor = "light",
  textVariant = "title",
  placeholder,
  textButton,
  href,
}: TextInputButtonProps) => {
  return (
    <div className={styles.general}>
      <GretaText color={textColor} variant={textVariant} content={title} />
      <div className={styles.general_text}>
        <div>
          <TextField
            fullWidth
            label={placeholder}
            variant={variant}
            placeholder={placeholder}
          />
        </div>
        <GretaButton href={href}>{textButton}</GretaButton>
      </div>
    </div>
  );
};
export default TextInputButton;
