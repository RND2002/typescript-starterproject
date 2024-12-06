import { UserService } from "../services/UserService.js"
import { Request, Response } from "express";

export class UserController{

    static async createUser(req: Request, res: Response){
        const {name,email,password,role}=req.body

        try{
            const user=UserService.createUser(name,email,password,role)
            res.status(201).json(user)
        }catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    static async authenticateUser(req: Request, res: Response) {
        const { email, password } = req.body;
    
        try {
          const token = await UserService.loginUser(email, password); // Handle service response
          res.status(200).json({ token });
        } catch (error) {
          res.status(401).json({ error: error.message });
        }
      }
}