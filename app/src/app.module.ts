import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TstService } from './tst/tst.service';
import { TstModule } from './tst/tst.module';
import { Tst } from './tst/tst.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'tst',
      entities: [Tst],
      synchronize: true,
    }),
    TstModule,
  ],
  controllers: [AppController],
  providers: [AppService, TstService],
})
export class AppModule { }
