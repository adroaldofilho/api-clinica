import { IClinica, createClinica, createClinicas } from './clinica.model';
import * as BlueBird from 'bluebird';
const model = require('../../entities');

export class ClinicaService  {
    public idClinica: number;
    public nome: string;
    public telefone: string;
    public endereco: string;
    public picture: Blob;

    constructor(){

    }
    create(Clinica: any){
        return model.Clinica.create(Clinica);
    }

    getAll(): BlueBird<IClinica[]> {
        return model.Clinica.findAll({
            order: ['nome'],
            include: [ {model: model.ProfissionalClinica, 
                        include: [ { model: model.Profissional }]
                    } ]
        })
        .then(createClinicas);
    }

    getById(idClinica: number): BlueBird<IClinica> {
        return model.Clinica.findOne({
            where: {idClinica},
            include: [ {model: model.ProfissionalClinica, 
                        include: [ { model: model.Profissional }]
                    } ]
        })
        .then(createClinica);
    }

    update(idClinica: number, Clinica: any){
        return model.Clinica.update(Clinica, {
            where: {idClinica},
            fields: ['nome', 'endereco', 'telefone', 'picture'],
            hooks: true,
            individualHooks: true
          });
    }
    
    delete(idClinica: number){
        return model.Clinica.destroy({
            where: {idClinica}
          });
    }
}
export default new ClinicaService();
