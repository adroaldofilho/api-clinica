import { IProfissionalClinica } from "../profissionalclinica/profissionalclinica.model";

export interface IClinica {
    readonly idClinica: number,
    nome: number,
    telefone: string,
    endereco: string,
    picture: Blob
    ProfissionalClinicas?: IProfissionalClinica[];
}

export function createClinica({idClinica, nome, telefone, endereco, picture, ProfissionalClinicas}: any): IClinica {
    return {
        idClinica, nome, telefone, endereco, picture, ProfissionalClinicas
    }
}

export function createClinicas(data: any[]): IClinica[] {
    return data.map(createClinica);
}
