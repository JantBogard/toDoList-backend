/* eslint-disable prettier/prettier */
import { Favoris } from "src/favoris/favoris.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tache {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    libelle: string;

    @Column()
    description: string;

    @Column({ default: false })
    etat: boolean;

    @Column()
    dateDebut: Date;

    @Column()
    dateFin: Date;

    @ManyToOne(() => User, (user) => user.taches)
    user: User;

    @ManyToOne(() => Favoris, (favoris) => favoris.taches)
    favoris: Favoris;
}