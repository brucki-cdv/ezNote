import styles from "./NotesContentBody.module.css";

export default function NotesContentBody({children}) {
    return (
        <div className={styles.notesContentBody}>
            {children}
        </div>
    )
}