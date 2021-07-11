import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions, Connection } from 'typeorm'
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';
import { LoginModule } from './login/login.module';
import { LoggerModule } from './logger/logger.module';
import { LoggingInterceptor } from './logger/logger.interceptor';
import { HttpExceptionFilter } from './logger/http-exception.filter';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import checkUserAdminExist from './helpers/check.user';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }), UsersModule, BoardsModule, TasksModule, LoginModule, LoggerModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ]
})

export class AppModule {
  constructor(private connection: Connection) {}
}


