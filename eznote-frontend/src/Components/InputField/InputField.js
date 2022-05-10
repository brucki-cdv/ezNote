import styles from "./InputField.module.css";

export default function InputField({ type, placeholder, title, onChange }) {
  return (
    <div className={styles.inputField}>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
