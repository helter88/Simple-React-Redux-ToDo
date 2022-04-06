const initialState = {
  toDoList: [],
};
export const reducerList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      };
    case 'REMOVE':
      return {
        ...state,
        toDoList: state.toDoList.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
};
