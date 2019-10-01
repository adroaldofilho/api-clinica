import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import EspecialidadeService from '../especialidade/especialidade.service';
import { IEspecialidade } from './especialidade.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class EspecialidadeRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('especialidade');
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idEspecialidade`,
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idEspecialidade/update`,
                    callback: this.update,
                    isProtected: true
                }
            ],
            delete: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idEspecialidade/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const especialidade: Array<IEspecialidade> = await EspecialidadeService.getAll(); 
            return ResponseHandlers.onSuccess(res, especialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todos as especialidades', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const especialidadeId = parseInt(req.params.idEspecialidade);
            const especialidade: IEspecialidade = await EspecialidadeService.getById(especialidadeId);
            return ResponseHandlers.onSuccess(res, especialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar a especialidade', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const especialidade: IEspecialidade = await EspecialidadeService.create(req.body);
            return ResponseHandlers.onSuccess(res, especialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir Especialidade', error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const especialidadeId = parseInt(req.params.idEspecialidade);
            const props = req.body;
            const especialidade: IEspecialidade = await EspecialidadeService.update(especialidadeId, props);
            return ResponseHandlers.onSuccess(res, especialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao atualizar especialidade', error);
        }
    }

    async destroy(req: Request, res: Response){
        try {
            const especialidadeId = parseInt(req.params.idEspecialidade);
            const especialidade: IEspecialidade = await EspecialidadeService.delete(especialidadeId); 
            return ResponseHandlers.onSuccess(res, especialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir a especialidade', error);
        }
    }

}
