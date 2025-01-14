import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dirent } from "fs";

interface IBrowser {
  currentDir: string;
  files: Dirent[];
}

const initialState: IBrowser = {
  currentDir: "",
  files: [],
};

const browserSlice = createSlice({
  name: "browser",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<Dirent[]>) => {
      state.files = action.payload;
    },
    setPath: (state, action: PayloadAction<string>) => {
      state.currentDir = action.payload;
    },
  },
});

export const {
  actions: { setFiles, setPath },
  reducer: browserReduser,
} = browserSlice;
