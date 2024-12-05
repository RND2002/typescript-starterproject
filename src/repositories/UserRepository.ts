import { AppDataSource } from "../config/database.js";
import { User } from "../entity/User.js";

export const UserRepository=AppDataSource.getRepository(User)