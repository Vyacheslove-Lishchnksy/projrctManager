import ImgSegment from "&/ImgSegment/ImgSegment";
import styles from "./Browser.module.scss";
import folderPrigectSVG from "@/folderProject.svg";

export function Browser() {
  return (
    <section className={styles.browser}>
      <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
      <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
      <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
      <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
      <ImgSegment src={folderPrigectSVG}>Project</ImgSegment>
    </section>
  );
}
