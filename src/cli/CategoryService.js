import chalk from "chalk"
import fs from 'fs'
const caminhoArquivo = process.argv

export class CategoryService {
    static async findCategories() {

        try {
            const request = await fetch('http://localhost:3000/categories')
            const response = await request.json()
            console.log('response status:', chalk.green(request.status))
            return response

        } catch (error) {
            console.log(error)
        }
    }

    static async findCategoryById(idCategoria) {

        try {
            const request = await fetch('http://localhost:3000/categories')
            const response = await request.json()
            const buscandoCategoriaPorId = response.filter((categoria) => categoria.id == idCategoria)
            const produto = buscandoCategoriaPorId[0]
            if (produto) {
                console.log('response status:', chalk.green(request.status))
                return produto
            } else {
                console.log('response status:', chalk.red(404))
            }

        } catch (error) {
            console.log(error)
        }
    }

    static async createCategory() {
        const encoding = 'utf-8'
        const novaCategoria = fs.promises.readFile('./src/cli/novaCategoria.json', encoding)

        try {
            const categoria = await novaCategoria
            const estrutura = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: categoria
            }
            const request = await fetch('http://localhost:3000/categories', estrutura)
            const response = await request.json()
            console.log('response status:', chalk.green(request.status))
            return response

        } catch (error) {
            console.log(error)
        }
    }
    static async updateCategory(idCategoria, dadosCategorya) {
        try {
            const estrutura = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dadosCategorya
            }
            const request = await fetch(`http://localhost:3000/categories/${idCategoria}`, estrutura)
            const response = await request.json()
            if (request.ok) {
                console.log('response status:', chalk.green(request.status))
                return response
            } else {
                console.log('response status:', chalk.red(request.status))
            }

        } catch (error) {
            console.log(error)
        }
    }
    static async deleteCategory(idCategoria) {
        try {
            const estrutura = {
                method: 'DELETE'
            }
            const request = await fetch(`http://localhost:3000/categories/${idCategoria}`, estrutura)
            if (request.ok) {
                console.log('response status:', chalk.green(request.status))
                return true
            } else {
                console.log('response status:', chalk.red(request.status))
            }

        } catch (error) {
            console.log(error)
        }
    }
}