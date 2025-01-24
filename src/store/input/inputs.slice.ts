import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInput {
  name: string;
  lastValue: string;
}

interface INewFolderInput {
  inputs: IInput[];
}

const initialState: INewFolderInput = {
  inputs: [
    {
      name: "search",
      lastValue: "",
    },
  ],
};

const CustomInputsSlise = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<IInput>) {
      const input = state.inputs.find(
        (input) => input.name === action.payload.name
      );
      if (input) {
        input.lastValue = action.payload.lastValue;
      }
    },
    clearInputs(state) {
      state.inputs.forEach((input) => {
        input.lastValue = "";
      });
    },
  },
});

export const {
  actions: { setValue, clearInputs },
  reducer: customInputsReduser,
} = CustomInputsSlise;
