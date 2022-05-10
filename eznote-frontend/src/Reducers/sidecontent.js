import { CONTENT_OPEN, CONTENT_CLOSE } from "../Constants/sideContentConstants";

const initialState = {
  isContentOpen: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CONTENT_CLOSE:
      return {
        isContentOpen: false,
      };
    case CONTENT_OPEN:
      return {
        isContentOpen: true,
      };
    default:
      return state;
  }
}
