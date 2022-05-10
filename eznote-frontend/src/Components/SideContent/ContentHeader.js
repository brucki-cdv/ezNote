import styles from "./ContentHeader.module.css";

export default function ContentHeader({ children }) {
  return <div className={styles.contentHeader}>{children}</div>;
}
