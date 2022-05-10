import styles from "./Searchbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Searchbar({
  placeholder,
  title,
  onClick,
  onChange,
  value,
}) {
  return (
    <div className={styles.searchbar}>
      <div className={styles.icon}>
        <AiOutlineSearch size={22} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        value={value}
        title={title}
      />
    </div>
  );
}
