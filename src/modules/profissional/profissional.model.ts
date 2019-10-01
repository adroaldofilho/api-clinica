import { IUsuario } from "../usuario/usuario.model";
import { IProfissionalEspecialidade } from '../profissionalespecialidade/profissionalespecialidade.model';
export interface IProfissional {
    readonly idProfissional: number,
    idUsuario?: number,
    picture: Blob,
    Usuario?: IUsuario,
    ProfissionalEspecialidades?: IProfissionalEspecialidade[];
}

export function createProfissional({idProfissional, idUsuario, picture, Usuario, ProfissionalEspecialidades}: any): IProfissional {
    return {
        idProfissional, idUsuario, picture, Usuario, ProfissionalEspecialidades
    }
}

export function createProfissionals(data: any[]): IProfissional[] {
    return data.map(createProfissional);
}