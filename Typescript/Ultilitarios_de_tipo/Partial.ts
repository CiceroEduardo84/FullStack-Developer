interface User {
  id: number;
  name: string;
  email: string;
}

const newUser: User = {
  id: 1,
  name: "teste",
  email: "teste@gmail.com",
};

const updatedUser: Partial<User> = { name: "teste2" };
