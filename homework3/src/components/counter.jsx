import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../redux/actions/counter'

const Counter = ({value, onIncrement, onDecrement}) => (
  <div className="counter">
    <div className="value">{value}</div>
    <div className="actions">
      <button className="btn" onClick={() => onIncrement(5)}>
        &#43;
      </button>
      <button className="btn" onClick={() => onDecrement(5)}>
        &#8722;
      </button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  value: state.counterValue
})

const mapDispatchToProps = dispatch => ({
  onIncrement: val => dispatch(increment(val)),
  onDecrement: val => dispatch(decrement(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);