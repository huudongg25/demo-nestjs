import { Injectable } from '@nestjs/common';
import { Users } from './type/user.interface';
import * as path from 'path';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class UsersService {
    constructor() { }

    async getAllUser(): Promise<Users[]> {
        const filePath = path.join('src/modules/users', './data/db.json'); // Xây dựng đường dẫn tương đối
        const users: any = await readFile(filePath, "utf8")
        const result: Users[] = JSON.parse(users)
        return result
    }

    async getDetail(id: number): Promise<Users> {
        const filePath = path.join('src/modules/users', './data/db.json'); // Xây dựng đường dẫn tương đối
        const users: any = await readFile(filePath, "utf8")
        const result: Users[] = JSON.parse(users)
        console.log(result);
        const user = result.find((item: Users) => item.id == id)
        console.log(user);
        return user
    }

    async deleteUser(id: number): Promise<string> {
        const filePath = path.join('src/modules/users', './data/db.json'); // Xây dựng đường dẫn tương đối
        const users: any = await readFile(filePath, "utf8")
        const result: Users[] = JSON.parse(users)
        console.log(result);
        const checkUser = result.find((item: Users) => item.id == id)
        if (checkUser) {
            const user = result.filter((item: Users) => item.id != id)
            await writeFile(filePath, JSON.stringify(user), 'utf8');
            return "successfully"
        } else {
            return "User not found"
        }
    }

    async updateUser(id: number, body: any): Promise<string> {
        const filePath = path.join('src/modules/users', './data/db.json'); // Xây dựng đường dẫn tương đối
        const users: any = await readFile(filePath, "utf8")
        const result: Users[] = JSON.parse(users)
        console.log(result);
        const checkUser = result.find((item: Users) => item.id == id)
        if (checkUser) {
            const user = result.map((item: Users) => {
                if (item.id == id) {
                    return { id, ...body }
                } else {
                    return item
                }
            })
            await writeFile(filePath, JSON.stringify(user), 'utf8');
            return "successfully"
        } else {
            return "User not found"
        }
    }
}
