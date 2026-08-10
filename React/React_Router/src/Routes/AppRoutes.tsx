import { Route, Routes } from "react-router";
import { Home } from "../Pages/home";
import { Products } from "../Pages/Products";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/product" index element={<Products />} />
    </Routes>
  );
}
