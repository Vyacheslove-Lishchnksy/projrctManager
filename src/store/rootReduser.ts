import { combineReducers } from "@reduxjs/toolkit";
import { settingsReduser } from "./settings/settings.slice";
import { groupsReduser } from "./groups/groups.slice.ts";

export const rootReducer = combineReducers({
  settingsReduser,
  groupsReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
