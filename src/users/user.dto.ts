/* eslint-disable prettier/prettier */
import { Tache } from "src/taches/tache.entity";

export class UserDto {
    id: number;
    username: string;
    password: string;
    role: string;
    isActive: boolean;
    taches: Tache[];
}