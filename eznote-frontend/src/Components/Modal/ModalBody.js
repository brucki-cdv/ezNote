import styles from "./ModalBody.module.css";

export default function ModalBody({children}) {
    return (
        <div className={styles.modalBody}>{children}</div>
    )
}