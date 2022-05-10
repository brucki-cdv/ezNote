import styles from "./NotesContentHeader.module.css";

export default function NotesContentHeader({children}) {
    return (
        <div className={styles.notesContentHeader}>
            {children}
        </div>
    )
}