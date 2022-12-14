import { Body, Controller, Get, Post } from '@nestjs/common';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { TstService } from './tst.service';
import { Tst } from './tst.entity';
import { TstDTO } from './tst.dto';
import { Param } from '@nestjs/common/decorators';

@Controller('tst')
export class TstController {
    constructor(private readonly tstService: TstService) { }
    @Post()
    async createTstData(@Body() tstDTO: TstDTO) :Promise<InsertResult> {
        return await this.tstService.create(tstDTO);
    }

    @Get(':id')
    async getContent(@Param('id') id:string): Promise<Tst>{
        return await this.tstService.find(Number(id));
    } 
}
