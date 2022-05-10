import styles from "./ModalHeader.module.css";

export default function ModalHeader({ children }) {
  return <div className={styles.modalHeader}>{children}</div>;
}
