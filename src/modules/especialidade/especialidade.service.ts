import { IEspecialidade, createEspecialidade, createEspecialidades, createEspecialidadeById, createEspecialidadeByEmail } 
                    from './especialidade.model';
import * as BlueBird from 'bluebird';
const model = require('../../entities');

export class EspecialidadeService  {
    public idEspecialidade: number;
    public nome: string

    constructor(){

    }
    create(especialidade: any){
        return model.Especialidade.create(especialidade);
    }

    getAll(): BlueBird<IEspecialidade[]> {
        return model.Especialidade.findAll({
            order: ['nome']
        })
        .then(createEspecialidades);
    }

    getById(idEspecialidade: number): BlueBird<IEspecialidade> {
        return model.Especialidade.findOne({
            where: {idEspecialidade}
        })
        .then(createEspecialidadeById);
    }

    update(idEspecialidade: number, especialidade: any){
        return model.Especialidade.update(especialidade, {
            where: {idEspecialidade},
            fields: ['nome'],
            hooks: true,
            individualHooks: true
          });
    }
    
    delete(idEspecialidade: number){
        return model.Especialidade.destroy({
            where: {idEspecialidade}
          });
    }
}
export default new EspecialidadeService();
