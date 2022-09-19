import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Columns } from './entities/column.entity';
import { BoardSubscriber } from './subscribers/board.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Columns])],
  controllers: [BoardsController],
  providers: [BoardsService, BoardSubscriber],
})
export class BoardsModule {}
