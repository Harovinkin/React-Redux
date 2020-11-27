import React from 'react';
import {connect} from 'react-redux';

import './App.css';
import Counter from './components/Counter';
import { add, asyncAdd, sub } from './redux/actions/actions';

function App(props) {
  return (
    <div>
      <h1>Counter #1: {props.counter}</h1>
      <button onClick={() => props.onAdd(10)}>Add 1</button>
      <button onClick={props.onSub}>Sub 1</button>
      <hr />
      <button onClick={() => props.onAsyncAddNum(100)}>Async Add 100</button>
      <hr />

      <Counter />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: num => dispatch(add(num)),
    onSub: () => dispatch(sub()),
    onAsyncAddNum: num => dispatch(asyncAdd(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
