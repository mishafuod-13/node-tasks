import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import { LoggingInterceptor } from './logger.interceptor';


@Module({
  exports: [ HttpExceptionFilter],
  providers: [LoggingInterceptor, HttpExceptionFilter]
})
export class LoggerModule {}
