import * as bcrypt from 'bcrypt';
export default function (sequelize, DataTypes){
    const Profissional = sequelize.define('Profissional', {
        idProfissional: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        picture: {
            type: DataTypes.BLOB
        }
     
    });
    
    return Profissional;
}