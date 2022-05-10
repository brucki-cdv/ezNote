import styles from "./SidebarFooter.module.css";

export default function SidebarFooter({ children }) {
  return <div className={styles.sidebarFooter}>{children}</div>;
}
