import {
  ADD_NOTE_OPEN,
  ADD_NOTE_CLOSE,
  ADD_NOTEBOOK_OPEN,
  ADD_NOTEBOOK_CLOSE,
} from "../Constants/modalConstants";

const initialState = {
  isAddNoteOpen: false,
  isAddNotebookOpen: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE_OPEN:
      return {
        ...state,
        isAddNoteOpen: true,
      };
    case ADD_NOTE_CLOSE:
      return {
        ...state,
        isAddNoteOpen: false,
      };
    case ADD_NOTEBOOK_OPEN:
      return {
        ...state,
        isAddNotebookOpen: true,
      };
    case ADD_NOTEBOOK_CLOSE:
      return {
        ...state,
        isAddNotebookOpen: false,
      };
    default:
      return state;
  }
}
