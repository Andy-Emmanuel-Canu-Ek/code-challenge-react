import { types } from "../types/types";

const initialState = {
  logged: true,
  user_id: localStorage.getItem("user_id"),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
