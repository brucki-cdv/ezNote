import styles from "./CancelButton.module.css";

export default function CancelButton({ children, onClick }) {
  return (
    <div onClick={onClick} className={styles.cancelButton}>
      <button>Cancel</button>
    </div>
  );
}
