import { IProfissionalEspecialidade } from '../profissionalespecialidade/profissionalespecialidade.model';
export interface IEspecialidade {
    readonly idEspecialidade: number,
    nome: number,
    ProfissionalEspecialidade: IProfissionalEspecialidade[]
}

export function createEspecialidade({idEspecialidade, nome, ProfissionalEspecialidade}: any): IEspecialidade {
    return {
        idEspecialidade, nome, ProfissionalEspecialidade
    }
}

export function createEspecialidades(data: any[]): IEspecialidade[] {
    return data.map(createEspecialidade);
}

export function createEspecialidadeById({idEspecialidade, nome, ProfissionalEspecialidade}: any): IEspecialidade {
    return {
        idEspecialidade, nome, ProfissionalEspecialidade
    };
}

export function createEspecialidadeByEmail({idEspecialidade, nome, ProfissionalEspecialidade}: any): IEspecialidade {
    return {
        idEspecialidade, nome, ProfissionalEspecialidade
    };
}