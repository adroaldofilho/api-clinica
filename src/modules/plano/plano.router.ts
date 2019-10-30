import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import PlanoService from '../plano/plano.service';
import { IPlano } from './plano.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class PlanoRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('plano');
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idPlano`,
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idPlano/update`,
                    callback: this.update,
                    isProtected: true
                }
            ],
            delete: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idPlano/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const plano: Array<IPlano> = await PlanoService.getAll(); 
            return ResponseHandlers.onSuccess(res, plano);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todas as Planos', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const planoId = parseInt(req.params.idPlano);
            const plano: IPlano = await PlanoService.getById(planoId);
            return ResponseHandlers.onSuccess(res, plano);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar a Plano', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const plano: IPlano = await PlanoService.create(req.body);
            return ResponseHandlers.onSuccess(res, plano);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir Plano', error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const planoId = parseInt(req.params.idPlano);
            const props = req.body;
            const plano: IPlano = await PlanoService.update(planoId, props);
            return ResponseHandlers.onSuccess(res, plano);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao atualizar Plano', error);
        }
    }

    async destroy(req: Request, res: Response){
        try {
            const planoId = parseInt(req.params.idPlano);
            const plano: IPlano = await PlanoService.delete(planoId); 
            return ResponseHandlers.onSuccess(res, plano);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir a Plano', error);
        }
    }

}
