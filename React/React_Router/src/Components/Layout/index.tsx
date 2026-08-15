import { Outlet } from "react-router";

export function Layout() {
  return (
    <div>
      <header className="user">
        <p>Olá, Teste</p>
      </header>

      <Outlet />

      <footer>
        <span className="copyright">Todos os direitos reservados</span>
      </footer>
    </div>
  );
}
