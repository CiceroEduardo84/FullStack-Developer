interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

interface BookPreview {
  title: string;
}

const book: BookPreview = { title: "teste" };
const book2: Pick<Book, "title" | "pages"> = {
  title: "teste",
  pages: 10,
};
