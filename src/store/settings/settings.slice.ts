import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const startRootPath = "D:\\root";

interface ISettings {
  pathToRoot: string;
  startPath: string;
}

const initialState: ISettings = {
  pathToRoot: startRootPath,
  startPath: startRootPath,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPuthToRoot: (state, action: PayloadAction<string>) => {
      state.pathToRoot = action.payload;
    },
    setStartPath: (state, action: PayloadAction<string>) => {
      state.startPath = action.payload;
    },
  },
});

export const { actions, reducer: settingsReduser } = settingsSlice;
