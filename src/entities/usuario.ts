import * as bcrypt from 'bcrypt';
export default function (sequelize, DataTypes){
    const Usuario = sequelize.define('Usuario', {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }    
        },
        tipoUsuario: {
            type: DataTypes.STRING // Secretaria, Paciente, Profissional, Administrador
        },
        picture: {
            type: DataTypes.BLOB
        }
     
    });
    
    Usuario.beforeCreate((usuario) => {
        return hashPassword(usuario);
    });

    Usuario.beforeUpdate((usuario) => {
        return hashPassword(usuario);
    });

    function hashPassword(usuario){
        const salt = bcrypt.genSaltSync(10);
        usuario.set('senha', bcrypt.hashSync(usuario.senha, salt));

    }

    return Usuario;
}