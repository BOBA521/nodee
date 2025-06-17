export class UserController {
    static async all({login}:{login:string}) {
        try{
            console.log(login);
        }
        catch(error){
            console.log(error);
        }


    }
}