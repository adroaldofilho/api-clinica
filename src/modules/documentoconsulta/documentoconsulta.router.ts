import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import DocumentoConsultaService from './documentoconsulta.service';
import { IDocumentoConsulta } from './documentoconsulta.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class DocumentoConsultaRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('documentoconsulta');
    }

    protected MODULES_ENDPOINT_MAP: ModuleEndpointMap = { 
        [this.moduleName]: {
            get: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/all`,
                    callback: this.index,
                    isProtected: true
                },
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idDocumentoConsulta`,
                    callback: this.findOne,
                    isProtected: true
                }
            ],
            post: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/create`,
                    callback: this.create,
                    isProtected: true
                }
            ],
            put: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idDocumentoConsulta/update`,
                    callback: this.update,
                    isProtected: true
                }
            ],
            delete: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idDocumentoConsulta/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const documentoConsulta: Array<IDocumentoConsulta> = await DocumentoConsultaService.getAll(); 
            return ResponseHandlers.onSuccess(res, documentoConsulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todos os profissionais', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const documentoConsultaId = parseInt(req.params.idDocumentoConsulta);
            const documentoConsulta: IDocumentoConsulta = await DocumentoConsultaService.getById(documentoConsultaId);
            return ResponseHandlers.onSuccess(res, documentoConsulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar o DocumentoConsulta', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const documentoConsulta: IDocumentoConsulta = await DocumentoConsultaService.create(req.body);
            return ResponseHandlers.onSuccess(res, documentoConsulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir DocumentoConsulta', error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const documentoConsultaId = parseInt(req.params.idDocumentoConsulta);
            const props = req.body;
            const DocumentoConsulta: IDocumentoConsulta = await DocumentoConsultaService.update(documentoConsultaId, props);
            return ResponseHandlers.onSuccess(res, DocumentoConsulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao atualizar DocumentoConsulta', error);
        }
    }

    async destroy(req: Request, res: Response){
        try {
            const documentoConsultaId = parseInt(req.params.idDocumentoConsulta);
            const documentoConsulta: IDocumentoConsulta = await DocumentoConsultaService.delete(documentoConsultaId); 
            return ResponseHandlers.onSuccess(res, documentoConsulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir o DocumentoConsulta', error);
        }
    }

}
