import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true, nullable: true })
    email: string

    @Column({ nullable: true })
    password: string

    @Column()
    isActive: boolean
}