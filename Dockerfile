FROM node:18
# define um diretório para trabalho
WORKDIR /app-ecomm

#define uma porta padrão para a aplicação
ARG PORT=3001
# permite que a porta que esta sendo utilizada seja visualizada após o build
ENV PORT=$PORT
# expoe a porta para o usuario
EXPOSE $PORT
# copia todo os arquivos da raiz do projeto
COPY . .
RUN npm install
ENTRYPOINT npm start