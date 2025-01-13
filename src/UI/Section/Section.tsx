import styles from "./Section.module.scss";

export function Section({ children, isActive, onClick }: ISectionProps) {
  return (
    <li
      className={`${styles.section} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

interface ISectionProps {
  children: string;
  isActive?: boolean;
  onClick: () => void;
}
