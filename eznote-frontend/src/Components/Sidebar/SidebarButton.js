import styles from "./SidebarButton.module.css";

export default function SidebarButton({ logo, title, func, onClick }) {
  return (
    <div className={styles.sidebarButton} onClick={onClick}>
      <ul>
        <li>
          {logo} {title}
        </li>
        <li>{func}</li>
      </ul>
    </div>
  );
}
