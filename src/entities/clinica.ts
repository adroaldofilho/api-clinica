import * as bcrypt from 'bcrypt';
export default function (sequelize, DataTypes){
    const Clinica = sequelize.define('Clinica', {
        idClinica: {
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
        telefone: {
            type: DataTypes.STRING
        },
        endereco: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.BLOB
        }
    });
    
    return Clinica;
}