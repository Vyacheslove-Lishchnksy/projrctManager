import { createSlice } from "@reduxjs/toolkit";

interface IGroups {
  groups: string[];
}

const initialState: IGroups = {
  groups: [],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroup: (state, action) => {
      state.groups += action.payload;
    },
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
  },
});

export const {
  actions: { addGroup, setGroups },
  reducer: groupsReduser,
} = groupsSlice;
