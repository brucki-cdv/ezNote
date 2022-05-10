import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalWrapper from "../Modal/ModalWrapper";
import ModalHeader from "../Modal/ModalHeader";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import ModalButton from "../Modal/ModalButton";
import InputField from "../InputField";
import CreateButton from "../Buttons/CreateButton";
import CancelButton from "../Buttons/CancelButton";

import { AiOutlineBook } from "react-icons/ai";


export default function AddNotebookModal({ init }) {
  return (
    <ModalBackdrop>
      <ModalWrapper>
        <ModalHeader>
          <AiOutlineBook size={25} /> Add New Notebook
        </ModalHeader>
        <ModalBody>
          <InputField type="text" placeholder="Enter notebook name" onChange={init.onInputChange}/>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={init.closeModal} />
          <CreateButton onClick={init.addNotebook} />
        </ModalFooter>
      </ModalWrapper>
    </ModalBackdrop>
  );
}
