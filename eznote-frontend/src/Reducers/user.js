import { LOGIN, LOGOUT, REGISTER } from "../Constants/userConstants";

const initialState = {
  userId: "6267b4579723f487637a941a",
  userEmail: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
