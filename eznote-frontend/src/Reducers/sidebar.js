import {
  TAGS_EXPAND,
  TAGS_HIDE,
  STATUS_EXPAND,
  STATUS_HIDE,
  NOTES_EXPAND,
  NOTES_HIDE,
  SIDEBAR_RELOAD,
  SIDEBAR_RESET_RELOAD,
  SIDEBAR_HIDE,
  SIDEBAR_EXPAND
} from "../Constants/sidebarConstants";

const initialState = {
  isTagsExpanded: false,
  isStatusExpanded: false,
  isNotesExpanded: false,
  sidebarReload: false,
  isSidebarHidden: false,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case TAGS_EXPAND:
      return {
        ...state,
        isTagsExpanded: true,
      };
    case TAGS_HIDE:
      return {
        ...state,
        isTagsExpanded: false,
      };
    case NOTES_EXPAND:
      return {
        ...state,
        isNotesExpanded: true,
      };
    case NOTES_HIDE:
      return {
        ...state,
        isNotesExpanded: false,
      };
    case STATUS_EXPAND:
      return {
        ...state,
        isStatusExpanded: true,
      };

    case STATUS_HIDE:
      return {
        ...state,
        isStatusExpanded: false,
      };
    case SIDEBAR_RELOAD:
      return {
        ...state,
        sidebarReload: true
      }
    case SIDEBAR_RESET_RELOAD:
      return {
        ...state,
        sidebarReload: false
      }
    case SIDEBAR_HIDE:
      return {
        ...state,
        isSidebarHidden: true
      }
    case SIDEBAR_EXPAND:
      return {
        ...state,
        isSidebarHidden: false
      }
    default:
      return state;
  }
}
