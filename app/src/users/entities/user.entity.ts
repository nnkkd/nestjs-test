import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar',{length:20})
    name:string;

    @Column('varchar',{length:200})
    password:string
}
