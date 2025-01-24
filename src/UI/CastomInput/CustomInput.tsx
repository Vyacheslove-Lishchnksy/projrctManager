import styles from "./CustomInput.module.scss";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/configureStore";
import { setValue } from "store/input/inputs.slice";

export function CustomInput({ name, placeholder, type }: ICustomInputProps) {
  const {
    customInputsReduser: { inputs },
  } = useSelector((state: RootState) => state);
  const input = inputs.find((input) => input.name === name);
  const dispatch = useAppDispatch();

  let value = "";
  if (input) {
    value = input.lastValue;
  }

  return (
    <input
      value={value}
      onChange={(event) => {
        dispatch(setValue({ name, lastValue: event.target.value }));
      }}
      placeholder={placeholder}
      type={type}
      className={styles.customInput}
    />
  );
}

interface ICustomInputProps {
  name: string;
  placeholder: string;
  type: string;
}
