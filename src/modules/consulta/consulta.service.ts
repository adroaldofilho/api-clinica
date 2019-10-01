import { IConsulta, createConsulta, createConsultas } from '../consulta/consulta.model';
import * as BlueBird from 'bluebird';
import { IProfissionalClinica } from '../profissionalclinica/profissionalclinica.model';
import { IUsuario } from '../usuario/usuario.model';
const model = require('../../entities');

export class ConsultaService  {
    public idConsulta: number;
    public idProfissionalClinica?: number;
    public ProfissionalClinica?: IProfissionalClinica;
    public idUsuario?: number;
    public Usuario?: IUsuario;
    public dataHoraConsulta: Date;
    public statusConsulta: number;

    constructor(){

    }
    create(consulta: any){
        return model.Consulta.create(consulta);
    }

    getAll(): BlueBird<IConsulta[]> {
        return model.Consulta.findAll({
            order: ['idUsuario'],
            include: [ { model: model.ProfissionalClinica,
                            include: [ { model: model.Clinica },
                                        { model: model.Profissional ,
                                            include: [ { model: model.Usuario } ]
                                        } 
                                    ] 
                       },
                       { model: model.Usuario }
                     ]
        })
        .then(createConsultas);
    }

    getById(idConsulta: number): BlueBird<IConsulta> {
        return model.Consulta.findOne({
            where: {idConsulta},
            include: [ { model: model.ProfissionalClinica,
                            include: [ { model: model.Clinica },
                                        { model: model.Profissional ,
                                            include: [ { model: model.Usuario } ]
                                        } 
                                    ] 
                        },
                        { model: model.Usuario }
              ]
        })
        .then(createConsulta);
    }

    update(idConsulta: number, consulta: any){
        return model.Consulta.update(consulta, {
            where: {idConsulta},
            fields: ['dataHoraConsulta', 'idProfissionalClinica', 'statusConsulta'],
            hooks: true,
            individualHooks: true
          });
    }
    
    delete(idConsulta: number){
        return model.Consulta.destroy({
            where: {idConsulta}
          });
    }
}
export default new ConsultaService();
