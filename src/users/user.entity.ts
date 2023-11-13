/* eslint-disable prettier/prettier */
import { Favoris } from 'src/favoris/favoris.entity';
import { Tache } from 'src/taches/tache.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';

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

    @OneToOne(() => Favoris)
    @JoinColumn()
    favoris: Favoris;

    @OneToMany(() => Tache, (tache) => tache.user)
    taches: Tache[];

}