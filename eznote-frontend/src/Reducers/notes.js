import {
  SHOW_ALL_NOTES,
  SHOW_BY_STATUS,
  SHOW_BY_TAG,
  SHOW_BY_NOTEBOOK,
  NOTES_RELOAD,
  NOTES_RESET_RELOAD,
  ORDER_BY_DESC,
  ORDER_BY_ASC,
  SET_NOTE_ID
} from "../Constants/notesConstants";

const initialState = {
  noteId: null,
  showNotesFilter: "all",
  filterValue: undefined,
  filterId: null,
  notesReload: false,
  orderBy: 1,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SHOW_ALL_NOTES:
      return {
        ...state,
        showNotesFilter: "all",
      };
    case SHOW_BY_TAG:
      return {
        showNotesFilter: "tag",
        filterValue: payload.filterValue,
        filterId: payload.filterId
      };
    case SHOW_BY_STATUS:
      return {
        showNotesFilter: "status",
        filterValue: payload
      };
    case SHOW_BY_NOTEBOOK:
      return {
        showNotesFilter: "notebook",
        filterValue: payload.filterValue,
        filterId: payload.filterId
      };
    case NOTES_RELOAD:
      return {
        ...state,
        notesReload: true,
      };
    case NOTES_RESET_RELOAD:
      return {
        ...state,
        notesReload: false,
      };
    case ORDER_BY_ASC:
      return {
        ...state,
        orderBy: 1,
      };
    case ORDER_BY_DESC:
      return {
        ...state,
        orderBy: -1,
      };
    case SET_NOTE_ID:
      return {
        ...state,
        noteId: payload
      }
    default:
      return state;
  }
}
