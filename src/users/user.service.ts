/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    add(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    // update(user: User, id: number): Promise<User> {
    //     return this.userRepository.update()
    // }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOneById(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    findByIsActive(isActive: boolean): Promise<User[]> {
        return this.userRepository.findBy({ isActive });
    }
}