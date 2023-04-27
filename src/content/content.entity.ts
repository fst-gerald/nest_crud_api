import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('contents')
export class Content {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        unique: true
    })
    title?: string;

    @Column() 
    details?:string;

    @DeleteDateColumn()
    deleted_at?: Date;
}