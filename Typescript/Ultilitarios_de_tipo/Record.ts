// Cria um objeto onde todas as chaves são strings e os valores são números.
const scores: Record<string, number> = {
  test: 10,
  teste2: 15,
};

// Limites valores.
type Profile = "admin" | "user" | "guest";

const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3,
};

// Objetos personalizados.
interface User {
  name: string;
  email: string;
}

const users: Record<string, User> = {
  1: {
    name: "rodrigo",
    email: "teste@gmail.com",
  },
  2: {
    name: "rodrigo",
    email: "teste@gmail.com",
  },
};
