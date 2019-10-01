import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import ConsultaService from './consulta.service';
import { IConsulta } from './consulta.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class ConsultaRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('consulta');
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idConsulta`,
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idConsulta/update`,
                    callback: this.update,
                    isProtected: true
                }
            ],
            delete: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idConsulta/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const consulta: Array<IConsulta> = await ConsultaService.getAll(); 
            return ResponseHandlers.onSuccess(res, consulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todas as consultas', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const consultaId = parseInt(req.params.idConsulta);
            const consulta: IConsulta = await ConsultaService.getById(consultaId);
            return ResponseHandlers.onSuccess(res, consulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar a consulta', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const consulta: IConsulta = await ConsultaService.create(req.body);
            return ResponseHandlers.onSuccess(res, consulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir a consulta', error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const consultaId = parseInt(req.params.idConsulta);
            const props = req.body;
            const consulta: IConsulta = await ConsultaService.update(consultaId, props);
            return ResponseHandlers.onSuccess(res, consulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao atualizar a caonsulta', error);
        }
    }

    async destroy(req: Request, res: Response){
        try {
            const consultaId = parseInt(req.params.idConsulta);
            const consulta: IConsulta = 
            await ConsultaService.delete(consultaId); 
            return ResponseHandlers.onSuccess(res, consulta);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir a consulta', error);
        }
    }

}
