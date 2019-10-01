import * as HTTPStatus from 'http-status';
import * as jwt from 'jwt-simple';
import * as bcrypt from 'bcrypt';
import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
const { secret } = require('../../config/env');

class ResponseHandlers{
    authFail(req: Request, res: Response){
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }

    authSuccess(res: Response, password: string, usuario: any){
        
        const isMatch = bcrypt.compareSync(password, usuario.senha);
        if (isMatch) {
            const payload = { idUsuario: usuario.idUsuario };
            res.json({
                token: jwt.encode(payload, secret),
                usuario: usuario
            });
        } else {
            res.sendStatus(HTTPStatus.UNAUTHORIZED);
        }
    }

    onError (res: Response, message: string, err: any){
        console.log(err);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    }

    onSuccess (res: Response, data: any){
        res.status(HTTPStatus.OK).json({payload: data});
    }

    errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
            res.status(500).json({
            errorCode: 'ERR-001',
            message: `Erro interno do servidor: ${err}`
        });
    }

    dbErrorHandler (res: Response, err: any){
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            code: 'ERRO-002',
            message: `Erro de banco de dados: ${err}`
        });
    }
}

export default new ResponseHandlers();