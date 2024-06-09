import { Button, Text, TextInput, Title } from "@mantine/core";
import { TextInputButtonProps } from "./TextInput.types";
import styles from "./TextInputButton.module.scss";

const TextInputButton = ({
  titleText,
  buttonText,
  link,
  placeholder = "",
}: TextInputButtonProps) => {
  return (
    <div className={styles.container}>
      <Title>{titleText}</Title>
      <div className={styles.container_input}>
        <TextInput
          className={styles.container_input_text}
          placeholder={placeholder}
        />
        <Button variant="filled" size="compact-lg" component="a" href={link}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default TextInputButton;
