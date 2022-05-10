import styles from "./Editor.module.css";
import EditorHeader from "./EditorHeader";
import apiService from "../../Services/api.service";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function NoteEditor(props) {
  const [noteDescription, setNoteDescription] = useState();
  const [note, setNote] = useState({});
  const { noteId } = useSelector((state) => state.notes);

  const updateNoteDescription = async () => {
    console.log('updateed!');
    await apiService.updateNote(noteId, { description: noteDescription });
  };

  const getNoteDescription = async () => {
    await apiService.getNote(noteId).then((response) => {
      setNote(response.data.note);
    });
  };

  useEffect(() => {
    getNoteDescription();
  }, [noteId]);

  setInterval(updateNoteDescription, 2000);

  return (
    <div className={styles.editor}>
      <EditorHeader title="Projects" />
      <CKEditor
        editor={ClassicEditor}
        data={note.description ? note.description : "<p>Type here!</p>"}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setNoteDescription(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}
