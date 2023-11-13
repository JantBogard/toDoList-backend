/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { FavorisService } from "./favoris.service";
import { FavorisDto } from "./favoris.dto";

@Controller('favoris')
export class FavorisController {
    constructor(private favorisService: FavorisService) { }

    @Get()
    getAll(): Promise<FavorisDto[]> {
        return this.favorisService.findAll();
    }

    @Get(':id')
    getOneById(@Param('id') id: number): Promise<FavorisDto> {
        return this.favorisService.findOneById(id);
    }

    @Post()
    add(@Body() favoris: FavorisDto): Promise<FavorisDto> {
        return this.favorisService.add(favoris);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() favoris: FavorisDto): Promise<FavorisDto> {
        return this.favorisService.update(id, favoris);
    }
}