import { IConsulta } from "../consulta/consulta.model";

export interface IDocumentoConsulta {
    readonly idDocumentoConsulta: number,
    idConsulta?: number,
    Consulta?: IConsulta,
    textoDocumentoConsulta: string;
}

export function createDocumentoConsulta(
    {idDocumentoConsulta, idConsulta, Consulta, textoDocumentoConsulta}: any): IDocumentoConsulta {
    return {
        idDocumentoConsulta, idConsulta, Consulta, textoDocumentoConsulta
    }
}

export function createDocumentoConsultas(data: any[]): IDocumentoConsulta[] {
    return data.map(createDocumentoConsulta);
}