import { Button } from "./components/button";

export function App() {
  return (
    <>
      <Button name="Criar" onClick={() => alert("Criar")} />
      <Button name="Editar" onClick={() => alert("Editar")} />
      <Button name="Remover" onClick={() => alert("Remover")} />
    </>
  );
}
