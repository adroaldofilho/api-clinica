import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import ClinicaService from '../clinica/clinica.service';
import { IClinica } from './clinica.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class ClinicaRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('clinica');
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idClinica`,
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idClinica/update`,
                    callback: this.update,
                    isProtected: true
                }
            ],
            delete: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idClinica/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const clinica: Array<IClinica> = await ClinicaService.getAll(); 
            return ResponseHandlers.onSuccess(res, clinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todas as clinicas', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const clinicaId = parseInt(req.params.idClinica);
            const clinica: IClinica = await ClinicaService.getById(clinicaId);
            return ResponseHandlers.onSuccess(res, clinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar a clinica', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const clinica: IClinica = await ClinicaService.create(req.body);
            return ResponseHandlers.onSuccess(res, clinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir clinica', error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const clinicaId = parseInt(req.params.idClinica);
            const props = req.body;
            const clinica: IClinica = await ClinicaService.update(clinicaId, props);
            return ResponseHandlers.onSuccess(res, clinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao atualizar Clinica', error);
        }
    }

    async destroy(req: Request, res: Response){
        try {
            const clinicaId = parseInt(req.params.idClinica);
            const clinica: IClinica = await ClinicaService.delete(clinicaId); 
            return ResponseHandlers.onSuccess(res, clinica);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir a Clinica', error);
        }
    }

}
