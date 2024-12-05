import { DataSource } from "typeorm";
import { User } from "../entity/User.js";
import { Post } from "../entity/Post.js";

export const AppDataSource=new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"root",
    database:"typescript",
    synchronize:true,
    logging:true,
    entities:[Post,User]

})