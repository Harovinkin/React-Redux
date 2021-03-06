import { ADD, ADD2, SUB, SUB2 } from "./actionTypes";

export function add(num) {
  return {
    type: ADD,
    payload: num
  }
}

export function sub() {
  return {
    type: SUB,
  }
}

export function asyncAdd(num) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(num))
    }, 3000)
  }
}

export function add2(num) {
  return {
    type: ADD2,
    payload: num
  }
}

export function sub2() {
  return {
    type: SUB2,
  }
}