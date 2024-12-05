import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { User } from "./User.js";

@Entity()
export class Post{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    content:string

    @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
    user: Relation<User>;
}