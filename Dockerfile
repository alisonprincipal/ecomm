FROM node:18
WORKDIR /app-ecomm

#define uma porta padrão para a aplicação
ARG PORT=6000
# permite que a porta que esta sendo utilizada seja visualizada após o build
ENV PORT=$PORT
# expoe a porta para o usuario
EXPOSE $PORT
COPY . .
RUN npm install
ENTRYPOINT npm start