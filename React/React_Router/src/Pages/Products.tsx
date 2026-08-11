import { useSearchParams } from "react-router";

export function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");

  return (
    <div>
      <a href="/">Voltar</a>
      <h1>Produtos</h1>

      {category && (
        <span>
          Categoria <strong>{category}</strong>
        </span>
      )}
    </div>
  );
}
