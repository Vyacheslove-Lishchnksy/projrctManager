import styles from "./Browser.module.scss";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/configureStore";
import { useEffect, useRef } from "react";

import {
  hideContextMenu,
  reloadPosition,
} from "store/contextMenu/contextMenu.slice";
import { MenuItem } from "&/MenuItem/MenuItem";
import {
  setNewFolderInputPosition,
  showNewFolderInput,
} from "store/newFolderInput/newFolderInput.slice";

export function ContexMenu() {
  const dispatch = useAppDispatch();

  const {
    contextMenuReduser: { position, isActive },
  } = useSelector((state: RootState) => state);

  const targetRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      targetRef.current &&
      !targetRef.current.contains(event.target as Node)
    ) {
      event.preventDefault();
      dispatch(hideContextMenu());
      setTimeout(() => {
        dispatch(reloadPosition());
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
      <MenuItem
        onClick={(event) => {
          dispatch(
            setNewFolderInputPosition({ x: event.pageX, y: event.pageY })
          );
          dispatch(hideContextMenu());
          dispatch(reloadPosition());
          dispatch(showNewFolderInput());
        }}
      >
        New folder
      </MenuItem>
    </menu>
  );
}
