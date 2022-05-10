import styles from "./ListItem.module.css";

export default function ListItem({ children, icon, onClick }) {
  return (
    <div className={`${styles.listItemContainer} ${styles.listItemHover}`}>
      <li className={styles.listItem} onClick={onClick}>
        {icon}
        {children}
      </li>
    </div>
  );
}
