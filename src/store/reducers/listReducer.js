const initialState = [
  { id: 1, name: "Pudge" },
  { id: 2, name: "Lina" },
  { id: 3, name: "ShadowShaman" },
];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HERO":
      return [...state, { id: state.length + 1, name: action.payload }];
    case "DELETE_HERO":
      return state.filter((item, i) => action.payload !== i);
    default:
      return state;
  }
};
