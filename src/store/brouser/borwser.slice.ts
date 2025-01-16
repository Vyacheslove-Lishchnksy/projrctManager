import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBrowser {
  currentDir: string;
  files: string[];
}

const initialState: IBrowser = {
  currentDir: "",
  files: [],
};

const browserSlice = createSlice({
  name: "browser",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<string[]>) => {
      state.files = action.payload;
    },
    setPath: (state, action: PayloadAction<string>) => {
      state.currentDir = action.payload;
    },
    addFile: (state, action) => {
      state.files = [...state.files, action.payload];
    },
  },
});

export const {
  actions: { setFiles, setPath, addFile },
  reducer: browserReduser,
} = browserSlice;
