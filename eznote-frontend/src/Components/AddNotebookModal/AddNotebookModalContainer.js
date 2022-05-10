import ReactDOM from "react-dom";
import AddNotebookModal from "./AddNotebookModal";
import apiService from "../../Services/api.service";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddNotebookModalContainer(second) {
  const [notebookName, setNotebookName] = useState("");
  const { userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const closeModal = () => {
    console.log("close");
    dispatch({ type: "ADD_NOTEBOOK_CLOSE" });
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setNotebookName(e.target.value);
  };

  const addNotebook = async () => {
    await apiService.createNotebook(userId, notebookName);
    dispatch({ type: "ADD_NOTEBOOK_CLOSE" });
    dispatch({type: "SIDEBAR_RELOAD"});
  };

  const init = {
    closeModal,
    addNotebook,
    onInputChange,
  };

  return (
    <>
      {ReactDOM.createPortal(
        <AddNotebookModal init={init} />,
        document.getElementById("modal")
      )}
    </>
  );
}
