import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "RefreshEntity"})
export class RefreshEntity {
    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    refresh_token: string

    @Column()
    finger_print: any
}