import styles from "./EditorHeader.module.css";
import SelectItem from "../SelectOptions/SelectItem";
import Tag from "./Tag";
import apiService from "../../Services/api.service";

import {
  AiOutlineBook,
  AiOutlineFileDone,
  AiOutlineTag,
  AiOutlineMore,
} from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function EditorHeader({ title }) {
  const [notebooks, setNotebooks] = useState([]);
  const [notebookStatus, setNotebookStatus] = useState({ status: null });
  const [noteTags, setNoteTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState();
  const [clicked, setClicked] = useState();
  const dispatch = useDispatch();
  const { isContentOpen } = useSelector((state) => state.sidecontent);
  const { noteId } = useSelector((state) => state.notes);
  let notebooksArr = [];
  let tagsArr = [];
  let tagsIdArr = [];

  console.log("NOTEID = ", noteId);

  const onMoreClick = () => {
    if (isContentOpen) {
      dispatch({ type: "CONTENT_CLOSE" });
    } else {
      dispatch({ type: "CONTENT_OPEN" });
    }
  };

  const onTagClick = async (tagId) => {
    dispatch({ type: "NOTES_RELOAD" });
    await apiService.deleteTag(noteId, tagId);
    getNoteTags();
    setClicked(true);
  };

  const getNotebooks = async () => {
    await apiService.getNotebooks().then((val) => {
      console.log(val.data);
      setNotebooks(val.data.notebooks);
    });
  };

  const getNoteTags = async () => {
    await apiService.getNote(noteId).then((val) => {
      setNoteTags(val.data.note.tag);
    });
  };

  const getTags = async () => {
    await apiService.getTags().then((val) => {
      setTags(val.data.tags);
    });
  };

  const updateNote = async (data) => {
    await apiService.updateNoteTag(noteId, data);
  };

  const updateNoteTag = async (data) => {
    console.log("DATA = ", data);
    await apiService.updateNoteTag(noteId, data);
  };

  const onStatusChange = (e) => {
    setNotebookStatus({ status: e });
    dispatch({ type: "NOTES_RELOAD" });
    setClicked(true);
    console.log("NTOEBOOK = ", notebookStatus);
  };

  const onTagChange = (e) => {
    console.log("E = ", e);
    dispatch({ type: "NOTES_RELOAD" });
    setSelectedTag(e);
    updateNoteTag(e);
    getNoteTags();
    setClicked(true);
  };

  //noteId, noteTags
  useEffect(() => {
    getNoteTags();
    getNotebooks();
    getTags();
    return () => {
      setClicked(false);
    };
  }, [noteId, clicked]);

  useEffect(() => {
    updateNote(notebookStatus);
    dispatch({ type: "NOTES_RELOAD" });
  }, [notebookStatus]);

  useEffect(() => {
    updateNoteTag(selectedTag);
  }, [selectedTag]);

  notebooks.map((notebook) => {
    notebooksArr.push({ value: notebook.name, name: notebook.name });
  });

  noteTags.map((tag) => {
    tagsIdArr.push(tag._id);
  });

  tags.map((tag) => {
    tagsArr.push({ value: tag._id, name: tag.name });
  });

  return (
    <header className={styles.editorHeader}>
      <h1>{title}</h1>
      <div className={styles.options}>
        <SelectItem
          icon={<AiOutlineBook size={18} />}
          options={notebooksArr}
          defaultValue="Notebook"
        />
        <SelectItem
          options={[
            { value: "none", name: "None" },
            { value: "active", name: "Active" },
            { value: "on hold", name: "On Hold" },
            { value: "completed", name: "Completed" },
            { value: "dropped", name: "Dropped" },
          ]}
          defaultValue="Status"
          onChange={onStatusChange}
          icon={<AiOutlineFileDone size={18} />}
        />
        {noteTags.map((tag) => {
          return (
            <Tag
              name={tag.name}
              color={tag.hexColor}
              onClick={() => onTagClick(tag._id)}
            />
          );
        })}

        <SelectItem
          onChange={onTagChange}
          options={tagsArr}
          defaultValue="Tag"
          icon={<AiOutlineTag size={18} />}
        />
        <AiOutlineMore size={25} onClick={onMoreClick} />
      </div>
    </header>
  );
}
