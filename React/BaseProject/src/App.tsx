import "./global.css";
import { useState, useEffect } from "react";
import { Button } from "./components/button";
import styles from "./app.module.css";
// import { useMessage } from "./hooks/useMessage";

export function App() {
  // const { show } = useMessage({ name: "teste", age: 18 });
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    // count = count + 1;
  }

  function handleRemove() {
    if (count > 0) {
      setCount(count - 1);
      // count = count - 1;
    }
  }

  // dispara quando é renderizado e quando algum parâmetro muda
  useEffect(() => {
    if (count > 0) {
      console.log("O valor mudou para: " + count);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}
