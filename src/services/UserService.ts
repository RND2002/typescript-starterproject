import { User } from "../entity/User.js";
import { UserRepository } from "../repositories/UserRepository.js";

export class UserService{
    static async createUser(name:string,email:string):Promise<User>{
        const user=UserRepository.create({name,email})
        return await UserRepository.save(user)
    }
}