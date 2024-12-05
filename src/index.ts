import 'reflect-metadata'
import express from 'express'
import bodyParser from 'body-parser'
import { AppDataSource } from './config/database.js'

import { UserController } from './controllers/UserController.js'
import { PostController } from './controllers/PostController.js'

const app=express()

app.use(bodyParser.json())
app.post('/user',UserController.createUser)
app.post('/post',PostController.createPost)
app.get('/post/:postId',PostController.getPostByPostId)

const startServer = async () => {
    try {
      await AppDataSource.initialize();
      console.log("Data Source Initialized");
  
      app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
    } catch (error) {
      console.error("Data Source Initialization Error", error);
    }
  };
  
  // Call the function to start the server
  startServer();
  
