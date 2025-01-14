import styles from "./ImgSegment.module.scss";

function ImgSegment({ children, src, onClick }: IImgSegmentProps) {
  return (
    <article onClick={onClick} className={styles.section}>
      <img className={styles.icon} src={src} alt="" />
      <p>{children}</p>
    </article>
  );
}

interface IImgSegmentProps {
  src: string;
  children: string;
  onClick: () => void;
}

export default ImgSegment;
