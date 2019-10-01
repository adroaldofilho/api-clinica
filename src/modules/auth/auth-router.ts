import { Request, Response } from 'express';
import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-router-module';
import Usuario from '../usuario/usuario.service';
import ResponseHandlers from '../../core/handlers/response-handlers';


export class AuthRouterModule extends BaseRouterModule{

    constructor(){
        super('auth');
    }

    protected MODULES_ENDPOINT_MAP: ModuleEndpointMap = { 
        [this.moduleName]: {
            post: [
                {
                    endpoint: `${ this.context }/${ this.version }/${ this.moduleName }/token`,
                    callback: this.auth,
                    isProtected: false
                }
            ]
        }
    };

    async auth(req: Request, res: Response) {
        const { email, senha } = req.body;
        console.log(email, senha);
        if (email && senha){
            try {
                const usuario = await Usuario.getByEmail(email);
                console.log(usuario);
                return ResponseHandlers.authSuccess(res, senha, usuario);
            } catch (error) {
                return ResponseHandlers.authFail(req, res);
            }
        } else {
            return ResponseHandlers.onError(res, 'Necessário informar email e senha!', 'no-credentials');
        }
    }

}