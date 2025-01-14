import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dirent } from "fs";

interface IGroups {
  currentGroup: string;
  groups: Dirent[];
}

const initialState: IGroups = {
  currentGroup: "",
  groups: [],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroup: (state, action) => {
      state.groups += action.payload;
    },
    setGroups: (state, action: PayloadAction<Dirent[]>) => {
      state.groups = action.payload;
    },
    setCurrentGroup: (state, action: PayloadAction<string>) => {
      state.currentGroup = action.payload;
    },
  },
});

export const {
  actions: { addGroup, setGroups, setCurrentGroup },
  reducer: groupsReduser,
} = groupsSlice;
