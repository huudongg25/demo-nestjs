import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './modules/users/entities/users.entity';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({
    type:'mysql',
    port:3306,
    host:'localhost',
    username:'root',
    password:'Liverpool98',
    database:'demonestjs',
    entities:[Users],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
