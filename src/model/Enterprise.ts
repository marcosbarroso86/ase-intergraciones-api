import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("EFECTO")
export default class Enterprise {

    @PrimaryGeneratedColumn({name : 'EfeNroAse'})
    public id: number;

    @Column({name : 'EfeCuit'})
    public cuit: string;

    @Column({name : 'EfeRazSoc'})
    public businessName: string
}