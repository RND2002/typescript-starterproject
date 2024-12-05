import { AppDataSource } from "../config/database.js";
import { Post } from "../entity/Post.js";

export const PostRepository=AppDataSource.getRepository(Post)