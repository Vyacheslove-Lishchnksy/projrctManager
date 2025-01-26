import styles from "./Browser.module.scss";

import backButtonSVG from "@/UnDo.svg";

import { RootState } from "store/rootReduser";
import { useEffect } from "react";
import { useAppDispatch } from "store/configureStore";
import { useSelector } from "react-redux";

import { addFile, setFiles, setPath } from "store/brouser/borwser.slice";
import {
  hideNewFolderInput,
  reloadNewFolderInputPosition,
  setNewFolderInputPosition,
  showNewFolderInput,
} from "store/newFolderInput/newFolderInput.slice";
import {
  hideContextMenu,
  reloadPosition,
  setPosition,
  showContextMenu,
} from "store/contextMenu/contextMenu.slice";
import {
  setTemplateContextMenuPosition,
  setTemplates,
  showTemplateContextMenu,
} from "store/templateContextMenu/templateContextMenu.slice";
import { clearInputs } from "store/input/inputs.slice";

import {
  getAllFiles,
  getAllTemplates,
  initTemplate,
  isDirectory,
  isRootDir,
  makeFolder,
} from "api/index";

import { IconButton } from "&/IconButton/IconButton";
import ImgSegment from "&/ImgSegment/ImgSegment";
import VoidResult from "./VoidResalt";
import { ContexMenu } from "./ContexMenu";

import { getCurrentIcon } from "./getCurrentIcon";

import path, { join } from "path";

import { PopupInput } from "../PopupInput/PopupInput";

import { MenuItem } from "&/MenuItem/MenuItem";

import { TemplateContexMenu } from "./TemplateContexMenu";
import { CustomInput } from "&/CastomInput/CustomInput";
import { lowensteinSort } from "./lowenstein";
import { similaeSort } from "./similar";

export function Browser() {
  const {
    browserReduser: { currentDir, files },
    settingsReduser: { startPath },
    templateContextMenuReduser: { templates },
    customInputsReduser: { inputs },
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
  useEffect(() => {
    dispatch(
      setTemplates(
        getAllTemplates().filter((template) => !template.name.startsWith("."))
      )
    );
  }, [templates.length]);

  const input = inputs.find((file) => file.name === "search");
  let currentTree: string[] = files.filter((file) => {
    return !path.basename(file).startsWith(".");
  });
  useEffect(() => {}, [input?.lastValue, currentTree]);

  if (input?.lastValue) {
    currentTree = similaeSort(currentTree, input.lastValue);
    currentTree = lowensteinSort(currentTree, input.lastValue);
  }

  console.log(currentTree);

  return (
    <main className={styles.browser}>
      <PopupInput
        name="popup"
        title="Enter a name"
        newAction={(value) => {
          makeFolder(join(currentDir, value));
          if (value) {
            dispatch(addFile(join(currentDir, value)));
          }
          dispatch(hideNewFolderInput());
          setTimeout(() => {
            dispatch(reloadNewFolderInputPosition());
          });
        }}
      />
      <ContexMenu>
        <TemplateContexMenu>
          {templates.map((item) => {
            return (
              <MenuItem
                onClick={() => {
                  initTemplate(currentDir, item.name, item.name);
                  dispatch(addFile(join(currentDir, item.name)));
                }}
                key={item.name}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </TemplateContexMenu>
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
        <MenuItem
          onClick={() => {
            dispatch(setTemplateContextMenuPosition({ x: 220, y: 40 }));
            dispatch(showTemplateContextMenu());
          }}
        >
          New folder by template
        </MenuItem>
      </ContexMenu>

      <header className={styles.header}>
        <IconButton
          onClick={() => {
            if (!isRootDir(currentDir)) {
              dispatch(setPath(path.dirname(currentDir)));
            }
          }}
          src={backButtonSVG}
        />
        <h3 className={styles.title}>
          {path.relative(startPath, currentDir) || "root"}
        </h3>
        <CustomInput name="search" placeholder="search..." type="text" />
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
                key={file}
                src={getCurrentIcon(file)}
                onClick={() => {
                  if (isDirectory(file)) {
                    dispatch(setPath(file));
                    dispatch(clearInputs());
                  }
                }}
                text={(() => {
                  const index = file.lastIndexOf(".");
                  if (index !== -1) {
                    return file.slice(index + 1, file.length);
                  }
                  return "";
                })()}
                onClickSideButton={(event) => {
                  event.preventDefault();
                  // dispatch(setFiles(files.filter((item) => item !== file)));
                  // removeFolder(file);
                  event.stopPropagation();
                }}
              >
                {path.basename(file)}
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
