import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tst {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  content: string;
}