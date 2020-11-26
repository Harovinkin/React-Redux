import { ADD2, SUB2 } from "../actions/actionTypes";

const initialState = {
  counter: 100
};

export default function counter2(store = initialState, action) {
  switch(action.type) {
    case ADD2:
      return {
        counter: store.counter + action.payload
      }

    case SUB2:
      return {
        counter: store.counter - 1
      }
      
    default:
      return store
  }
};