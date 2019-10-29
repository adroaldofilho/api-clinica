import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import ProfissionalClinicaService from './profissionalclinica.service';
import { IProfissionalClinica } from './profissionalclinica.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class ProfissionalClinicaRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('profissionalclinica');
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idProfissionalClinica`,
                    callback: this.findOne,
                    isProtected: true
                },
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/getbyclinica/:idClinica`,
                    callback: this.findByClinica,
                    isProtected: true
                }
            ],
            post: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/create`,
                    callback: this.create,
                    isProtected: true
                },
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/destroybyprofissionalclinica`,
                    callback: this.destroyByProfissionalClinica,
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idProfissionalClinica/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const profissionalClinica: Array<IProfissionalClinica> = await ProfissionalClinicaService.getAll(); 
            return ResponseHandlers.onSuccess(res, profissionalClinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todos as associações de profissionais com Clinica', error);
        }
    }

    async findByClinica(req: Request, res: Response){
        
        try {
            const clinicaId = parseInt(req.params.idClinica);
            const profissionalClinica: Array<IProfissionalClinica> = await ProfissionalClinicaService.getByClinica(clinicaId); 
            return ResponseHandlers.onSuccess(res, profissionalClinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todos as associações de profissionais com Clinica', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const profissionalClinicaId = parseInt(req.params.idProfissionalClinica);
            const profissionalClinica: IProfissionalClinica = await ProfissionalClinicaService.getById(profissionalClinicaId);
            return ResponseHandlers.onSuccess(res, profissionalClinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar a associação de profissional com Clinica', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const profissionalClinica: IProfissionalClinica = await ProfissionalClinicaService.create(req.body);
            return ResponseHandlers.onSuccess(res, profissionalClinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir a associação de profissional com Clinica', error);
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
            const profissionalClinicaId = parseInt(req.params.idProfissionalClinica);
            const profissionalClinica: IProfissionalClinica = 
            await ProfissionalClinicaService.delete(profissionalClinicaId); 
            return ResponseHandlers.onSuccess(res, profissionalClinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir a associação de profissional com Clinica', error);
        }
    }

    async destroyByProfissionalClinica(req: Request, res: Response){
        try {
            console.log('destroyByProfissionalClinica = ', req.body);
            const clinicaId = req.body['idClinica'];
            const profissionalId = req.body['idProfissional'];
            const profissionalClinica: IProfissionalClinica = 
            await ProfissionalClinicaService.deleteByProfissionalClinica(profissionalId, clinicaId); 
            return ResponseHandlers.onSuccess(res, profissionalClinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir a associação de profissional com Clinica', error);
        }
    }
}
