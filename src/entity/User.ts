import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Post } from "./Post.js";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({unique:true})
    email:string

    // @OneToMany(()=>Post,post=>post.user)
    // @JoinColumn({ name: 'user_id' })
    @OneToMany(() => Post, (post) => post.user)
    @JoinColumn({ name: 'user_id' })
    posts: Relation<Post[]>;



}