import styles from "./CardDescription.module.css";

export default function CardDescription({children}) {
    return (
        <div className={styles.cardDescription}>{children}</div>
    )
}