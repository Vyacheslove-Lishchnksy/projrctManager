import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface coordinate {
  x: number;
  y: number;
}

interface INewFolderInput {
  position: coordinate;
  isActive: boolean;
  value: string;
}

const initialState: INewFolderInput = {
  position: { x: -1000, y: -1000 },
  isActive: false,
  value: "",
};

const newFolderInputSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setNewFolderInputPosition: (state, action: PayloadAction<coordinate>) => {
      state.position.x = action.payload.x;
      state.position.y = action.payload.y;
    },
    showNewFolderInput: (state) => {
      state.isActive = true;
    },
    hideNewFolderInput: (state) => {
      state.isActive = false;
    },
    reloadNewFolderInputPosition: (state) => {
      state.position = initialState.position;
    },
    setNewFolderInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {
  actions: {
    setNewFolderInputPosition,
    showNewFolderInput,
    hideNewFolderInput,
    reloadNewFolderInputPosition,
    setNewFolderInputValue,
  },
  reducer: newFolderInputReduser,
} = newFolderInputSlice;
