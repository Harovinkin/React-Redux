import React from 'react';
import {connect} from 'react-redux';

import './App.css';

function App(props) {
  return (
    <div>
      <h1>Counter: {props.counter}</h1>
      <button onClick={() => props.onAdd(10)}>Add 1</button>
      <button onClick={props.onSub}>Sub 1</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: num => dispatch({type: 'ADD', payload: num}),
    onSub: () => dispatch({type: 'SUB'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
