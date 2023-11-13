/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Favoris } from "./favoris.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FavorisService {
    constructor(
        @InjectRepository(Favoris)
        private favorisRepository: Repository<Favoris>
    ) { }

    add(favoris: Favoris): Promise<Favoris> {
        return this.favorisRepository.save(favoris);
    }

    async update(id: number, favoris: Favoris): Promise<Favoris> {
        await this.favorisRepository.update(id, favoris);
        return this.findOneById(id);
    }

    findOneById(id: number): Promise<Favoris> {
        return this.favorisRepository.findOneBy({ id });
    }

    findAll(): Promise<Favoris[]> {
        return this.favorisRepository.find();
    }
}