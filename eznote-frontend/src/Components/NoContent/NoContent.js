import styles from "./NoContent.module.css";
import svg from "../../Images/no-content.svg";

export default function NoContent(second) {
  return (
    <div className={styles.noContent}>
      Nothing here
      <img src={svg} alt="svg" height="450" width="350" />
      Try to click on note, or create one!
    </div>
  );
}
