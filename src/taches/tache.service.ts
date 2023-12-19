/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Tache } from './tache.entity';
import { Repository } from 'typeorm';
import { CountTache } from './countTache';

@Injectable()
export class TacheService {
    constructor(
        @InjectRepository(Tache)
        private tacheRepository: Repository<Tache>
    ) { }

    add(tache: Tache): Promise<Tache> {
        return this.tacheRepository.save(tache);
    }

    async update(id: number, tache: Tache): Promise<Tache> {
        await this.tacheRepository.update(id, tache);
        return this.findOneById(id);
    }

    findAll(): Promise<Tache[]> {
        return this.tacheRepository.find();
    }

    findOneById(id: number): Promise<Tache> {
        return this.tacheRepository.findOneBy({ id });
    }

    findFavoris(isFavoris: boolean = true): Promise<Tache[]> {
        return this.tacheRepository.findBy({ isFavoris })
    }

    findTacheOver(etat: boolean = true): Promise<Tache[]> {
        return this.tacheRepository.findBy({ etat });
    }

    async count(): Promise<CountTache> {
        const taches = await this.findAll();
        const count: CountTache = new CountTache();

        taches.forEach(tache => {
            count.countTache++;
            if (tache.isFavoris) {
                count.countFavoris++;
            }
            if (tache.etat) {
                count.countTacheOver++;
            }
        })

        return count;
    }
}