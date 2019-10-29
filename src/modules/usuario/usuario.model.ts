import { IProfissional } from "../profissional/profissional.model";
import { IConsulta } from "../consulta/consulta.model";

export interface IUsuario {
    readonly idUsuario: number,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    tipoUsuario: string,
    picture: Blob,
    Profissionals?: IProfissional[],
    Consulta?: IConsulta[];
}


export function createUsuario({idUsuario, nome, email, senha, telefone, tipoUsuario, picture, Profissionals, Consulta}: any): IUsuario {
    return {
        idUsuario, nome, email, senha, telefone, tipoUsuario, picture, Profissionals, Consulta
    }
}

export function createUsuarios(data: any[]): IUsuario[] {
    return data.map(createUsuario);
}

export function createUsuarioById({idUsuario, nome, email, senha, telefone, tipoUsuario, picture, Profissionals, Consulta}: any): IUsuario {
    return {
        idUsuario, nome, email, senha, telefone, tipoUsuario, picture, Profissionals, Consulta
    };
}

export function createUsuarioByEmail({idUsuario, nome, email, senha, telefone, tipoUsuario, picture, Profissionals, Consulta}: any): IUsuario {
    return {
        idUsuario, nome, email, senha, telefone, tipoUsuario, picture, Profissionals, Consulta
    };
}