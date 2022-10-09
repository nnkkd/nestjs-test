import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TstController } from './tst.controller';
import { Tst } from './tst.entity';
import { TstService } from './tst.service';

@Module({
  imports:[TypeOrmModule.forFeature([Tst])],
  controllers:[TstController],
  providers:[TstService],
})
export class TstModule {}
