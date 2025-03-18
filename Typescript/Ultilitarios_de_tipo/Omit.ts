interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const book1: Omit<Book, "description" | "title"> = {
  author: "js",
  pages: 10,
};

