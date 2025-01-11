import "./App.css";
import styles from "./scss-modules/helloWorld.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "./store/rootReduser";
import { useAppDispatch } from "./store/configureStore";
import { actions } from "./store/sattings/settings.slice";

function App() {
  const { settiengsReduser } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  return (
    <section
      onClick={() => dispatch(actions.add(1))}
      className={styles.helloWorld}
    >
      <h1 className="select-none">{settiengsReduser.value}</h1>
    </section>
  );
}

export default App;
