import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column() 
    email?: string;

    @Column() 
    email_verified_at?: Date;

    @Column()
    @Exclude()
    password: string;

    @Column() 
    remember_token?: string;
}