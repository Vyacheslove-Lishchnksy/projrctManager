import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface coordinate {
  x: number;
  y: number;
}

interface IContextMenu {
  position: coordinate;
  isActive: boolean;
}

const initialState: IContextMenu = {
  position: { x: -1000, y: -1000 },
  isActive: false,
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<coordinate>) => {
      state.position.x = action.payload.x;
      state.position.y = action.payload.y;
    },
    showContextMenu: (state) => {
      state.isActive = true;
    },
    hideContextMenu: (state) => {
      state.isActive = false;
    },
    reloadPosition: (state) => {
      state.position = initialState.position;
    },
  },
});

export const {
  actions: { setPosition, showContextMenu, hideContextMenu, reloadPosition },
  reducer: contextMenuReduser,
} = contextMenuSlice;
