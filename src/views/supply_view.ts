import { Supply } from '../models/Supply';

export default{
    render(schedule:Supply){
        return {
            id: schedule.id,
            liters: schedule.liters,
            plate: schedule.plate,
            value: schedule.value,
            driver: schedule.driver,
            distance: schedule.distance,
            type: schedule.type,
            price: schedule.price,
            name: schedule.name,
        }
    },
    renderMany(schedule:Supply[]){
        return schedule.map(schedule=>this.render(schedule))
;    }
};
