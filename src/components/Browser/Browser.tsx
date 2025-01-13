import ImgSegment from "&/ImgSegment/ImgSegment";
import { useSelector } from "react-redux";
import styles from "./Browser.module.scss";
import folderPrigectSVG from "@/folderProject.svg";
import { RootState } from "store/rootReduser";
import { useEffect } from "react";
import { useAppDispatch } from "store/configureStore";
import { setPath } from "store/brouser/borwser.slice";

export function Browser() {
  const {
    browserReduser: { currentDir },
    settingsReduser: { startPath },
  } = useSelector((state: RootState) => state);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPath(startPath));
  });

  return (
    <main className={styles.browser}>
      <header>
        <h3 className={styles.title}>{currentDir}</h3>
      </header>
      <section>
        <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
        <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
        <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
        <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
        <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
      </section>
    </main>
  );
}
