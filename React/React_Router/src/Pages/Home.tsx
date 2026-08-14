import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  function productOpen() {
    navigate("/products")
  }

  return (
    <div>
      <h1>Página Home</h1>
      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>

        {/* ()=>{navigate("/products")} */}
        <button type="button" onClick={productOpen}>
          Ver Produtos
        </button>
      </nav>
    </div>
  );
}
