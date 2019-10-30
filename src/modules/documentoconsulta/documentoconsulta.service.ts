import { IDocumentoConsulta, createDocumentoConsulta, createDocumentoConsultas } 
                    from './documentoconsulta.model';
import * as BlueBird from 'bluebird';
import { IConsulta } from '../consulta/consulta.model';
const model = require('../../entities');

export class DocumentoConsultaService  {
    public idDocumentoConsulta: number;
    public idConsulta?: number;
    public textoDocumentoConsulta: string;
    public Consulta?: IConsulta;

    constructor(){

    }
    create(DocumentoConsulta: any){
        return model.DocumentoConsulta.create(DocumentoConsulta);
    }

    getAll(): BlueBird<IDocumentoConsulta[]> {
        return model.DocumentoConsulta.findAll({
            order: ['idDocumentoConsulta'],
            include: [ { model: model.Consulta } ]
            
        })
        .then(createDocumentoConsultas);
    }

    getById(idDocumentoConsulta: number): BlueBird<IDocumentoConsulta> {
        return model.DocumentoConsulta.findOne({
            where: {idDocumentoConsulta},
            include: [ { model: model.Consulta } ]
        })
        .then(createDocumentoConsulta);
    }

    update(idDocumentoConsulta: number, DocumentoConsulta: any){
        return model.DocumentoConsulta.update(DocumentoConsulta, {
            where: {idDocumentoConsulta},
            fields: ['textoDocumentoConsulta'],
            hooks: true,
            individualHooks: true
          });
    }
    
    delete(idDocumentoConsulta: number){
        return model.Profissional.destroy({
            where: {idDocumentoConsulta}
          });
    }
}
export default new DocumentoConsultaService();
