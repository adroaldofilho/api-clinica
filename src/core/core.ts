import * as express from 'express';
import { Application, Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { RouterModule } from './router/routes';
import ResponseHandlers from './handlers/response-handlers';
// import AuthService from '../modules/auth/auth-service';
const { secret } = require('../config/env');
const cors = require('cors');

export class CoreModule {
    private _express: Application;
    private authService;
    private routerModule: RouterModule;

    constructor() {
        this._express = express();
        // this.authService = new AuthService(secret).setStrategy();
        this.configExpress();
        this.routerModule = new RouterModule(this.express);
        this.router();
    }

    public get express(): Application {
        return this._express;
    }

    private configExpress(): void {
        
        
        this.express.use(cors());
        //this.express.use(this.configHeaders.bind(this));
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(ResponseHandlers.errorHandlerApi);
        // this.express.use(this.authService.initialize());
    }

    private router(): void {
        // this.routerModule.exposeRoutes(this.authService.autenticate);
        console.log('CoreModule router - PASSEI AQUI 1');
        this.routerModule.exposeRoutes();
    }

    private configHeaders(req: Request, res: Response, next: NextFunction){
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        // res.setHeader('Access-Control-Allow-Origin', 'http://192.168.15.133:4200');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    }
}