import styles from "./NotesContent.module.css";
import NotesContentHeader from "./NotesContentHeader";
import NotesContentBody from "./NotesContentBody";
import Searchbar from "../Searchbar";
import NoteList from "./NoteList";

import {
  AiOutlineSortAscending,
  AiOutlineFileAdd,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function NotesContent({ children }) {
  const { showNotesFilter, orderBy } = useSelector((state) => state.notes);
  const [searchbar, setSearchbar] = useState("");
  const dispatch = useDispatch();
  const onNoteClick = () => {
    dispatch({ type: "ADD_NOTE_OPEN" });
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setSearchbar(e.target.value);
  };

  const onOrderByIconClick = () => {
    if (orderBy == 1) {
      dispatch({ type: "ORDER_BY_DESC" });
    } else {
      dispatch({ type: "ORDER_BY_ASC" });
    }
    console.log(orderBy);
  };

  const displayHeader = () => {
    switch (showNotesFilter) {
      case "all":
        return "All Notes";
      case "notebook":
        return "Notebook";
      case "status":
        return "Status";
      case "tag":
        return "Tag";
    }
  };

  return (
    <div className={styles.notesContent}>
      <NotesContentHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={styles.backIcon}>
            <IoReturnDownBackOutline size={20} />
          </div>
          {/* <AiOutlineRollback size={20} /> */}
          <div className={styles.notesContentIcon} onClick={onOrderByIconClick}>
            {orderBy == 1 ? (
              <AiOutlineSortAscending size={25} />
            ) : (
              <AiOutlineSortDescending size={25} />
            )}
          </div>

          {displayHeader()}
          <div className={styles.notesContentIcon}>
            <AiOutlineFileAdd size={25} onClick={onNoteClick} />
          </div>
        </div>
        <Searchbar placeholder="Search notes" onChange={onInputChange} />
      </NotesContentHeader>
      <NotesContentBody>
        <NoteList searchbar={searchbar} />
      </NotesContentBody>
    </div>
  );
}
