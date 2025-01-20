import { IconButton } from "&/IconButton/IconButton";
import styles from "./ImgSegment.module.scss";
import trashSVG from "@/trash.svg";
import paintSVG from "@/paint.svg";

function ImgSegment({
  children,
  src,
  onClick,
  onClickSideButton: onClickSineButton,
  text,
}: IImgSegmentProps) {
  return (
    <article onClick={onClick} className={styles.section}>
      <p
        className={styles.text}
        style={{ fontSize: `${(32 / (text?.length ?? 1)) * 1}px` }}
      >
        {text?.toLocaleUpperCase()}
      </p>
      <img className={styles.icon} src={src} alt="" />
      <p className={styles.name}>{children}</p>
      <IconButton src={paintSVG} onClick={onClickSineButton} />
      <IconButton src={trashSVG} onClick={onClickSineButton} />
    </article>
  );
}

interface IImgSegmentProps {
  src: string;
  children: string;
  text?: string;
  onClick: () => void;
  onClickSideButton: React.MouseEventHandler;
}

export default ImgSegment;
