/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import entities from './utils/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.development' }), 
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MY_SQL_HOST,
      port: process.env.MY_SQL_PORT ? parseInt(process.env.MY_SQL_PORT, 10) : 3306,
      username: process.env.MY_SQL_USERNAME,
      password: process.env.MY_SQL_PASSWORD,
      database: process.env.MY_SQL_NAME,
      synchronize: true,
      entities,
    }),
      ],
  controllers: [],
  providers: [],
})
export class AppModule {}
