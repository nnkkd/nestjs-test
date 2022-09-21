import { Module } from '@nestjs/common';
import { TstController } from './tst.controller';

@Module({
  controllers: [TstController]
})
export class TstModule {}
