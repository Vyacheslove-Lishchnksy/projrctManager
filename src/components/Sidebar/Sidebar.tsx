import newProjectIcon from "@/new.svg";
import settingsIcon from "@/settings.svg";
import styles from "./Sidebar.module.scss";
import { IconButton } from "&/IconButton/IconButton";
import { Section } from "&/Section/Section.tsx";

export function Sidebar() {
  return (
    <section className={styles.sideber}>
      <nav className={styles.navigation}>
        <h1 className={styles.title}>Projects</h1>
        <IconButton src={newProjectIcon} />
        <IconButton src={settingsIcon} />
      </nav>
      <ul className={styles.list}>
        <Section>Project 1</Section>
        <Section>Project 2</Section>
        <Section>Project 3</Section>
      </ul>
    </section>
  );
}
