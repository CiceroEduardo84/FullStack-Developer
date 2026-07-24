import "./global.css";
import { Button } from "./components/button";
import styles from "./app.module.css";
import { useMessage } from "./hooks/useMessage";

export function App() {
  const { show } = useMessage({ name: "teste", age: 18 });

  return (
    <div className={styles.container}>
      <Button
        name="Adicionar"
        onClick={() => show("Mensagem do meu proprio hook")}
      />
      <span>0</span>
      <Button name="Remover" onClick={() => alert("Remover")} />
    </div>
  );
}
