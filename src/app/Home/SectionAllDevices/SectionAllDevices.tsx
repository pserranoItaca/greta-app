import {
  CrazyGirl,
  GroupChat,
  SurpriseGirl,
  ThinkKid,
} from "../../../../public/resources/icons";
import styles from "./SectionAllDevices.module.scss";
import { bobComputer } from "../../../../public/resources";

const SectionAllDevices = () => {
  return (
    <>
      <img src={bobComputer.default.src} alt="alt" />
      <h1>SECTION!</h1>
      <div className={styles.icon}>
        <ThinkKid></ThinkKid>
      </div>
    </>
  );
};
export default SectionAllDevices;
