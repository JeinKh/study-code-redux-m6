import { change_step, reset } from "./constants";

const initialState = {
  counter: 0,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + state.step,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - state.step,
      };
    case reset:
      return {
        ...state,
        counter: 0,
        step: 1,
      };
    case change_step:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
