import styles from "./ImgSegment.module.scss";

function ImgSegment({ children, src }: IImgSegmentProps) {
  return (
    <article className={styles.section}>
      <img className={styles.icon} src={src} alt="" />
      <p>{children}</p>
    </article>
  );
}

interface IImgSegmentProps {
  src: string;
  children: string;
}

export default ImgSegment;
