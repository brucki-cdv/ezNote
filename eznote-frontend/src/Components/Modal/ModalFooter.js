import styles from "./ModalFooter.module.css";

export default function ModalFooter({children}) {
    return (
        <div className={styles.modalFooter}>
            {children}
        </div>
    )
}