import styles from "./CardTitle.module.css";
import {
  AiOutlinePlayCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";

export default function CardTitle({ children, status }) {
  const returnStatusIcon = () => {
    switch (status) {
      case "active":
        return <AiOutlinePlayCircle size={18} color="gray"/>;
      case "on hold":
        return <AiOutlineClockCircle size={18} color="orange"/>;
      case "completed":
        return <AiOutlineCheckCircle size={18} color="green"/>;
      case "dropped":
        return <AiOutlineCloseCircle size={18} color="red"/>;
    }
  };

  return (
    <div className={styles.cardTitle}>
      {returnStatusIcon()}
      {children}
    </div>
  );
}
