import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalWrapper from "../Modal/ModalWrapper";
import ModalHeader from "../Modal/ModalHeader";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import ModalButton from "../Modal/ModalButton";
import InputField from "../InputField";
import CreateButton from "../Buttons/CreateButton";
import CancelButton from "../Buttons/CancelButton";

import { CgNotes } from "react-icons/cg";

export default function AddNoteModal({ init }) {
  return (
    <ModalBackdrop>
      <ModalWrapper>
        <ModalHeader>
          <CgNotes size={25} /> Add New Note
        </ModalHeader>
        <ModalBody>
          <InputField
            type="text"
            placeholder="Enter note name"
            onChange={init.onInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={init.closeModal} />
          <CreateButton onClick={init.addNote} />
        </ModalFooter>
      </ModalWrapper>
    </ModalBackdrop>
  );
}
