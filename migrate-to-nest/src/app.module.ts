import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {getConnectionOptions} from 'typeorm'
const config = require('../ormconfig')

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }), UsersModule],
})

export class AppModule {
  
}

