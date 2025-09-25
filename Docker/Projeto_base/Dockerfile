# Imagem para ultilizar como base
FROM node:18-alpine3.20

# Criando diretório de trabalho
WORKDIR /usr/src/app

# Copiando os aquivos para diretório de trabalho
COPY . .

# Instalação de dependências
RUN npm install

RUN npm run build

# Expor a porta que o conteiner vai se comunicar
EXPOSE  3333

CMD [ "npm", "start" ]