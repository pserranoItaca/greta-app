import { GretaTextProps } from "./Text.types";
import styles from "./Text.module.scss";

const GretaText = ({
  content = "",
  variant = "title",
  color = "light",
}: GretaTextProps) => {
  return (
    <span className={`${styles[color]} ${styles[variant]}`}>{content}</span>
  );
};
export default GretaText;
