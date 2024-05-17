import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "UserEntity"})
export class UserEntity {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    email: string

    @Column()
    login: string

    @Column()
    password: string
}