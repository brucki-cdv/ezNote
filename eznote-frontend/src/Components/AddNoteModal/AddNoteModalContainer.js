import ReactDOM from "react-dom";
import AddNoteModal from "./AddNoteModal";
import apiService from "../../Services/api.service";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddNoteModalContainer(second) {
  const [note, setNote] = useState("");
  const { userId } = useSelector((state) => state.user);
  const { filterValue, filterId, showNotesFilter } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const closeModal = () => {
    console.log("close");
    dispatch({ type: "ADD_NOTE_CLOSE" });
  };

  const onInputChange = (e) => {
    setNote(e.target.value);
  };

  const addNote = () => {
    console.log("FILTERVALUE2notesfilter = ", showNotesFilter);
    switch (showNotesFilter) {
      case "all":
        apiService.createNote({
          createdBy: userId,
          title: note,
        });
        dispatch({ type: "ADD_NOTE_CLOSE" });
        dispatch({ type: "NOTES_RELOAD" });
        break;
      case "tag":
        apiService.createNote({
          createdBy: userId,
          title: note,
          tag: [filterId],
        });
        dispatch({ type: "ADD_NOTE_CLOSE" });
        dispatch({ type: "NOTES_RELOAD" });
        break;
      case "status":
        apiService.createNote({
          createdBy: userId,
          title: note,
          status: filterValue,
        });
        dispatch({ type: "ADD_NOTE_CLOSE" });
        dispatch({ type: "NOTES_RELOAD" });
        break;
    }
  };

  const init = {
    closeModal,
    addNote,
    onInputChange,
  };

  return (
    <>
      {ReactDOM.createPortal(
        <AddNoteModal init={init} />,
        document.getElementById("modal")
      )}
    </>
  );
}
