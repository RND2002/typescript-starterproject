import { Post } from "../entity/Post.js";
import { PostRepository } from "../repositories/PostRepository.js";
import { UserRepository } from "../repositories/UserRepository.js";

export class PostService{
    static async createPost(userId: number, title: string, content: string):Promise<Post>{
        const user=await UserRepository.findOne({where:{id:userId}})
        if(!user){
            throw new Error("User not found");
        }
        const post=PostRepository.create({title,content,user})
        return PostRepository.save(post)
    }

    static async getPostByPostId(postId:number):Promise<Post>{
        const post=await PostRepository.findOne({where:{id:postId}})
        if(!post){
            return post || null;
        }
        return post
    }
}