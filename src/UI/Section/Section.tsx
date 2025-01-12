import styles from "./Section.module.scss";

export function Section({ children }: ISectionProps) {
  return <li className={styles.section}>{children}</li>;
}

interface ISectionProps {
  children: string;
}
