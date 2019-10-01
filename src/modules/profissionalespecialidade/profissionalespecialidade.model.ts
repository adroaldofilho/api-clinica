import { IProfissional } from "../profissional/profissional.model";
import { IEspecialidade } from "../especialidade/especialidade.model";
export interface IProfissionalEspecialidade {
    readonly idProfissionalEspecialidade: number,
    idEspecialidade?: number,
    Especialidade?: IEspecialidade,
    idProfissional?: number,
    Profissional?: IProfissional;
}

export function createProfissionalEspecialidade(
    {idProfissionalEspecialidade, Especialidade, Profissional}: any): IProfissionalEspecialidade {
    return {
        idProfissionalEspecialidade, Especialidade, Profissional
    }
}

export function createProfissionalEspecialidades(data: any[]): IProfissionalEspecialidade[] {
    return data.map(createProfissionalEspecialidade);
}