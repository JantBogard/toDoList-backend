/* eslint-disable prettier/prettier */
import { Tache } from 'src/taches/tache.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Tache, (tache) => tache.user)
    taches: Tache[];

}