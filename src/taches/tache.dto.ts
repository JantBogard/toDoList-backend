/* eslint-disable prettier/prettier */
import { User } from "src/users/user.entity";

export class TacheDto {
    id: number;
    libelle: string;
    description: string;
    etat: boolean;
    isFavoris: boolean;
    dateDebut: Date;
    dateFin: Date;
    user: User;
}