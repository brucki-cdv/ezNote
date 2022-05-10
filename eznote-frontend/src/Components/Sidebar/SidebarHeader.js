import styles from "./SidebarHeader.module.css";

export default function SidebarHeader({ children }) {
  return <div className={styles.sidebarHeader}>{children}</div>;
}
