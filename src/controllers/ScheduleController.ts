import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Supply } from '../models/Supply';
import supplyView from '../views/supply_view';

export default {
    async index(request:Request, response:Response){
        const supplyRepository = getRepository(Supply);
        const supply = await supplyRepository.find();
        return response.json(supplyView.renderMany(supply));
    },

    async create(request: Request, response: Response) {
        const { liters, plate, value, driver, distance, type, name, price } = request.body;

        const supplyRepository = getRepository(Supply);
				
        const data = { liters, plate, value, driver, distance, type, name, price };

        const supply = supplyRepository.create(data);

        // salva o objeto no banco de dados
        await supplyRepository.save(supply);
        return response.json(supply);
        }
    }