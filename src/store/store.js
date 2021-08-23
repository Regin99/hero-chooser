import { createStore } from "redux";
import { listReducer } from "./reducers/listReducer";

const initialState = [
  { id: 1, name: "Pudge" },
  { id: 2, name: "Lina" },
  { id: 3, name: "ShadowShaman" },
];

export const persistedState = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : initialState;

export const store = createStore(listReducer, persistedState);
