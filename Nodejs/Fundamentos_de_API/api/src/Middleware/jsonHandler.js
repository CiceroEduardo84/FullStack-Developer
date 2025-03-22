export async function jsonBodyHandler(request, response) {
  // Adiciona os chucnks de dados da requisição
  const buffers = [];

  // Coleta o chuncks da dados
  for await (const chunck of request) {
    buffers.push(chunck);
  }

  try {
    // Concatena os chuncks e converte para string. Em seguida, converte para json.
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  // Define o header de resposta como json.
  response.setHeader("Content-Type", "application/json");
}
