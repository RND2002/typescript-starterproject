import jwt from "jsonwebtoken"

const JWT_SECRET="ABCDEFGIJKL1232434"

export const generateToken=(user:{id:number,role:string})=>{
    return jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
  };