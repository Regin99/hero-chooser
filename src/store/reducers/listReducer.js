import { persistedState } from "../store";

export const listReducer = (state = persistedState, action) => {
  switch (action.type) {
    case "ADD_HERO":
      return [...state, { id: state.length + 1, name: action.payload }];
    case "DELETE_HERO":
      return state.filter((item, i) => action.payload !== i);
    default:
      return state;
  }
};
