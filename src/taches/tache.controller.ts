/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { TacheService } from "./tache.service";
import { TacheDto } from "./tache.dto";
import { Tache } from "./tache.entity";
import { CountTache } from "./countTache";

@Controller('tache')
export class TacheController {
    constructor(private tacheService: TacheService) { }

    @Get()
    findAll(): Promise<TacheDto[]> {
        return this.tacheService.findAll();
    }

    @Get('/favoris')
    findFavoris(): Promise<Tache[]> {
        return this.tacheService.findFavoris();
    }

    @Get('/over')
    findTacheOver(): Promise<Tache[]> {
        return this.tacheService.findTacheOver();
    }

    @Get('/count')
    count(): Promise<CountTache> {
        return this.tacheService.count();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<TacheDto> {
        return this.tacheService.findOneById(id);
    }

    @Post()
    add(@Body() tache: TacheDto): Promise<TacheDto> {
        return this.tacheService.add(tache);
    }

    @Put(':id')
    updateTache(@Param('id') id: number, @Body() tache: TacheDto): Promise<TacheDto> {
        return this.tacheService.update(id, tache);
    }
}