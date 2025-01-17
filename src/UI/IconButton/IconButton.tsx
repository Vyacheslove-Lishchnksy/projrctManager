import { MouseEventHandler } from "react";
import styles from "./IconButton.module.scss";

export function IconButton({ src, onClick }: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img className={styles.icon} src={src} />
    </button>
  );
}

interface IIconButtonProps {
  src: string;
  onClick?: MouseEventHandler;
}
