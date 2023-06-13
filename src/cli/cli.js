import chalk from 'chalk'
import {
    CategoryService
} from './CategoryService.js'
// recupero os argumentos passados no comando cli
const argumentosComando = process.argv

const processarComando = async () => {
    // no switch eu verifico qual o comando passado via terminal
    switch (argumentosComando[2]) {
        case '--listarCategorias':
            const litandoCategorias = await CategoryService.findCategories()
            console.log(chalk.black.bgYellow('Categorias'), litandoCategorias)

            break;
        default:
            console.log('COMANDO INVALIDO') // code block
    }
}
processarComando()