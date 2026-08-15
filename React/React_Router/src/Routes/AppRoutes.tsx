import { Route, Routes } from "react-router";
import { Products } from "../Pages/Products";
import { NotFound } from "../Pages/NotFound";
import { Datails } from "../Pages/Details";
import { Home } from "../Pages/Home";
import { Layout } from "../Components/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Datails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
