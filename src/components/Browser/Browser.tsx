import ImgSegment from "&/ImgSegment/ImgSegment";
import { useSelector } from "react-redux";
import styles from "./Browser.module.scss";
import folderPrigectSVG from "@/folderProject.svg";
import folderGroupSVG from "@/folderGroup.svg";
import { RootState } from "store/rootReduser";
import { useEffect } from "react";
import { useAppDispatch } from "store/configureStore";
import { setFiles, setPath } from "store/brouser/borwser.slice";
import { getAllFiles, isGroup } from "api/index";
import { join } from "path";
import { Dirent } from "fs";

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
  console.log(files, currentTree);

  return (
    <main className={styles.browser}>
      <header>
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
  } else {
    return folderPrigectSVG;
  }
}
