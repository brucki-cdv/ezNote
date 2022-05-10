import styles from "./ModalWrapper.module.css";

export default function ModalWrapper({children}) {
    return (
        <div className={styles.modalWrapper}>
            {children}
        </div>
    )
}