import { Route, Routes } from "react-router";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { NotFound } from "../Pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/product?category=tvs" index element={<Products />} />

      <Route path="*" index element={<NotFound />} />
    </Routes>
  );
}
