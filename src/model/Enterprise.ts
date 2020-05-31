import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("EFECTO")
export default class Enterprise {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public cuit: string;

    @Column()
    public businessName: string
}