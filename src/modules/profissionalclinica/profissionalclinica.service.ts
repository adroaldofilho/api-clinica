import { IProfissionalClinica, createProfissionalClinica, createProfissionalClinicas } 
                    from './profissionalclinica.model';
import * as BlueBird from 'bluebird';
import { IProfissional } from '../profissional/profissional.model';
import { IClinica } from '../clinica/clinica.model';
const model = require('../../entities');

export class ProfissionalClinicaService  {
    public idProfissionalClinica: number;
    public idProfissional?: number;
    public Profissional?: IProfissional;
    public idClinica?: number;
    public Clinica?: IClinica;

    constructor(){

    }
    create(profissionalClinica: any){
        return model.ProfissionalClinica.create(profissionalClinica);
    }

    getAll(): BlueBird<IProfissionalClinica[]> {
        return model.ProfissionalClinica.findAll({
            order: ['idClinica'],
            include: [ { model: model.Clinica },
                { model: model.Profissional, 
                    include:[ { model: model.Usuario },
                              { model: model.ProfissionalEspecialidade ,
                                 include: [ { model: model.Especialidade } ] 
                              } 
                            ] 
                } 
            ]
        })
        .then(createProfissionalClinicas);
    }

    getById(idProfissionalClinica: number): BlueBird<IProfissionalClinica> {
        return model.ProfissionalClinica.findOne({
            where: {idProfissionalClinica},
            include: [ { model: model.Clinica },
                        { model: model.Profissional} ]
        })
        .then(createProfissionalClinica);
    }

    // update(idProfissionalClinica: number, profissionalClinica: any){
    //     return model.Profissional.update(Profissional, {
    //         where: {idProfissional},
    //         fields: ['picture'],
    //         hooks: true,
    //         individualHooks: true
    //       });
    // }
    
    delete(idProfissionalClinica: number){
        return model.ProfissionalClinica.destroy({
            where: {idProfissionalClinica}
          });
    }
    
    deleteByProfissionalClinica(idProfissional: number, idClinica: number) {
        return model.ProfissionalClinica.destroy({
            where: {idProfissional,
                    idClinica }
          });
    }
    
    getByClinica(idClinica: number): BlueBird<IProfissionalClinica[]> {
        return model.ProfissionalClinica.findAll({
            where: {idClinica},
            include: [ { model: model.Clinica },
                        { model: model.Profissional, 
                            include:[ { model: model.Usuario },
                                      { model: model.ProfissionalEspecialidade ,
                                         include: [ { model: model.Especialidade } ] 
                                      } 
                                    ] 
                        } 
                    ]
        })
        .then(createProfissionalClinicas);
    }
}
export default new ProfissionalClinicaService();
