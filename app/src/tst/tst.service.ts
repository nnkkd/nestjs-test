import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { TstDto } from './tst.dto';
import { Tst } from './tst.entity';

@Injectable()
export class TstService {
    constructor(
        @InjectRepository(Tst)
        private readonly tstRepository: Repository<Tst>
    ) { }

    async create(Tst: TstDto): Promise<InsertResult> {
        return await this.tstRepository.insert(Tst);
    }

    async find(id: number): Promise<Tst> | null {
        return await this.tstRepository.findOne({ where: { id: id } });
    }
}
