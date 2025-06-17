export class BookController {
    static async create({name,price}:{ name:string, price:number} ) {
        try {
            console.log(name,price);
        }
        catch(error){
            console.log(error);
        }
    }

    static async  getByName({name}:{name:string}) {
        try {
            console.log(name);
        }
        catch(error){
            console.log(error);
        }
    }
}