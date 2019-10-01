import { IProfissionalEspecialidade, createProfissionalEspecialidade, createProfissionalEspecialidades } 
                    from './profissionalespecialidade.model';
import * as BlueBird from 'bluebird';
import { IProfissional } from '../profissional/profissional.model';
import { IEspecialidade } from '../especialidade/especialidade.model';
const model = require('../../entities');

export class ProfissionalEspecialidadeService  {
    public idProfissionalEspecialidade: number;
    public idProfissional?: number;
    public Profissional?: IProfissional;
    public idEspecialidade?: number;
    public Especialidade?: IEspecialidade;

    constructor(){

    }
    create(profissionalEspecialidade: any){
        return model.ProfissionalEspecialidade.create(profissionalEspecialidade);
    }

    getAll(): BlueBird<IProfissionalEspecialidade[]> {
        return model.ProfissionalEspecialidade.findAll({
            order: ['idProfissional'],
            include: [ { model: model.Profissional },
                        { model: model.Especialidade } ]
        })
        .then(createProfissionalEspecialidades);
    }

    getById(idProfissionalEspecialidade: number): BlueBird<IProfissionalEspecialidade> {
        return model.ProfissionalEspecialidade.findOne({
            where: {idProfissionalEspecialidade},
            include: [ { model: model.Profissional },
                        { model: model.Especialidade} ]
        })
        .then(createProfissionalEspecialidade);
    }

    // update(idProfissionalEspecialidade: number, profissionalEspecialidade: any){
    //     return model.Profissional.update(Profissional, {
    //         where: {idProfissional},
    //         fields: ['picture'],
    //         hooks: true,
    //         individualHooks: true
    //       });
    // }
    
    delete(idProfissionalEspecialidade: number){
        return model.ProfissionalEspecialidade.destroy({
            where: {idProfissionalEspecialidade}
          });
    }
}
export default new ProfissionalEspecialidadeService();
