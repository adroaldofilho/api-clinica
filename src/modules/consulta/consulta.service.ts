import { IConsulta, createConsulta, createConsultas } from '../consulta/consulta.model';
import * as BlueBird from 'bluebird';
import { IProfissionalClinica } from '../profissionalclinica/profissionalclinica.model';
import { IUsuario } from '../usuario/usuario.model';
import { IPlano } from '../plano/plano.model';
const model = require('../../entities');

export class ConsultaService  {
    public idConsulta: number;
    public idProfissionalClinica?: number;
    public ProfissionalClinica?: IProfissionalClinica;
    public idUsuario?: number;
    public Usuario?: IUsuario;
    public dataHoraConsulta: Date;
    public statusConsulta: number;
    public idPlano?: number;
    public Plano?: IPlano;

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
                       { model: model.Usuario },
                       { model: model.Plano }
                     ]
        })
        .then(createConsultas);
    }

    getByProfissionalClinica(idProfissionalClinica): BlueBird<IConsulta[]> {
        return model.Consulta.findAll({
            where: {idProfissionalClinica},
            order: ['idUsuario'],
            include: [ { model: model.ProfissionalClinica,
                            include: [ { model: model.Clinica },
                                        { model: model.Profissional ,
                                            include: [ { model: model.Usuario } ]
                                        } 
                                    ] 
                       },
                       { model: model.Usuario },
                       { model: model.Plano }
                     ]
        })
        .then(createConsultas);
    }

    getByUsuario(idUsuario): BlueBird<IConsulta[]> {
        return model.Consulta.findAll({
            where: {idUsuario},
            order: [['dataHoraConsulta', 'DESC']],
            include: [ { model: model.ProfissionalClinica,
                            include: [ { model: model.Clinica },
                                        { model: model.Profissional ,
                                            include: [ { model: model.Usuario } ]
                                        } 
                                    ] 
                       },
                       { model: model.Usuario },
                       { model: model.Plano },
                       { model: model.DocumentoConsulta }
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
                        { model: model.Usuario,
                            include: [ { model:  model.Consulta ,
                                            order: [['dataHoraConsulta', 'DESC']],
                                            include: [ { model: model.DocumentoConsulta } ] } ] },
                        { model: model.Plano },
                        { model: model.DocumentoConsulta }
              ]
        })
        .then(createConsulta);
    }

    update(idConsulta: number, consulta: any){
        return model.Consulta.update(consulta, {
            where: {idConsulta},
            fields: ['dataHoraConsulta', 'idProfissionalClinica', 'statusConsulta', 'idPlano'],
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
