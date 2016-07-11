import React, { Component, PropTypes } from 'react';

class Counter extends Component {
 constructor(props){
  super(props);
 }


 render() {
  const { value, onIncrement, onDecrement } = this.props;
  return (
   <p>
    Counter Value: {value}
    <br />
    <button onClick={onIncrement}> + </button>
    <br />
    <button onClick={onDecrement}> - </button>
   </p>
  );
 }
}

export default Counter;
