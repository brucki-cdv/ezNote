import styles from "./Home.module.css";
import MainContainer from "../Components/MainContainer";
import Sidebar from "../Components/Sidebar";
import NotesContent from "../Components/NotesContent";
import NoteEditor from "../Components/Editor";
import SideContent from "../Components/SideContent";
import AddNoteModal from "../Components/AddNoteModal";
import AddNotebookModal from "../Components/AddNotebookModal";
import NoContent from "../Components/NoContent";

import { useDelayUnmount } from "../Hooks/useDelayUnmount";

import { useSelector } from "react-redux";
import { MdStayCurrentLandscape } from "react-icons/md";

export default function Home(props) {
  const { isContentOpen } = useSelector((state) => state.sidecontent);
  const { isAddNoteOpen, isAddNotebookOpen } = useSelector(
    (state) => state.modal
  );
  const { noteId } = useSelector((state) => state.notes);

  const showSideContent = useDelayUnmount(isContentOpen, 450);

  return (
    <MainContainer>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.notesContainer}>
        <NotesContent />
      </div>

      {noteId ? <NoteEditor /> : <NoContent />}
      {showSideContent && <SideContent />}
      {isAddNoteOpen && <AddNoteModal />}
      {isAddNotebookOpen && <AddNotebookModal />}
    </MainContainer>
  );
}
