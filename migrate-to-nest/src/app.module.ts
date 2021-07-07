import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {getConnectionOptions, Connection} from 'typeorm'
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }), UsersModule, BoardsModule, TasksModule, LoginModule],
})

export class AppModule {
  constructor(private connection: Connection) {}
}


