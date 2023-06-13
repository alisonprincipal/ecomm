import chalk from "chalk"
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
            }else{
                console.log('response status:', chalk.red(404))
            }

        } catch (error) {
            console.log(error)
        }
    }
}