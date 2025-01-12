import newProjectIcon from "@/new.svg";
import settingsIcon from "@/settings.svg";
import styles from "./Sidebar.module.scss";
import { IconButton } from "&/IconButton/IconButton";
import { Section } from "&/Section/Section";
import { getAllGroups } from "../../api";
import { setGroups } from "store/groups/groups.slice";
import { useAppDispatch } from "store/configureStore";
import { RootState } from "store/rootReduser";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export function Sidebar() {
  const {
    groupsReduser: { groups },
  } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setGroups(getAllGroups()));
  }, [dispatch]);

  return (
    <aside className={styles.sideber}>
      <nav className={styles.navigation}>
        <h1 className={styles.title}>Groups</h1>
        <IconButton src={newProjectIcon} />
        <IconButton src={settingsIcon} />
      </nav>
      <ul className={styles.list}>
        {groups.map((group) => {
          return <Section key={group}>{group}</Section>;
        })}
      </ul>
    </aside>
  );
}
