import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./Jwt.js";

export const authenticate=(req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try{
        const decoded=verifyToken(token) as {id:number;role:string}
        
        req.user = decoded; // Attach user data to request
        next();
    }catch(error){
        res.status(403).json({ message: "Invalid token" });
    }

}

export const authorize=(roles:string[])=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const currUserRole=req.user?.role
        if(!roles.includes(currUserRole)){
            return res.status(403).json({ message: "Forbidden" });
        }
        next()
    }
}