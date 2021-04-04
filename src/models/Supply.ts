import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("supply")
class Supply {
    @PrimaryColumn() 
    readonly id: string;
    @Column()
    liters: number;
    @Column()
    plate: string;
    @Column()
    driver: string;
    @Column()
    value: number;
    @Column()
    distance:number;
    @Column()
    type:string;
    @Column()
    name:string;
    @Column()
    price:number;

    constructor() {
        if(!this.id) { // caso esteja criando um usuário
            this.id = uuid(); // gera um uuid
        }
    }
}
export { Supply };