import { IProfissional } from "../profissional/profissional.model";
import { IClinica } from "../clinica/clinica.model";
import { IProfissionalClinica } from "../profissionalclinica/profissionalclinica.model";
import { IUsuario } from "../usuario/usuario.model";
export interface IConsulta {
    readonly idConsulta: number 
    idProfissionalClinica?: number,
    ProfissionalClinica?: IProfissionalClinica,
    idUsuario?: number,
    Usuario?: IUsuario;
    dataHoraConsulta: Date;
    statusConsulta: number;
}

export function createConsulta(
    {idConsulta, ProfissionalClinica, Usuario, dataHoraConsulta, statusConsulta}: any): IConsulta {
    return {
        idConsulta, ProfissionalClinica, Usuario, dataHoraConsulta, statusConsulta
    }
}

export function createConsultas(data: any[]): IConsulta[] {
    return data.map(createConsulta);
}