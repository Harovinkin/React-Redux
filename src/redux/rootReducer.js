const initialState = {
  counter: 0
};

export default function rootReducer(store = initialState, action) {
  switch(action.type) {
    case "ADD":
      return {
        counter: store.counter + action.payload
      }

    case "SUB":
      return {
        counter: store.counter - 1
      }
      
    default:
      return store
  }
};