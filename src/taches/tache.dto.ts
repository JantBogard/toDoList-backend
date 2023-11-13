/* eslint-disable prettier/prettier */
import { Favoris } from "src/favoris/favoris.entity";
import { User } from "src/users/user.entity";

export class TacheDto {
    id: number;
    libelle: string;
    description: string;
    etat: boolean;
    dateDebut: Date;
    dateFin: Date;
    user: User;
    favoris: Favoris;
}