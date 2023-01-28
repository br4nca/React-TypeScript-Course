import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { counterState } from "../store/counter";
import store from "../store/index";
import "./Counter.css";

interface CounterProps {}
const Counter: React.FC<CounterProps> = (props) => {
  const dispatch: typeof store.dispatch = useDispatch();
  const counter = useSelector(
    (state: { counter: counterState }) => state.counter.counter
  );
  const show = useSelector(
    (state: { counter: counterState }) => state.counter.showCounter
  );
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {show && <div className="value">{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
