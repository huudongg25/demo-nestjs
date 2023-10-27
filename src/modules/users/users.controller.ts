import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, UseGuards, UseInterceptors } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { Users } from './type/user.interface';
import * as path from 'path';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';
import { AuthGuard } from 'src/guards/test.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';


@Controller('users')
export class UsersController {
    constructor(public userService: UsersService) { }

    @Get('/detail/:id')
    @UseGuards(AuthGuard)
    async getUserDetail(@Param() param): Promise<any> {
        return await this.userService.getDetail(param.id)
    }

    @Delete('/delete/:id')
    async deleteUser(@Param() param): Promise<string> {
        return await this.userService.deleteUser(param.id)
    }

    @Patch('/update/:id')
    async updateUser(@Param() param, @Body() body: UserDTO): Promise<string> {
        return await this.userService.updateUser(param.id, body)
    }

    @Get('/')
    @UseInterceptors(LoggingInterceptor)
    async getUser(): Promise<Users[]> {
        console.log("vào rồi");
        return await this.userService.getAllUser()
    }
}
