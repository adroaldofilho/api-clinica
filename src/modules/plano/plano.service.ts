import { IPlano, createPlano, createPlanos } from './plano.model';
import * as BlueBird from 'bluebird';
const model = require('../../entities');

export class PlanoService  {
    public idPlano: number;
    public nome: string;
    public telefone: string;
    public url: string;
    public email: string;

    constructor(){

    }
    create(Plano: any){
        return model.Plano.create(Plano);
    }

    getAll(): BlueBird<IPlano[]> {
        return model.Plano.findAll({
            order: ['nome']
        })
        .then(createPlanos);
    }

    getById(idPlano: number): BlueBird<IPlano> {
        return model.Plano.findOne({
            where: {idPlano}
        })
        .then(createPlano);
    }

    update(idPlano: number, Plano: any){
        return model.Plano.update(Plano, {
            where: {idPlano},
            fields: ['nome', 'telefone', 'url', 'email'],
            hooks: true,
            individualHooks: true
          });
    }
    
    delete(idPlano: number){
        return model.Plano.destroy({
            where: {idPlano}
          });
    }
}
export default new PlanoService();
