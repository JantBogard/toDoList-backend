/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Favoris } from "./favoris.entity";
import { FavorisService } from "./favoris.service";
import { FavorisController } from "./favoris.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Favoris])],
    controllers: [FavorisController],
    providers: [FavorisService]
})
export class FavorisModule { }