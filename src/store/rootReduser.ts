import { combineReducers } from "@reduxjs/toolkit";
import { settiengsReduser } from "./sattings/settings.slice";

export const rootReducer = combineReducers({ settiengsReduser });
export type RootState = ReturnType<typeof rootReducer>;
