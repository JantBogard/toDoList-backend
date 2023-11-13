/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Tache } from './tache.entity';
import { Repository } from 'typeorm';

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
}