/* eslint-disable prettier/prettier */
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

    @Column({ default: false })
    isFavoris: boolean;

    @Column()
    dateDebut: Date;

    @Column()
    dateFin: Date;

    @ManyToOne(() => User, (user) => user.taches)
    user: User;
}