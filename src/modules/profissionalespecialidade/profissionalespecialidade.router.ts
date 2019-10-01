import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import ProfissionalEspecialidadeService from './profissionalespecialidade.service';
import { IProfissionalEspecialidade } from './profissionalespecialidade.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class ProfissionalEspecialidadeRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('profissionalespecialidade');
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idProfissionalEspecialidade`,
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
            // put: [
            //     {
            //         endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idProfissional/update`,
            //         callback: this.update,
            //         isProtected: true
            //     }
            // ],
            delete: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idProfissionalEspecialidade/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const profissionalEspecialidade: Array<IProfissionalEspecialidade> = await ProfissionalEspecialidadeService.getAll(); 
            return ResponseHandlers.onSuccess(res, profissionalEspecialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todos as associações de profissionais com especialidade', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const profissionalEspecialidadeId = parseInt(req.params.idProfissionalEspecialidade);
            const profissionalEspecialidade: IProfissionalEspecialidade = await ProfissionalEspecialidadeService.getById(profissionalEspecialidadeId);
            return ResponseHandlers.onSuccess(res, profissionalEspecialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar a associação de profissional com especialidade', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const profissionalEspecialidade: IProfissionalEspecialidade = await ProfissionalEspecialidadeService.create(req.body);
            return ResponseHandlers.onSuccess(res, profissionalEspecialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir a associação de profissional com especialidade', error);
        }
    }

    // async update(req: Request, res: Response){
    //     try {
    //         const profissionalId = parseInt(req.params.idProfissional);
    //         const props = req.body;
    //         const profissional: IProfissional = await ProfissionalService.update(profissionalId, props);
    //         return ResponseHandlers.onSuccess(res, profissional);
    //     } catch (error) {
    //         return ResponseHandlers.onError(res, 'Erro ao atualizar profissional', error);
    //     }
    // }

    async destroy(req: Request, res: Response){
        try {
            const profissionalEspecialidadeId = parseInt(req.params.idProfissionalEspecialidade);
            const profissionalEspecialidade: IProfissionalEspecialidade = 
            await ProfissionalEspecialidadeService.delete(profissionalEspecialidadeId); 
            return ResponseHandlers.onSuccess(res, profissionalEspecialidade);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir a associação de profissional com especialidade', error);
        }
    }

}
