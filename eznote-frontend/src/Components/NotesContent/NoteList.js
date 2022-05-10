import NoteCard from "../NoteCard";
import apiService from "../../Services/api.service";
import styles from "./NotesList.module.css";

import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NoteList({ searchbar }) {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const { filterValue, filterId, showNotesFilter, notesReload, orderBy } =
    useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const getNotes = () => {
    switch (showNotesFilter) {
      case "all":
        console.log("ALL!");
        apiService.getNotes(6, 1, searchbar, orderBy).then((val) => {
          console.log(val);
          setNotes(val.data.notes);
          setHasMore(true);
          setPage(2);
        });
        break;
      case "status":
        console.log("STATUS");
        apiService
          .getNotesByStatus(6, 1, filterValue, searchbar, orderBy)
          .then((val) => {  
            setNotes(val.data.notes);
            setHasMore(true);
            setPage(2);
          });
        break;
      case "notebook":
        console.log("NOTEBOOK!");
        apiService
          .getNotesByNotebook(6, 1, filterValue, searchbar, orderBy)
          .then((val) => {
            setNotes(val.data.notes);
            setHasMore(true);
            setPage(2);
          });
        break;
      case "tag":
        console.log("TAG");
        apiService
          .getNotesByTag(6, 1, filterId, searchbar, orderBy)
          .then((val) => {
            setNotes(val.data.notes);
            setHasMore(true);
            setPage(2);
          });
        break;
    }
  };

  const fetchData = async () => {
    switch (showNotesFilter) {
      case "all":
        await apiService.getNotes(6, page, searchbar, orderBy).then((val) => {
          console.log("NOTES =", val.data.notes);
          if (val.data.notes.length === 0) {
            setNotes([...notes, val.data.notes]);
            setHasMore(false);
          } else {
            setPage(page + 1);
            setNotes([...notes, ...val.data.notes]);
          }
        });
        break;
      case "status":
        await apiService
          .getNotesByStatus(6, page, filterValue, searchbar, orderBy)
          .then((val) => {
            if (val.data.notes.length === 0) {
              setNotes([...notes, val.data.notes]);
              setHasMore(false);
            } else {
              setPage(page + 1);
              setNotes([...notes, ...val.data.notes]);
            }
          });
        break;
      case "notebook":
        await apiService
          .getNotesByNotebook(6, page, filterValue, searchbar, orderBy)
          .then((val) => {
            if (val.data.notes.length === 0) {
              setNotes([...notes, val.data.notes]);
              setHasMore(false);
            } else {
              setPage(page + 1);
              setNotes([...notes, ...val.data.notes]);
            }
          });
        break;
      case "tag":
        await apiService
          .getNotesByTag(6, page, filterValue, searchbar, orderBy)
          .then((val) => {
            if (val.data.notes.length === 0) {
              setNotes([...notes, val.data.notes]);
              setHasMore(false);
            } else {
              setPage(page + 1);
              setNotes([...notes, ...val.data.notes]);
            }
          });
        break;
    }
  };

  const onNoteClick = (id) => {
    console.log("note click");
    dispatch({ type: "SET_NOTE_ID", payload: id });
  };

  useEffect(() => {
    getNotes();
    return () => {
      dispatch({ type: "NOTES_RESET_RELOAD" });
    };
  }, [searchbar, filterValue, showNotesFilter, notesReload, orderBy]);

  const style = {};

  return (
    <div id={styles.scrollableDiv}>
      <InfiniteScroll
        dataLength={notes.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {notes.map((note) => {
          console.log(note);
          return (
            <NoteCard
              title={note.title}
              status={note.status}
              modifiedAt={note.modifiedAt}
              description={note.description}
              tags={note.tag}
              onClick={() => onNoteClick(note._id)}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
}
