let user: { name: string; age: number; avatarUrl?: string } = {
  name: "teste",
  age: 1,
};

/*
function signIn(email: string, password: string) {
  // Lógica de concatenar o usuário na aplicação.
}
*/

function signIn({ email, password }: { email: string; password: string }) {
  // Lógica de concatenar o usuário na aplicação.
  console.log("Usuário:" + email + " conectado!");
}

signIn({ email: "Teste@gmail.com", password: "123" });
