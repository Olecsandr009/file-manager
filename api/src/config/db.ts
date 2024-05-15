import { DataSource } from "typeorm"

export const pool = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'file-manager',
    entities: [],
    logging: true,
    synchronize: true
})