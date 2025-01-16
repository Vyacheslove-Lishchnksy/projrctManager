import { IconButton } from "&/IconButton/IconButton";
import styles from "./ImgSegment.module.scss";
import trashSVG from "@/trash.svg";

function ImgSegment({ children, src, onClick, text }: IImgSegmentProps) {
  return (
    <article onClick={onClick} className={styles.section}>
      <p
        className={styles.text}
        style={{ fontSize: `${(32 / (text?.length ?? 1)) * 1.2}px` }}
      >
        {text}
      </p>
      <img className={styles.icon} src={src} alt="" />
      <p className={styles.name}>{children}</p>
      <IconButton src={trashSVG} />
    </article>
  );
}

interface IImgSegmentProps {
  src: string;
  children: string;
  text?: string;
  onClick: () => void;
}

export default ImgSegment;
