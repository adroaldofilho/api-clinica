import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import UsuarioService from '../usuario/usuario.service';
import { IUsuario } from './usuario.model';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class UsuarioRouterModule  extends BaseRouterModule {
    private email: string;

    constructor(){
        super('usuario');
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
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idUsuario`,
                    callback: this.findOne,
                    isProtected: true
                },
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/tipousuario/:tipoUsuario`,
                    callback: this.findByTipoUsuario,
                    isProtected: true
                }
            ],
            post: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/create`,
                    callback: this.create,
                    isProtected: false
                }
            ],
            put: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idUsuario/update`,
                    callback: this.update,
                    isProtected: true
                }
            ],
            delete: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/:idUsuario/destroy`,
                    callback: this.destroy,
                    isProtected: true
                }
            ]
            
        }
    };

    async index(req: Request, res: Response){
        
        try {
            const usuario: Array<IUsuario> = await UsuarioService.getAll(); 
            return ResponseHandlers.onSuccess(res, usuario);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todos os usuários', error);
        }
    }
    
    async findByTipoUsuario(req: Request, res: Response){
        
        try {
            const tipoUsuario = req.params.tipoUsuario;
            const usuario: Array<IUsuario> = await UsuarioService.getByTipoUsuario(tipoUsuario); 
            return ResponseHandlers.onSuccess(res, usuario);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar todos os usuários', error);
        }
    }

    async findOne(req: Request, res: Response){
        try {
            const usuarioId = parseInt(req.params.idUsuario);
            const usuario: IUsuario = await UsuarioService.getById(usuarioId);
            console.log('find Usuario: ', usuario );
            return ResponseHandlers.onSuccess(res, usuario);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao buscar o usuário', error);
        }
    }

    async create(req: Request, res: Response){
        try {
            const usuario: IUsuario = await UsuarioService.create(req.body);
            return ResponseHandlers.onSuccess(res, usuario);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao incluir usuário', error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const usuarioId = parseInt(req.params.idUsuario);
            const props = req.body;
            const usuario: IUsuario = await UsuarioService.update(usuarioId, props);
            return ResponseHandlers.onSuccess(res, usuario);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao atualizar usuário', error);
        }
    }

    async destroy(req: Request, res: Response){
        try {
            const usuarioId = parseInt(req.params.idUsuario);
            const usuario: IUsuario = await UsuarioService.delete(usuarioId); 
            return ResponseHandlers.onSuccess(res, usuario);
        } catch (error) {
            return ResponseHandlers.onError(res, 'Erro ao excluir o usuário', error);
        }
    }

}
