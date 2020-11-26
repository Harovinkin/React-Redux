import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <h1>Counter #2: {props.counter}</h1>
      <button onClick={() => props.onAdd(5)}>Add 1</button>
      <button onClick={props.onSub}>Sub</button>
    </div>
  );
}

function mapStateToProps(state) {

  console.log(state)
  return {
    counter: state.counter2.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: num => dispatch({type: 'ADD2', payload: num}),
    onSub: () => dispatch({type: 'SUB2'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);