import { IProfissional } from "../profissional/profissional.model";

export interface IUsuario {
    readonly idUsuario: number,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    picture: Blob,
    Profissionals?: IProfissional[];
}


export function createUsuario({idUsuario, nome, email, senha, telefone, picture, Profissionals}: any): IUsuario {
    return {
        idUsuario, nome, email, senha, telefone, picture, Profissionals
    }
}

export function createUsuarios(data: any[]): IUsuario[] {
    return data.map(createUsuario);
}

export function createUsuarioById({idUsuario, nome, email, senha, telefone, picture, Profissionals}: any): IUsuario {
    return {
        idUsuario, nome, email, senha, telefone, picture, Profissionals
    };
}

export function createUsuarioByEmail({idUsuario, nome, email, senha, telefone, picture, Profissionals}: any): IUsuario {
    return {
        idUsuario, nome, email, senha, telefone, picture, Profissionals
    };
}