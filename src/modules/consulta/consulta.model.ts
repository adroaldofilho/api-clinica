import { IProfissionalClinica } from "../profissionalclinica/profissionalclinica.model";
import { IUsuario } from "../usuario/usuario.model";
import { IPlano } from "../plano/plano.model";
import { IDocumentoConsulta } from "../documentoconsulta/documentoconsulta.model";
export interface IConsulta {
    readonly idConsulta: number 
    idProfissionalClinica?: number,
    ProfissionalClinica?: IProfissionalClinica,
    idUsuario?: number,
    Usuario?: IUsuario;
    dataHoraConsulta: Date;
    statusConsulta: number;
    idPlano?: number;
    Plano?: IPlano;
    DocumentoConsulta?: IDocumentoConsulta[];
}

export function createConsulta(
    {idConsulta, ProfissionalClinica, Usuario, dataHoraConsulta, statusConsulta, Plano, DocumentoConsulta}: any): IConsulta {
    return {
        idConsulta, ProfissionalClinica, Usuario, dataHoraConsulta, statusConsulta, Plano, DocumentoConsulta
    }
}

export function createConsultas(data: any[]): IConsulta[] {
    return data.map(createConsulta);
}