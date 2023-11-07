/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { TacheModule } from './taches/tache.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'todoDb',
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    TacheModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
