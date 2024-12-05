import { UserService } from "../services/UserService.js"
import { Request, Response } from "express";

export class UserController{

    static async createUser(req: Request, res: Response){
        const {name,email}=req.body
        try{
            const user=UserService.createUser(name,email)
            res.status(201).json(user)
        }catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
}