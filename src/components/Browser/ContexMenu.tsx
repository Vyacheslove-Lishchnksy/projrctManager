import styles from "./Browser.module.scss";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/configureStore";
import { ReactNode, useEffect, useRef } from "react";

import {
  hideContextMenu,
  reloadPosition,
} from "store/contextMenu/contextMenu.slice";
import {
  hideTemplateContextMenu,
  reloadTemplateContextMenuPosition,
} from "store/templateContextMenu/templateContextMenu";

export function ContexMenu({ children }: IContextMenuPProps) {
  const dispatch = useAppDispatch();

  const {
    contextMenuReduser: { position, isActive },
  } = useSelector((state: RootState) => state);

  const targetRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    console.log(targetRef, event.target as Node);
    if (
      targetRef.current &&
      !targetRef.current.contains(event.target as Node)
    ) {
      event.preventDefault();
      dispatch(hideContextMenu());
      dispatch(hideTemplateContextMenu());
      setTimeout(() => {
        dispatch(reloadPosition());
        dispatch(reloadTemplateContextMenuPosition());
      }, 250);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
