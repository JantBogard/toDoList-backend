/* eslint-disable prettier/prettier */
import { Favoris } from "src/favoris/favoris.entity";
import { Tache } from "src/taches/tache.entity";

export class UserDto {
    id: number;
    username: string;
    password: string;
    role: string;
    isActive: boolean;
    favoris: Favoris;
    taches: Tache[];
}