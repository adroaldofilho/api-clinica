import * as bcrypt from 'bcrypt';
export default function (sequelize, DataTypes){
    const Especialidade = sequelize.define('Especialidade', {
        idEspecialidade: {
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
        }
     
    });
    
    return Especialidade;
}