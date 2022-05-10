import ListedItems from "../ListedItems/ListedItems";
import ListItem from "../ListedItems/ListItem";
import apiService from "../../Services/api.service";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

export default function NotebooksList(second) {
  const [notebooks, setNotebooks] = useState([]);
  const { isNotesExpanded, isSidebarHidden, sidebarReload } =
    useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const onNotesClick = (e) => {
    let test = e.currentTarget.classList.contains("hidden");
    console.log(test);
  };

  const showByNotebook = (data) => {
    dispatch({ type: "SHOW_BY_NOTEBOOK", payload: data });
  };

  const getNotebooks = async () => {
    await apiService.getNotebooks().then((val) => {
      setNotebooks(val.data.notebooks);
    });
  };

  useEffect(() => {
    getNotebooks();
    return () => {
      dispatch({ type: "SIDEBAR_RESET_RELOAD" });
    };
  }, [sidebarReload]);

  return (
    <>
      <ListedItems isHidden={isSidebarHidden} onClick={onNotesClick}>
        {notebooks.map((notebook) => {
          return (
            <ListItem onClick={() => showByNotebook(notebook.name)}>
              {notebook.name}
            </ListItem>
          );
        })}
      </ListedItems>
    </>
  );
}
