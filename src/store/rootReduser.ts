import { combineReducers } from "@reduxjs/toolkit";
import { settingsReduser } from "./settings/settings.slice";
import { groupsReduser } from "./groups/groups.slice.ts";
import { browserReduser } from "./brouser/borwser.slice.ts";
import { contextMenuReduser } from "./contextMenu/contextMenu.slice.ts";
import { newFolderInputReduser } from "./newFolderInput/newFolderInput.slice.ts";

export const rootReducer = combineReducers({
  settingsReduser,
  groupsReduser,
  browserReduser,
  contextMenuReduser,
  newFolderInputReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
