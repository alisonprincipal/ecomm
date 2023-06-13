import chalk from "chalk"
export class CategoryService {
    static async findCategories() {
        const request = await fetch('http://localhost:3000/categories')
        const response = await request.json()
        console.log('response status:', chalk.green(request.status))
        return response
    }
}