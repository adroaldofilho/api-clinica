
export interface IPlano {
    readonly idPlano: number,
    nome: number,
    telefone: string,
    url: string,
    email: string
}

export function createPlano({idPlano, nome, telefone, url, email}: any): IPlano {
    return {
        idPlano, nome, telefone, url, email
    }
}

export function createPlanos(data: any[]): IPlano[] {
    return data.map(createPlano);
}
