import { IUsuario, createUsuario, createUsuarios, createUsuarioById, createUsuarioByEmail } 
                    from './usuario.model';
import * as BlueBird from 'bluebird';
const model = require('../../entities');

export class UsuarioService  {
    public idUsuario: number;
    public nome: string;
    public email: string;
    public senha: string;
    public telefone: string;
    public picture: Blob

    constructor(){

    }
    create(usuario: any){
        return model.Usuario.create(usuario);
    }

    getAll(): BlueBird<IUsuario[]> {
        return model.Usuario.findAll({
            order: ['nome'],
            include: [ { model: model.Profissional } ]
        })
        .then(createUsuarios);
    }

    getById(idUsuario: number): BlueBird<IUsuario> {
        return model.Usuario.findOne({
            where: {idUsuario},
            include: [ { model: model.Profissional } ]
        })
        .then(createUsuarioById);
    }

    getByEmail(email: string): BlueBird<IUsuario> {
        return model.Usuario.findOne({
            where: {email}
        })
        .then(createUsuarioByEmail);
    }

    update(idUsuario: number, usuario: any){
        return model.Usuario.update(usuario, {
            where: {idUsuario},
            fields: ['nome', 'email', 'senha', 'telefone', 'picture'],
            hooks: true,
            individualHooks: true
          });
    }
    
    delete(idUsuario: number){
        return model.Usuario.destroy({
            where: {idUsuario}
          });
    }
}
export default new UsuarioService();
