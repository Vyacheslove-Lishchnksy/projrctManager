import styles from "./IconButton.module.scss";

export function IconButton({ src }: IIconButtonProps) {
  return (
    <button>
      <img className={styles.icon} src={src} />
    </button>
  );
}

interface IIconButtonProps {
  src: string;
}
