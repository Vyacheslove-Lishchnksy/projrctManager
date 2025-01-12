import { combineReducers } from "@reduxjs/toolkit";
import { settingsReduser } from "./settings/settings.slice";

export const rootReducer = combineReducers({
  settingsReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
