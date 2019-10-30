import { AuthRouterModule } from '../modules/auth/auth-router';
import { UsuarioRouterModule } from '../modules/usuario/usuario.router';
import { ProfissionalRouterModule } from '../modules/profissional/profissional.router';
import { EspecialidadeRouterModule } from '../modules/especialidade/especialidade.router';
import { ClinicaRouterModule } from '../modules/clinica/clinica.router';
import { ProfissionalEspecialidadeRouterModule } from '../modules/profissionalespecialidade/profissionalespecialidade.router';
import { ProfissionalClinicaRouterModule } from '../modules/profissionalclinica/profissionalclinica.router';
import { ConsultaRouterModule } from '../modules/consulta/consulta.router';
import { PlanoRouterModule } from './plano/plano.router';
// import { DocumentoConsultaRouterModule } from '../modules/documentoconsulta/documentoconsulta.router';
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