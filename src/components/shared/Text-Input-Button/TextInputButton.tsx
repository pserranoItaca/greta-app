import { TextInputButtonProps } from "./TextInput.types";
import styles from "./TextInputButton.module.scss";
import { Button, GretaText } from "@/components";
import { TextInput } from "@mantine/core";

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
        <TextInput
          label={placeholder}
          variant={variant}
          placeholder={placeholder}
        />
        <Button>
          <a href={href}></a>
          {textButton}
        </Button>
      </div>
    </div>
  );
};
export default TextInputButton;
