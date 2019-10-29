import { AuthRouterModule } from '../modules/auth/auth-router';
import { UsuarioRouterModule } from '../modules/usuario/usuario.router';
import { ProfissionalRouterModule } from './profissional/profissional.router';
import { EspecialidadeRouterModule } from './especialidade/especialidade.router';
import { ClinicaRouterModule } from './clinica/clinica.router';
import { ProfissionalEspecialidadeRouterModule } from './profissionalespecialidade/profissionalespecialidade.router';
import { ProfissionalClinicaRouterModule } from './profissionalclinica/profissionalclinica.router';
import { ConsultaRouterModule } from './consulta/consulta.router';
import { PlanoRouterModule } from './plano/plano.router';
import { DocumentoConsultaRouterModule } from './documentoconsulta/documentoconsulta.router';

export interface FeatureModuleRouter {
    moduleName: any;
    parser: string;
}


export class ModulesRouterMapper {

    public registeredModules: Array<FeatureModuleRouter> = [
        {
            moduleName: AuthRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: UsuarioRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: ProfissionalRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: EspecialidadeRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: ClinicaRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: ProfissionalEspecialidadeRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: ProfissionalClinicaRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: ConsultaRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: PlanoRouterModule,
            parser: 'getRoutesFromModules'
        },
        {
            moduleName: DocumentoConsultaRouterModule,
            parser: 'getRoutesFromModules'
        }
    ];
}