import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface coordinate {
  x: number;
  y: number;
}

interface ITemplate {
  name: string;
  paths: string[];
}

interface ITemplateContextMenu {
  position: coordinate;
  isActive: boolean;
  templates: ITemplate[];
}

const initialState: ITemplateContextMenu = {
  position: { x: -1000, y: -1000 },
  isActive: false,
  templates: [],
};

const templateContextMenuSlice = createSlice({
  name: "TemplateContextMenu",
  initialState,
  reducers: {
    setTemplateContextMenuPosition: (
      state,
      action: PayloadAction<coordinate>
    ) => {
      state.position.x = action.payload.x;
      state.position.y = action.payload.y;
    },
    showTemplateContextMenu: (state) => {
      state.isActive = true;
    },
    hideTemplateContextMenu: (state) => {
      state.isActive = false;
    },
    reloadTemplateContextMenuPosition: (state) => {
      state.position = initialState.position;
    },
    setTemplates(state, actions) {
      state.templates = actions.payload;
    },
    addTemplate(state, action) {
      state.templates = [...state.templates, action.payload];
    },
  },
});

export const {
  actions: {
    setTemplateContextMenuPosition,
    showTemplateContextMenu,
    hideTemplateContextMenu,
    reloadTemplateContextMenuPosition,
    setTemplates,
  },
  reducer: templateContextMenuReduser,
} = templateContextMenuSlice;
