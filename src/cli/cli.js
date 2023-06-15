/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
import chalk from "chalk";
import fs from "fs";

import { CategoryService } from "./CategoryService";

const argumentosComando = process.argv;
const processarComando = async () => {
  // no switch eu verifico qual o comando passado via terminal
  switch (argumentosComando[2]) {
    case "--listarCategorias":

      const listandoCategorias = await CategoryService.findCategories();
      console.log(chalk.black.bgYellow("Categorias"), listandoCategorias);
      break;

    case "--recuperarCategoriaPorId":

      const idProduct = Number(argumentosComando[3]);
      const categoriaPorId = await CategoryService.findCategoryById(idProduct);
      // so retorna a mensagem personalizada se o produto for encontrado
      // eslint-disable-next-line no-unused-expressions
      categoriaPorId && console.log(chalk.black.bgYellow("Categoria encontrada"), categoriaPorId);
      break;

    case "--inserirCategoria":
      const novaCategoria = await CategoryService.createCategory();
      console.log(chalk.green("Nova categoria Adicionada:"), novaCategoria);

      break;

    case "--atualizarCategoria":
      const idArgumento = argumentosComando[3];
      const caminhoArquivo = argumentosComando[4];

      const encoding = "utf-8";
      const objetoCategoria = await fs.promises.readFile(caminhoArquivo, encoding);
      const updateCategory = await CategoryService.updateCategory(idArgumento, objetoCategoria);
      // eslint-disable-next-line no-unused-expressions
      updateCategory && console.log(chalk.green("Categoria atualizada:"), updateCategory);

      break;

    case "--excluirCategoria":
      const id = argumentosComando[3];
      const deleteCategory = await CategoryService.deleteCategory(id);
      // eslint-disable-next-line no-unused-expressions
      deleteCategory && console.log(chalk.green("Categoria excluida com sucesso"));

      break;

    default:
      console.log("COMANDO INVALIDO"); // code block
  }
};
processarComando();
