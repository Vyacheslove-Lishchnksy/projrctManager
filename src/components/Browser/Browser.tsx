import ImgSegment from "&/ImgSegment/ImgSegment";
import { useSelector } from "react-redux";
import styles from "./Browser.module.scss";
import folderRootSVG from "@/folderRoot.svg";
import folderPrigectSVG from "@/folderProject.svg";
import folderGroupSVG from "@/folderGroup.svg";
import folderSVG from "@/folder.svg";
import backButton from "@/UnDo.svg";
import { RootState } from "store/rootReduser";
import { useEffect } from "react";
import { useAppDispatch } from "store/configureStore";
import { setFiles, setPath } from "store/brouser/borwser.slice";
import { getAllFiles, isGroup, isProject, isRoot, isRootDir } from "api/index";
import path, { join } from "path";
import { Dirent } from "fs";
import { IconButton } from "&/IconButton/IconButton";

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

  console.log(files);

  const currentTree: Dirent[] = files.filter((file) => {
    return !file.name.startsWith(".");
  });

  return (
    <main className={styles.browser}>
      <header className={styles.header}>
        <IconButton
          onClick={() => {
            if (!isRootDir(currentDir)) {
              dispatch(setPath(path.dirname(currentDir)));
            }
          }}
          src={backButton}
        />
        <h3 className={styles.title}>{currentDir}</h3>
      </header>
      <section>
        {currentTree.map((file) => {
          return (
            <ImgSegment
              src={getCurrentIcon(file)}
              onClick={() => {
                dispatch(setPath(join(file.parentPath, file.name)));
              }}
            >
              {file.name}
            </ImgSegment>
          );
        })}
      </section>
    </main>
  );
}

function getCurrentIcon(file: Dirent) {
  if (isGroup(file)) {
    return folderGroupSVG;
  } else if (isProject(file)) {
    return folderPrigectSVG;
  } else if (isRoot(file)) {
    return folderRootSVG;
  } else {
    return folderSVG;
  }
}
