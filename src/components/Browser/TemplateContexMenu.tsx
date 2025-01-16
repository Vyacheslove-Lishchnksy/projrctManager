import styles from "./Browser.module.scss";

import { useSelector } from "react-redux";
import { ReactNode, useRef } from "react";

import { RootState } from "store/rootReduser";

export function TemplateContexMenu({ children }: IContextMenuPProps) {
  const {
    templateContextMenuReduser: { position, isActive },
  } = useSelector((state: RootState) => state);

  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <menu
      ref={targetRef}
      className={`${styles.contextMenu} ${
        isActive ? styles.contextMenu_active : ""
      }`}
      style={{ top: position.y, left: position.x }}
    >
      {children}
    </menu>
  );
}

interface IContextMenuPProps {
  children: ReactNode;
}
