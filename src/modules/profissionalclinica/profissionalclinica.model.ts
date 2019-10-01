import { IProfissional } from "../profissional/profissional.model";
import { IClinica } from "../clinica/clinica.model";
export interface IProfissionalClinica {
    readonly idProfissionalClinica: number,
    idClinica?: number,
    Clinica?: IClinica,
    idProfissional?: number,
    Profissional?: IProfissional;
}

export function createProfissionalClinica(
    {idProfissionalClinica, Clinica, Profissional}: any): IProfissionalClinica {
    return {
        idProfissionalClinica, Clinica, Profissional
    }
}

export function createProfissionalClinicas(data: any[]): IProfissionalClinica[] {
    return data.map(createProfissionalClinica);
}