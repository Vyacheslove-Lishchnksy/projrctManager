import { useRef } from "react";
import styles from "./PopupInput.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store/rootReduser";
import {
  setNewFolderInputValue as setValue,
  hideNewFolderInput as hide,
  reloadNewFolderInputPosition as reloadPosition,
} from "store/newFolderInput/newFolderInput.slice";
import { useAppDispatch } from "store/configureStore";

export function PopupInput({ name, title }: IPopupInputProps) {
  const {
    newFolderInputReduser: { isActive, position },
  } = useSelector((state: RootState) => state);

  const dispatch = useAppDispatch();

  const value = "";
  const targetRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(setValue(value));
      dispatch(hide());
      setTimeout(() => {
        dispatch(reloadPosition());
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <section
      ref={targetRef}
      className={`${styles.popup} ${isActive ? styles.popup_active : ""}`}
      style={{ top: position.y, left: position.x }}
    >
      <label className={styles.popup__title} htmlFor={name}>
        {title}
      </label>
      <input
        id={name}
        className={styles.popup__input}
        type="text"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </section>
  );
}

interface IPopupInputProps {
  name: string;
  title: string;
  onClick?: () => void;
}
