import { pool } from "config/db";
import { UserEntity } from "entity/user.entity";

// Get users
export async function getUsers(): Promise<UserEntity[]> | undefined {
    const users = await pool.getRepository(UserEntity).find()

    if(!users.length) return undefined

    return users
}

// Get user by email
export async function getUserByEmail(email: string): Promise<UserEntity> | undefined {
    const user = await pool.getRepository(UserEntity).findOneBy({email: email})
    
    if(!user) return undefined

    return user
}

// Get user by id
export async function getUserById(id: number): Promise<UserEntity> | undefined {
    const user = await pool.getRepository(UserEntity).findOneBy({_id: id})

    if(!user) return undefined

    return user
}

// Set user
export async function setUser(data: {email: string, login: string, password: string}): Promise<UserEntity> {
    const user = await pool.getRepository(UserEntity).create(data)
    const results = await pool.getRepository(UserEntity).save(user)
 
    return results
}

export const AuthService = {
    getUsers,
    getUserByEmail,
    getUserById,
    setUser
}