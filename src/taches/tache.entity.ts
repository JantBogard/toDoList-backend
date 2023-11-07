/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}