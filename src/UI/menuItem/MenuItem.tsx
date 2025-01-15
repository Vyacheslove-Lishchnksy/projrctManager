import styles from "./MenuItem.module.scss";

export function MenuItem({ children, onClick }: ISectionProps) {
  return (
    <li className={`${styles.item}`} onClick={onClick}>
      {children}
    </li>
  );
}

interface ISectionProps {
  children: string;
  onClick?: () => void;
}
