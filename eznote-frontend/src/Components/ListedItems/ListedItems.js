import styles from "./ListedItems.module.css";

export default function ListedItems({ children, title, icon, isHidden }) {
  return (
    <>
      {icon} {title}
      <ul  className={`${styles.listedItems} ${isHidden && styles.hidden}`}>
        {children}
      </ul>
    </>
  );
}
