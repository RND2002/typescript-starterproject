
import { Request, Response } from "express";
import { PostService } from "../services/PostService.js";

export class PostController{
    static async createPost(req:Request,res:Response){
        const {userId,title,content}=req.body

        try{
            const post=await PostService.createPost(userId, title, content);
            res.status(201).json(post)
        }catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static async getPostByPostId(req: Request, res: Response) {
        const { postId } = req.params;

        try {
            // Convert postId to a number
            const id = parseInt(postId, 10);

            // If the conversion fails, respond with a client-side error
            if (isNaN(id)) {
                return res.status(400).json({ error: "Invalid post ID" });
            }

            // Fetch the post
            const post = await PostService.getPostByPostId(id);

            // If no post is found, respond with a 404 error
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }

            return res.status(200).json(post);
        } catch (error) {
            // Log the error and return a server-side error response
            console.error("Error fetching post:", error);
            return res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}