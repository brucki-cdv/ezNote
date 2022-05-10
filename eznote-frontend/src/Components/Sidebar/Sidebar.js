import styles from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarButton from "./SidebarButton";
import ListedItems from "../ListedItems/ListedItems";
import ListItem from "../ListedItems/ListItem";
import NotebooksList from "../NotebooksList";
import TagsList from "../TagsList";
import StatusList from "../StatusList";

import { useSelector, useDispatch } from "react-redux";
import {
  IoLogoAngular,
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoIosHelpCircleOutline,
} from "react-icons/io";
import { FcSettings } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillBook,
  AiFillTag,
  AiOutlineFileDone,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { RiAddCircleLine } from "react-icons/ri";
import { MdDoneAll, MdOutlineCancel } from "react-icons/md";
import { FiCircle } from "react-icons/fi";

export default function Sidebar(props) {
  const { isTagsExpanded, isNotesExpanded, isStatusExpanded, isSidebarHidden } =
    useSelector((state) => state.sidebar);

  const dispatch = useDispatch();

  const onNotesClick = () => {
    dispatch({ type: "SHOW_ALL_NOTES" });
    dispatch({ type: "SIDEBAR_EXPAND" });
  };

  const onTagsClick = () => {
    dispatch({ type: "SIDEBAR_EXPAND" });
    if (isTagsExpanded) {
      dispatch({ type: "TAGS_HIDE" });
    } else {
      dispatch({ type: "TAGS_EXPAND" });
    }
  };

  const onStatusClick = () => {
    dispatch({ type: "SIDEBAR_EXPAND" });

    if (isStatusExpanded) {
      dispatch({ type: "STATUS_HIDE" });
    } else {
      dispatch({ type: "STATUS_EXPAND" });
    }
  };
  const onNotebookClick = () => {
    dispatch({ type: "SIDEBAR_EXPAND" });
    dispatch({ type: "ADD_NOTEBOOK_OPEN" });
  };

  return (
    <nav className={`${styles.sidebar} ${isSidebarHidden && styles.hidden}`}>
      <SidebarHeader>
        <div>
          <IoLogoAngular size={25} /> ezNote
        </div>
        <div>
          <FcSettings size={25} />{" "}
          <GiHamburgerMenu
            size={25}
            onClick={() => {
              dispatch({ type: "SIDEBAR_HIDE" });
            }}
          />
        </div>
      </SidebarHeader>
      <div>
        <SidebarBody>
          <SidebarButton
            logo={<CgNotes size={30} />}
            title="All notes"
            func={30}
            onClick={onNotesClick}
          />
          <SidebarButton
            logo={<AiOutlineFileDone size={25} />}
            title="Status"
            func={<IoIosArrowDropdownCircle size={25} />}
            onClick={onStatusClick}
          />
          <StatusList />
          <SidebarButton
            logo={<AiFillTag size={25} />}
            title="Tags"
            func={<IoIosArrowDropdownCircle size={25} />}
            onClick={onTagsClick}
          />
          <TagsList />
          <SidebarButton
            logo={<AiFillBook size={25} />}
            title="Notebooks"
            func={<RiAddCircleLine size={25} />}
            onClick={onNotebookClick}
          />
          <NotebooksList />
        </SidebarBody>
      </div>
      <SidebarFooter>juh</SidebarFooter>
    </nav>
  );
}
