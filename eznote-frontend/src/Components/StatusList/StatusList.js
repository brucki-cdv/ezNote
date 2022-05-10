import ListedItems from "../ListedItems/ListedItems";
import ListItem from "../ListedItems/ListItem";

import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlinePlayCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
export default function StatusList() {
  const { isStatusExpanded, isSidebarHidden } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const onActiveClick = () => {
    console.log("active!");
    dispatch({ type: "SHOW_BY_STATUS", payload: "active" });
  };

  const onHoldClick = () => {
    dispatch({ type: "SHOW_BY_STATUS", payload: "on hold" });
  };

  const onDroppedClick = () => {
    dispatch({ type: "SHOW_BY_STATUS", payload: "dropped" });
  };

  const onCompletedClick = () => {
    dispatch({ type: "SHOW_BY_STATUS", payload: "completed" });
  };

  return (
    <ListedItems isHidden={!isStatusExpanded || isSidebarHidden}>
      <ListItem onClick={onActiveClick}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <AiOutlinePlayCircle size={20} color="gray" />
          Active
        </div>
      </ListItem>
      <ListItem onClick={onHoldClick}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <AiOutlineClockCircle size={20} color="orange" />
          On Hold
        </div>
      </ListItem>
      <ListItem onClick={onCompletedClick}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <AiOutlineCheckCircle size={20} color="green" />
          Completted
        </div>
      </ListItem>
      <ListItem onClick={onDroppedClick}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <AiOutlineCloseCircle size={20} color="red" />
          Dropped
        </div>
      </ListItem>
    </ListedItems>
  );
}
