import styles from "./CardBody.module.css";

export default function CardBody({ children, onClick }) {
  return <div className={styles.cardBody} onClick={onClick}>{children}</div>;
}
