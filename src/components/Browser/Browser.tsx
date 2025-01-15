import styles from "./Browser.module.scss";

import backButtonSVG from "@/UnDo.svg";

import { RootState } from "store/rootReduser";
import { useEffect } from "react";
import { useAppDispatch } from "store/configureStore";
import { setFiles, setPath } from "store/brouser/borwser.slice";
import { useSelector } from "react-redux";

import path, { join } from "path";
import { Dirent } from "fs";

import { getAllFiles, isRootDir } from "api/index";

import { IconButton } from "&/IconButton/IconButton";
import ImgSegment from "&/ImgSegment/ImgSegment";
import VoidResult from "./VoidResalt";
import { ContexMenu } from "./ContexMenu";

import { getCurrentIcon } from "./getCurrentIcon";
import {
  setPosition,
  showContextMenu,
} from "store/contextMenu/contextMenu.slice";

import { PopupInput } from "&/PopupInput/PopupInput";

export function Browser() {
  const {
    browserReduser: { currentDir, files },
    settingsReduser: { startPath },
  } = useSelector((state: RootState) => state);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPath(startPath));
  }, []);
  useEffect(() => {
    if (!!currentDir) {
      dispatch(setFiles(getAllFiles(currentDir)));
    }
  }, [currentDir, startPath, dispatch]);

  const currentTree: Dirent[] = files.filter((file) => {
    return !file.name.startsWith(".");
  });

  return (
    <main className={styles.browser}>
      <PopupInput name="popup" title="Enter a folder name" />
      <ContexMenu />
      <header className={styles.header}>
        <IconButton
          onClick={() => {
            if (!isRootDir(currentDir)) {
              dispatch(setPath(path.dirname(currentDir)));
            }
          }}
          src={backButtonSVG}
        />
        <h3 className={styles.title}>{currentDir}</h3>
      </header>
      <section
        onContextMenu={(event) => {
          event.preventDefault();
          dispatch(setPosition({ x: event.pageX, y: event.pageY }));
          dispatch(showContextMenu());
        }}
        className={styles.borwserBody}
      >
        {currentTree.length !== 0 ? (
          currentTree.map((file) => {
            return (
              <ImgSegment
                src={getCurrentIcon(file)}
                onClick={() => {
                  if (file.isDirectory()) {
                    dispatch(setPath(join(file.parentPath, file.name)));
                  }
                }}
              >
                {file.name}
              </ImgSegment>
            );
          })
        ) : (
          <VoidResult />
        )}
      </section>
    </main>
  );
}
