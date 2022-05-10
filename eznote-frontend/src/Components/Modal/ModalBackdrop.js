import styles from "./ModalBackdrop.module.css";

export default function ModalBackdrop({children}) {
    return (<div className={styles.modalBackdrop}>{children}</div>)
}