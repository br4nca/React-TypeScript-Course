import { createSlice } from "@reduxjs/toolkit";

export interface counterState {
  counter: number;
  showCounter: boolean;
}
export interface counterAction {
  type: "increment" | "decrement" | "increase" | "toggle";
  amount?: number;
}
const initialCounterState: counterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state: counterState) {
      state.counter++;
    },
    decrement(state: counterState) {
      state.counter--;
    },
    increase(state: counterState, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state: counterState) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
