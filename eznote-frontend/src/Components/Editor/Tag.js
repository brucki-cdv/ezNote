import styles from "./Tag.module.css";

export default function Tag({ name, color, onClick }) {
  return (
    <div className={styles.tag} style={{ backgroundColor: color }} onClick={onClick}>
      {name}
    </div>
  );
}
