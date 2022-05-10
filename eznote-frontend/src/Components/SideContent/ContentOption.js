import styles from "./ContentOption.module.css";

export default function ContentOption({ data, icon, subtitle }) {
  return (
    <div className={styles.contentOption}>
      {icon}{" "}
      <div className={styles.contentData}>
        <div>{subtitle}</div>
        <div>{data}</div>
      </div>
    </div>
  );
}
