import styles from "./CardTag.module.css";

export default function CardTag({title, color}) {
 return (
     <div className={styles.cardTag} style={{backgroundColor: color}}>{title}</div>
 )
}