import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    profile: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;
}
