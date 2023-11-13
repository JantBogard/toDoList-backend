/* eslint-disable prettier/prettier */
import { Get, Post, Put, Body, Param } from '@nestjs/common';
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
        return this.userService.add(user);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() user: UserDto): Promise<User> {
        return this.userService.update(user, id);
    }
}