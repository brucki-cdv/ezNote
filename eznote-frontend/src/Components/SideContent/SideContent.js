import ContentWrapper from "./ContentWrapper";
import ContentHeader from "./ContentHeader";
import ContentOption from "./ContentOption";

import { BiTimeFive } from "react-icons/bi";
import {
  AiOutlineBook,
  AiOutlineFileDone,
  AiOutlineTag,
  AiOutlineEdit,
  AiOutlineClose,
} from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
export default function SideContent() {
  const dispatch = useDispatch();
  const onCloseContent = () => {
    dispatch({ type: "CONTENT_CLOSE" });
  };

  return (
    <ContentWrapper>
      <div
        style={{ position: "absolute", top: "2.3rem", right: "2rem" }}
        onClick={onCloseContent}
      >
        <AiOutlineClose size={20} />
      </div>
      <ContentHeader>Information</ContentHeader>
      <ContentOption icon={<AiOutlineBook size={20} />} data="First Notebook" />
      <ContentOption icon={<AiOutlineFileDone size={20} />} data="Status" />
      <ContentOption icon={<AiOutlineTag size={20} />} data="Tags" />
      <ContentOption
        icon={<BiTimeFive size={20} />}
        data="2020-10-01"
        subtitle="Created At"
      />
      <ContentOption
        icon={<MdOutlineEditNote size={20} />}
        data="2020-10-01"
        subtitle="Modified At"
      />
      <ContentHeader>Actions</ContentHeader>
      <ContentOption icon={<AiOutlineEdit size={20} />} data="Edit" />
      <ContentOption icon={<BsTrash size={20} />} data="Delete" />
    </ContentWrapper>
  );
}
