import { useRef } from "react";
import styles from "./PopupInput.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store/rootReduser";

export function PopupInput({ name, title, newAction }: IPopupInputProps) {
  const {
    newFolderInputReduser: { isActive, position },
  } = useSelector((state: RootState) => state);

  let value = "";
  const targetRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      newAction(value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    value = event.target.value;
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
  newAction: (value: string) => void;
}
