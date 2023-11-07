/* eslint-disable prettier/prettier */
import { Get, Post, Body, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    getAllUser(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.findOneById(id);
    }

    @Post()
    addUser(@Body() user: UserDto): Promise<User> {
        console.log(user);
        return this.userService.add(user);
    }
}