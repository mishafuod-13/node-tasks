import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import {TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Columns } from './entities/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Columns])],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
