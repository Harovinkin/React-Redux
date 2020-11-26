import React from 'react';
import { connect } from 'react-redux';
import { add2, sub2 } from '../redux/actions/actions';

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
  return {
    counter: state.counter2.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: num => dispatch(add2(num)),
    onSub: () => dispatch(sub2()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);