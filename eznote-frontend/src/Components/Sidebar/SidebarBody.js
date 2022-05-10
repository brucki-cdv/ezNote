import styles from "./SidebarBody.module.css";

export default function SidebarBody({children}) {
    return (
        <div className={styles.sidebarBody}>
            {children}
        </div>
    )
}