/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TacheService } from "./tache.service";
import { TacheDto } from "./tache.dto";

@Controller('tache')
export class TacheController {
    constructor(private tacheService: TacheService) { }

    @Get()
    findAll(): Promise<TacheDto[]> {
        return this.tacheService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<TacheDto> {
        return this.tacheService.findOneById(id);
    }

    @Post()
    add(@Body() tache: TacheDto): Promise<TacheDto> {
        return this.tacheService.add(tache);
    }
}