import styles from "./ContentWrapper.module.css";
import { useSelector } from "react-redux";

export default function ContentWrapper({ children }) {
  const { isContentOpen } = useSelector((state) => state.sidecontent);

  return (
    <div
      className={`${styles.contentWrapper}  ${isContentOpen && styles.active}`}
    >
      {children}
    </div>
  );
}
