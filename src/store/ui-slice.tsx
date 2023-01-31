import { createSlice } from "@reduxjs/toolkit";
import { NotificationProps } from "../components/UI/Notification";

export interface uiState {
  cartIsVisible: boolean;
  notification: NotificationProps;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: {
      status: "",
      title: "",
      message: "",
    },
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
