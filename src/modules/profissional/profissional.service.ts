import { IProfissional, createProfissional, createProfissionals } 
                    from './profissional.model';
import * as BlueBird from 'bluebird';
import { IUsuario } from '../usuario/usuario.model';
const model = require('../../entities');

export class ProfissionalService  {
    public idProfissional: number;
    public idUsuario?: number;
    public picture: Blob;
    public Usuario?: IUsuario;

    constructor(){

    }
    create(Profissional: any){
        return model.Profissional.create(Profissional);
    }

    getAll(): BlueBird<IProfissional[]> {
        return model.Profissional.findAll({
            order: ['idUsuario'],
            include: [ { model: model.Usuario } ,
                { model: model.ProfissionalEspecialidade ,
                    include: [{ model: model.Especialidade }] 
                }
            ]
            
        })
        .then(createProfissionals);
    }

    getById(idProfissional: number): BlueBird<IProfissional> {
        return model.Profissional.findOne({
            where: {idProfissional},
            include: [ { model: model.Usuario } ,
                        { model: model.ProfissionalEspecialidade ,
                            include: [{ model: model.Especialidade }] 
                        }
                    ]
        })
        .then(createProfissional);
    }

    update(idProfissional: number, Profissional: any){
        return model.Profissional.update(Profissional, {
            where: {idProfissional},
            fields: ['picture'],
            hooks: true,
            individualHooks: true
          });
    }
    
    delete(idProfissional: number){
        return model.Profissional.destroy({
            where: {idProfissional}
          });
    }
}
export default new ProfissionalService();
