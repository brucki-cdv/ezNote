import styles from "./CardDetails.module.css";

export default function CardDetails({children}){
    return (
        <div className={styles.cardDetails}>{children}</div>
    )
}