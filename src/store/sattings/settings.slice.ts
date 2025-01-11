import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { actions, reducer: settiengsReduser } = settingsSlice;
