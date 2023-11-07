/* eslint-disable prettier/prettier */
import { Tache } from './tache.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TacheService } from './tache.service';
import { TacheController } from './tache.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Tache])],
    controllers: [TacheController],
    providers: [TacheService]
})
export class TacheModule { }