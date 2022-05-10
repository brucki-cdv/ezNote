import styles from "./CreateButton.module.css";

export default function CreateButton({ onClick }) {
  return (
    <div onClick={onClick} className={styles.createButton}>
      <button>Create</button>
    </div>
  );
}
