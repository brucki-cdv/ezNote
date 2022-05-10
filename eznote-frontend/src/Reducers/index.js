import sidebar from "./sidebar";
import sidecontent from "./sidecontent";
import modal from "./modal";
import user from "./user";
import notes from "./notes"

import { combineReducers } from "redux";

export default combineReducers({
  sidebar,
  sidecontent,
  modal,
  user,
  notes
});
