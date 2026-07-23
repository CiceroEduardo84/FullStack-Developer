import "./global.css";
import { Button } from "./components/button";
import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => alert("Adicionar")} />
      <span>0</span>
      <Button name="Remover" onClick={() => alert("Remover")} />
    </div>
  );
}
