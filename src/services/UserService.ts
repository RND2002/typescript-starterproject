import { AppDataSource } from "../config/database.js";
import { User } from "../entity/User.js";
import { UserRepository } from "../repositories/UserRepository.js";
import { generateToken } from "../securityConfig/Jwt.js";
import { comparePassword, hashPassword } from "../securityConfig/Password.js";

export class UserService{
    static async createUser(name:string,email:string,password:string,role:string):Promise<User>{
        const hashedPassword=await hashPassword(password)
        const user=UserRepository.create({name,email, password: hashedPassword,role})
        return await UserRepository.save(user)
    }

    static async loginUser(email: string, password: string): Promise<string> {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { email } });
    
        if (!user) {
          throw new Error("Invalid credentials: User not found");
        }
    
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid credentials: Incorrect password");
        }
    
        // Generate a JWT token
        return generateToken({ id: user.id, role: user.role });
      }
}

