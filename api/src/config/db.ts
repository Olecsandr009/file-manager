import { DataSource } from "typeorm"
import { UserEntity } from "../entity/user.entity"

export const pool = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'file-manager',
    entities: [UserEntity],
    logging: true,
    synchronize: true
})