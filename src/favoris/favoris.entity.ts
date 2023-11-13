/* eslint-disable prettier/prettier */
import { Tache } from "src/taches/tache.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Favoris {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Tache, (tache) => tache.favoris)
    taches: Tache[];
}