import { createSlice } from "@reduxjs/toolkit";

interface ISettings {
  pathToRoot: string;
}

const initialState: ISettings = {
  pathToRoot: "D:\\root",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPuthToRoot: (state, action) => {
      state.pathToRoot = action.payload;
    },
  },
});

export const { actions, reducer: settingsReduser } = settingsSlice;
